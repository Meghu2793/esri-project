import React from 'react';
import EsriLoaderReact from 'esri-loader-react';
import LazyLoad from 'react-lazyload';
import Carousel from 'nuka-carousel';
import maps_image from '../../images/maps-newyork.jpg';
import TwitterStream from '../Twitter/TwitterStream';
import './HomePage.css';
import image1 from "../../images/geo-spatial-1.jpg";
import image2 from "../../images/geo-spatial-2.jpg";
import image3 from "../../images/geo-spatial-3.jpg";
// import '../../App.css';

class HomePage extends React.Component {
  render() {
    const options = {
      url: 'https://js.arcgis.com/4.6/'
    };
    return (
      <div>
      <div className="row esri_map"> 
         <EsriLoaderReact
            options={options}
            modulesToLoad={['esri/Map', 'esri/views/MapView']}
            onReady={({ loadedModules: [Map, MapView], containerNode }) => {
              new MapView({
                container: containerNode,
                map: new Map({ basemap: 'topo' })
              })
            }}
          />
        </div>
        <LazyLoad height={200}>
          <div className="row col-md-12 placeholder_1">
            <div className="col-md-6 img_loader">
              <img src={maps_image} alt="image not found" />
            </div>
            <div className="col-md-6 headline">
              <p>Esri Interactive Mall Maps </p>
            </div>
          </div>
        </LazyLoad>
        <LazyLoad height={200} once >
          <div className="row col-md-12 placeholder_2">
            <div className="col-md-6 headline">
              <p>Twitter Live Streaming ESRI</p>
            </div>
            <div className="col-md-6 twitter_stream">
              <TwitterStream />
            </div>
          </div>
        </LazyLoad>

        {/* <div className="col-md-12"> */}
        <Carousel>
          <img src={image2} width={600} height={400}/>
          <img src={image3} width={600} height={400}/>
          <img src={image1} width={600} height={400}/>
        </Carousel>
      </div>
    );
  }
}

export default HomePage;