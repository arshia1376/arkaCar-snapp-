import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
function Origin_of_car_record() {
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
                <div className="box-origin-car-select" style={{height:'340px'}}>
                <input type="text" className='origin-car' placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    <input type="text" className='origin-car' placeholder='توضیحات'/>
                    <select name="cars" id="select-origin-option">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <div className="price-origin-car">
                            <p className='text-price-origin'>هزینه سفر</p>
                            <p className='text-price-origin' style={{color:'red'}}>:4000تومان</p>
                            <div>
                            <input type="text" style={{width:'40%',border:'1px solid rgba(184, 184, 184, 0.767)'}} placeholder='کد تخفیف'/>
                            <input type="button" className='discount-code-submit' style={{marginRight:'13px'}} value="ثبت کد" />
                            </div>
                        </div>
                    <Link to='/loading_search_car' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
        </div>
    );
};
export default Origin_of_car_record;