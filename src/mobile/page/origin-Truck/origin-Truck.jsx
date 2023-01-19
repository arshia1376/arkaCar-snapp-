import '../../sass/page/origin-Truck/style.scss';
import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
function Origin_truck() {
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
            <div className="box-origin-cars-truck">
                <div className="box-origin-car" style={{ height: '480px',marginTop:'40px' }}>
                    <input type="text" className='origin-car' placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    <div className="box-unit">
                        <input type="text" className='unit'  placeholder='واحد'/>
                        <input type="text" className="unit unit-border" placeholder='پلاک' />
                    </div>
                    <select name="cars" id="select-origin-option">
                        <option value="volvo" style={{fontSize:'13px'}}>نوع خودرو</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select name="cars" id="select-origin-option">
                        <option value="volvo">نوع بار</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <div className="Load-weight">
                        <p style={{fontSize:'13px'}}>وزن حدودی بار</p>
                        <select name="cars" className='weight-select'>
                            <option value="volvo"> 100</option>
                            <option value="saab">Saab</option>
                        </select>
                        <select name="cars" className='weight-select'>
                            <option value="volvo"> گرم</option>
                            <option value="saab">Saab</option>
                        </select>
                    </div>
                    <div className="Load-weight">
                        <p style={{fontSize:'13px'}}>ابعاد بار</p>
                        <select name="cars" className='weight-select' style={{marginRight:'45px'}}>
                            <option value="volvo"> طول</option>
                            <option value="saab">Saab</option>
                        </select>
                        <select name="cars" className='weight-select'>
                            <option value="volvo"> عرض</option>
                            <option value="saab">Saab</option>
                        </select>
                    </div>
                    <input type="text" className='origin-car' placeholder='توضیحات'  />
                    <div className="price-origin-car">
                        <p className='text-price-origin'>هزینه سفر</p>
                        <p className='text-price-origin' style={{ color: 'red' }}>:4000تومان</p>
                        <input type="text" style={{ width: '30%', border: '1px solid rgba(184, 184, 184, 0.767);' }} placeholder='کد تخفیف' />
                        <input type="button" className='discount-code-submit' value="ثبت کد" />
                    </div>

                    <Link to='/loading_search_car' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
        </div>
    );
};
export default Origin_truck;