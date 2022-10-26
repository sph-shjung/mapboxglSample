import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl'
import { accessToken } from 'mapbox-gl';

function App() {
  const token='pk.eyJ1Ijoiamhvb25wYXJrIiwiYSI6ImNrbnpvcjBhbDAxMHgyb3A2ZGgwOWhlazUifQ.Q-rbRUdLI8_-C76kizWZkg';

  return (
    // <Map
    //   initialViewState={{
    //     longitude: -122.4,
    //     latitude: 37.8,
    //     zoom:14
    //   }}
    //   style={{width:600, height:400}}
    //   mapStyle="mapbox://styles/mapbox/streets-v9"
    // >
    // </Map>
    <div>
      <button>OpenStreetMap</button>
      <Map 
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width:'100%', height:'100%'}}
        mapboxAccessToken={token}
        mapStyle="mapbox://styles/mapbox/streets-v9">
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </div>
  );
}

export default App;
