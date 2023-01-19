import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
function Origin_of_car_application() {
    return (
        <div>
            <Header />
            <Mapir />
            <div className="submit-back-origin">
            <img
                className="img-submit-back"
                src={process.env.PUBLIC_URL + "/download.png"}
                alt=""
              />
            </div>
            <div className="box-origin-cars">
                <div className="box-origin-car">
                    <input type="text" className='origin-car' placeholder='مبدا' />
                   <input type="button" value="تایید" className='submit-origin-car' />
                </div>
            </div>
          
        </div>
    );
};
export default Origin_of_car_application;
