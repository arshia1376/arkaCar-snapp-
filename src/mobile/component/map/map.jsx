import React from "react";
import 'mapir-react-component/dist/index.css';
import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
  transformRequest: url => {
    return {
      url: url,
      headers: {
        "x-api-key": 'your-api-key', //Mapir api key
        "Mapir-SDK": "reactjs"
      }
    };
  }
});
function Mapirr(){
  return (
    <div className="App" style={{position:"absolute"}}>
      <Mapir center={[51.42047, 35.729054]} Map={Map} />
    </div>
  );
};

export default Mapirr;