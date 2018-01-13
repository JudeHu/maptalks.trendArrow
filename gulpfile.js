const minimist = require('minimist'),
    path = require('path'),
    gulp = require('gulp'),
    del = require('del'),
    zip = require('gulp-zip'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    connect = require('gulp-connect'),
    rollupCfg = require('./build/rollup.config'),
    BundleHelper = require('maptalks-build-helpers').BundleHelper,
    Server = require('karma').Server,
    package = require('./package.json');

const rollupWatch = rollupCfg.watch;
const bundler = new BundleHelper(package);

const knownOptions = {
    string: ['browsers', 'pattern'],
    boolean: 'coverage',
    alias: {
        'coverage': 'cov'
    },
    default: {
        browsers: null,
        coverage: false
    }
};

const options = minimist(process.argv.slice(2), knownOptions);

const browsers = [];

const configBrowsers = options.browsers || process.env['MAPTALKS_BROWSERS'] || '';
configBrowsers.split(',').forEach(name => {
    if (!name || name.length < 1) {
        return;
    }
    browsers.push(name);
});

gulp.task('scripts', () => {
    return bundler.bundle('index.js', rollupCfg.config);
});

gulp.task('build', ['scripts'], () => {});

gulp.task('minify', ['build'], () => {
    bundler.minify();
});


gulp.task('reload', ['scripts'], () => {
    gulp.src('./dist/*.js')
        .pipe(connect.reload());
});

gulp.task('default', ['build']);

