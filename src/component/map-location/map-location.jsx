import './style.css';
import React from "react";
import Mapir from "mapir-react-component";
const Map = Mapir.setToken({
  transformRequest: url => {
    return {
      url: url,
      headers: {
        "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5In0.eyJhdWQiOiIxNjQzNSIsImp0aSI6IjhiMTQyZjE0NDA0MTllZTc4NjdkN2U5OGZlMTZlNDdiZDYxZjgyNjFmNGM3NTQ4NzAyM2YzMGFmODgxYjJhNWNkZTdhMDE2MzQ0NTM4NGI5IiwiaWF0IjoxNjQwNDIyMzMxLCJuYmYiOjE2NDA0MjIzMzEsImV4cCI6MTY0MjkyNzkzMSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.gztXOtgDhYZsIZld0QtQchLU1rtIMDjQ0Dq0UqjNDSdOwfANHHwRLh2wyngR9ST2Z_AgDjn6spbUaoJrw3l2ejuent8UgNLb0Ch3hoKKK_3QCzNLpoAsPUS4LUXUHj1kHwQtNlnxZisHpatb9UZaka57fVBDQH93ukje9A83maZNnoiylI68uIwxlutMtU2IixXutHC0JVNdSMnwsR5WrsngNk4sXYqhVi-8i1w_7rpyBtCHQ3WtddTWqKpO5iq635osqkcxOugkJ-O624-5iJvUwJkZ9V3aEzMJXhoqHW8NZNcgFBmzls_L4VhWkVqPN4_z2Cv3hkvymkRCDOUW2w', //Mapir api key
        "Mapir-SDK": "reactjs"
      }
    };
  }
});
const Mapir_location = () => {
  return (
    <div >
      <Mapir  className='map' center={[48.534623, 34.788550]}  minZoom={[13]}
          scrollZoom={false}
      
          Map={Map}
         >
      <Mapir.Marker coordinates={[48.534623, 34.788550]}  />
      </Mapir>
    </div>
  );
};
export default Mapir_location;
