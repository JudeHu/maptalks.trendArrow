# maptalks.trendArrow

maptalks trendArrow-style support, extend from maptalks smoothLineString

# Usage
```javascript
var trendArrowLine = new maptalks.LineString(
		[
			map.getCenter().add(0.1, 0.1),
			map.getCenter().add(-0.1, 0.1),
			map.getCenter().add(-0.1, -0.1),
			map.getCenter().add(0.5, -0.1),
		], 
		{
			smoothness: 1,			
			closed: false,          // trendArrow invalid when linestring-closed
			arrowStyle: 'trend',    // trendArrow tyle
			arrowSize: 20,          // trendArrowSize
			symbol: {               // trendArrow Paint-Style
				'lineColor': 'red',
				'lineWidth': 6,
				'lineOpacity': 1,
				'fillColor': "blue",
				'polygonOpacity': 1
			}
	}).addTo(map);
```

# License   
MIT License.