# maptalks.trendArrow

**maptalks trendArrow-style support, extend from maptalks smoothLineString(maptalks@0.37.0)**

## Usage
[Demo](https://jsfiddle.net/JudeHu/ktgejn2v/)
```javascript
var layer = new maptalks.VectorLayer('vector').addTo(map);
var trendArrowLine = new maptalks.LineString(
		[
			map.getCenter().add(0.1, 0.1),
			map.getCenter().add(-0.1, 0.1),
			map.getCenter().add(-0.1, -0.1),
			map.getCenter().add(0.5, -0.1)
		], 
		{
		  	smoothness: 1,
		  	closed: false,		// trendArrow invalid when linestring-closed
          		arrowStyle : 'trend', 	// trendArrow tyle
          		symbol:{		// trendArrow Paint-Style(same with linestring paint-style)
            			'lineColor' : 'red',
            			'lineWidth' : 12,
				'lineOpacity': 0.9
         		 }
        	}
	).addTo(layer);
```

###  
![image](https://github.com/JudeHu/maptalks.trendArrow/blob/master/dist/trendarrow-demo.png)

# License   
MIT License.
