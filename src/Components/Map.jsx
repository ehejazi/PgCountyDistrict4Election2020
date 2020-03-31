
import React from 'react'
import mapboxgl from 'mapbox-gl'
import '../map.css';
import layer from '../Utils/layer';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWlhZGhlamF6aSIsImEiOiJjazgweXEzYmMwbGZkM2RzY25nYmR6OHlxIn0.5YKProSG0dIl6f92iewJHA';
const styleKey = 'mapbox://styles/aiadhejazi/ck8c8yrpp2rnl1inebddiibk3';
const darkStyleUrl = 'mapbox://styles/aiadhejazi/ck8dh179z0ysj1imisyhi6p66';

class Map extends React.Component {
    mapRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            lat: 38.873943,
            lng: -76.819471,
            zoom: 9
        }
    }
    
   _addDistrict4Boundries = (map) => {
        const addressLayer = {
            map,
            layerId: 'dist-border',
            layerProperties: {
                layout: {
                    'visibility': 'visible'
                },
                sourceLayer: 'District_4',
                type: 'line',
                paint: {
                    'line-color': '#ed6498',
                    'line-width': 3.5,
                    'line-opacity': 0.8
                }
            },
            source: {
                type: 'vector',
                url: 'mapbox://aiadhejazi.ck8clpaqo29md2rnqfalgsl3m-8l07c'
            }
        };
    
        layer.addLayer(addressLayer); 
   }

   _addAddressLayer(map) {
    const addressLayer = {
        map,
        layerId: 'addr',
        layerProperties: {
            layout: {
                'visibility': 'visible'
            },
            sourceLayer: 'Addresses',
            type: 'circle',
            paint: {
                'circle-radius': 3.5,
                'circle-color': 'rgba(55,148,179,1)'
            }
        },
        source: {
            type: 'vector',
            url: 'mapbox://aiadhejazi.ck8clvaug0gx02smnex8t1o6h-7n5x0'
        }
    };

    layer.addLayer(addressLayer); 
   }


    componentDidMount() {
        const {lng, lat, zoom} = this.state;

        this.map = new mapboxgl.Map({
            container: this.mapRef.current,
            style: darkStyleUrl,
            center: [lng, lat],
            zoom,
          });
        this.map.setMinZoom(9);
        this.map.dragPan.enable();
        
        this.map.on('load', () => {
            // add all layers
            this._addAddressLayer(this.map);
            this._addDistrict4Boundries(this.map);
        
        });

        this.map.on('zoom', () => {
            const currentZoom = this.map.getZoom();
            this.setState({zoom: currentZoom})
        });
    }

    render() {
        const { lng, lat, zoom } = this.state;
        return (
            <>
                <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div ref={this.mapRef}  id="map"/>
            </>
        );
    }
}

export default Map;