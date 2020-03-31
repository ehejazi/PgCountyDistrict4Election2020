const layer = {
    addLayer: (props) => {
        // add other props such as max and min zoom levels, on click function
        const {map, layerId, layerProperties, source} = props;
        const {layout, sourceLayer, type, paint} = layerProperties;
        
        map.addSource(layerId, {type: source.type, url: source.url});

        map.addLayer({
            'id': layerId,
            'type': type,
            'source': layerId,
            'layout': layout,
            'paint': paint,
            'source-layer': sourceLayer
        });
    }
}

export default layer;