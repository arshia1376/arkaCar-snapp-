import '../../sass/page/motor-delivery/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
function Motor_deliveryy() {
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
                <div className="box-origin-car" style={{height:'340px'}}>
                <input type="text" className='origin-car' placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    <div className="box-unit">
                        <input type="text" className='unit'  placeholder='واحد'/>
                        <input type="text" className="unit unit-border" placeholder='پلاک' />
                    </div>
                    <input type="text" className='origin-car' placeholder='نام و نام خانوادگی'/>
                    <input type="number" className='origin-car' placeholder='شماره موبایل'/>
                    <Link to='/loading_search_car' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
        </div>
    );
};
export default Motor_deliveryy;