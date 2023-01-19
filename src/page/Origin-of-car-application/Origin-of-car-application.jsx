import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
// function Origin of car application
function Origin_of_car_application() {
    function source(e){
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
    }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
                        {/* component mapir */}
            <Mapir />
            {/* submit back origin */}
            <div className="submit-back-origin">
                {/* img submit back */}
            <img
                className="img-submit-back"
                src={process.env.PUBLIC_URL + "/download.png"}
                alt=""
              />
            </div>
            
            <div className="box-origin-cars">
                <div className="box-origin-car">
                    <input type="text" className='origin-car' onChange={source} placeholder='مبدا' />
                   <input type="button" value="تایید" className='submit-origin-car' />
                </div>
            </div>
          
        </div>
    );
};
export default Origin_of_car_application;
