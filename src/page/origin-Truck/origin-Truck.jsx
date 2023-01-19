import '../../sass/page/origin-Truck/style.scss';
import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
// function origin truck
function Origin_truck() {
    // method history
    const history = useHistory();
    // function submit back page
    function BackPage(){
        // history push page index
      history.push('/index');
      }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* component mapir */}
            <Mapir />
            {/* box submit back */}
            <div className="submit-back-origin">
                {/* img submit back */}
                <img
                  onClick={BackPage}
                    className="img-submit-back"
                    src={process.env.PUBLIC_URL + "/download.png"}
                    alt=""
                />
                {/* box origin truck */}
            </div>
            <div className="box-origin-cars-truck">
                {/* box input */}
                <div className="box-origin-car box-origin-truck" >
                    <input type="text" className='origin-car input-source-origin-car' placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    <div className="box-unit">
                        {/* box unit */}
                        <input type="text" className='unit'  placeholder='واحد'/>
                        <input type="text" className="unit unit-border" placeholder='پلاک' />
                    </div>
                    {/* box selector option */}
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
                    {/* box input information */}
                    <input type="text" className='origin-car' placeholder='توضیحات'  />
                    <div className="price-origin-car">
                        {/* box price */}
                        <p className='text-price-origin'>هزینه سفر</p>
                        <p className='text-price-origin' style={{ color: 'red' }}>:4000تومان</p>
                        {/* box discount */}
                        <input type="text" style={{ width: '30%', border: '1px solid rgba(184, 184, 184, 0.767);' }} placeholder='کد تخفیف' />
                        <input type="button" className='discount-code-submit' value="ثبت کد" />
                    </div>
{/* submit next page */}
                    <Link to='/loading_search_car' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
        </div>
        // end html
    );
};
export default Origin_truck;