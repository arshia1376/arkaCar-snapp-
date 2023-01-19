// import React from "react";
// import 'mapir-react-component/dist/index.css';
// import Mapir from "mapir-react-component";
// // component map
// const Map = Mapir.setToken({
//   transformRequest: url => {
//     return {
//       url: url,
//       headers: {
//         "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5In0.eyJhdWQiOiIxNjQzNSIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5IiwiaWF0IjoxNjQwNDIyMzMxLCJuYmYiOjE2NDA0MjIzMzEsImV4cCI6MTY0MjkyNzkzMSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.gztXOtgDhYZsIZld0QtQchLU1rtIMDjQ0Dq0UqjNDSdOwfANHHwRLh2wyngR9ST2Z_AgDjn6spbUaoJrw3l2ejuent8UgNLb0Ch3hoKKK_3QCzNLpoAsPUS4LUXUHj1kHwQtNlnxZisHpatb9UZaka57fVBDQH93ukje9A83maZNnoiylI68uIwxlutMtU2IixXutHC0JVNdSMnwsR5WrsngNk4sXYqhVi-8i1w_7rpyBtCHQ3WtddTWqKpO5iq635osqkcxOugkJ-O624-5iJvUwJkZ9V3aEzMJXhoqHW8NZNcgFBmzls_L4VhWkVqPN4_z2Cv3hkvymkRCDOUW2w', //Mapir api key, //Mapir api key
//         "Mapir-SDK": "reactjs"
//       }
//     };
//   }
// });
// function Mapirr(){
//   return (
//     // map center
//     <div className="App" style={{position:"absolute"}}>
//       {/* maper center */}
//       <Mapir center={[51.42047, 35.729054]} Map={Map} />
//     </div>
//   );
// };

// export default Mapirr;
import React, { useState } from "react";

import Mapir from "mapir-react-component";

const Map = Mapir.setToken({
  transformRequest: url => {
    return {
      url: url,
      headers: {
        "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5In0.eyJhdWQiOiIxNjQzNSIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5IiwiaWF0IjoxNjQwNDIyMzMxLCJuYmYiOjE2NDA0MjIzMzEsImV4cCI6MTY0MjkyNzkzMSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.gztXOtgDhYZsIZld0QtQchLU1rtIMDjQ0Dq0UqjNDSdOwfANHHwRLh2wyngR9ST2Z_AgDjn6spbUaoJrw3l2ejuent8UgNLb0Ch3hoKKK_3QCzNLpoAsPUS4LUXUHj1kHwQtNlnxZisHpatb9UZaka57fVBDQH93ukje9A83maZNnoiylI68uIwxlutMtU2IixXutHC0JVNdSMnwsR5WrsngNk4sXYqhVi-8i1w_7rpyBtCHQ3WtddTWqKpO5iq635osqkcxOugkJ-O624-5iJvUwJkZ9V3aEzMJXhoqHW8NZNcgFBmzls_L4VhWkVqPN4_z2Cv3hkvymkRCDOUW2w', //Mapir api key, //Mapir api key, //Mapir api key
        "Mapir-SDK": "reactjs"
      }
    };
  }
});

const App = () => {
  const [markerArray, setMarkerArray] = useState([]);
  const [coord, setCoord] = useState([51.42, 35.72]);
  function reverseFunction(map, e) {
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${
      e.lngLat.lng
    }`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5In0.eyJhdWQiOiIxNjQzNSIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5IiwiaWF0IjoxNjQwNDIyMzMxLCJuYmYiOjE2NDA0MjIzMzEsImV4cCI6MTY0MjkyNzkzMSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.gztXOtgDhYZsIZld0QtQchLU1rtIMDjQ0Dq0UqjNDSdOwfANHHwRLh2wyngR9ST2Z_AgDjn6spbUaoJrw3l2ejuent8UgNLb0Ch3hoKKK_3QCzNLpoAsPUS4LUXUHj1kHwQtNlnxZisHpatb9UZaka57fVBDQH93ukje9A83maZNnoiylI68uIwxlutMtU2IixXutHC0JVNdSMnwsR5WrsngNk4sXYqhVi-8i1w_7rpyBtCHQ3WtddTWqKpO5iq635osqkcxOugkJ-O624-5iJvUwJkZ9V3aEzMJXhoqHW8NZNcgFBmzls_L4VhWkVqPN4_z2Cv3hkvymkRCDOUW2w', //Mapir api key, //Mapir api key
      }
    })
      .then(response => response.json())
      .then(data => console.log(data));
    const array = [];
    array.push(
      <Mapir.Marker
        coordinates={[e.lngLat.lng, e.lngLat.lat]}
        anchor="bottom"
      />
    );
    setMarkerArray(array);
  }
  return (
    <div className="App" style={{position:"absolute"}} >
      <Mapir center={coord} Map={Map} onClick={reverseFunction}>
        {markerArray}
      </Mapir>
    </div>
  );
};

export default App;