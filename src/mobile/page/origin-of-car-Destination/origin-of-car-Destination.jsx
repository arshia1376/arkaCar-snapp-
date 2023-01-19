import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { Link } from 'react-router-dom';

function Origin_of_car_destination() {
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
            <i class="fas fa-map-marker-alt"></i>
            <div className="box-origin-cars">
                <div className="box-origin-car" style={{ height: '150px' }}>
                    <input type="text" className='origin-car' placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                <Link to='/Origin_of_car_record'  className='submit-origin-car'>
                    تایید
                </Link>
                </div>
            </div>
        </div>
    );
};
export default Origin_of_car_destination;