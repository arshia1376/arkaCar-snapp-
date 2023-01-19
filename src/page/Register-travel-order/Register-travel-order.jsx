import '../../sass/page/Register-travel-order/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
// function register travel order
function Register_travel_order() {
    let history = useHistory();
    function accept_requests(){
history.push('/pageDriverLocation')
    }
    // method scroll top
    window.scrollTo(0, 0);
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* component mapir */}
            <Mapir />
            <div className="display-travel-order">
                <div className="style-box-travel-car">
                    {/* box travel car */}
                    <div className="travel-car">
                        {/* receive request */}
                        <div className="Receive-request">
                            {/* price Receive request */}
                            <h3 className="price-Receive-request">قیمت   :12000تومان</h3>
                            <div className="Payment-Method">
                                {/* payment method */}
                                <p>روش پرداخت:</p>
                                <div className="style-button-payment">
                                    <div className="box-button-payment">
                                        {/* box button pament */}
                                        {/* online price */}
                                        <button className='online-price'>آنلاین</button>
                                        {/* offline peice */}
                                        <button className="ofline-price">نقدی</button>
                                    </div>
                                    {/* button accept requestsd */}
                                    <button onClick={accept_requests} className="Accept-requests">قبول درخواست</button>
                                    <div className="box-button-payment" style={{marginTop:'10px'}}>
                                        {/*button next travel */}
                                        <button className='online-price'>بعدی</button>
                                        {/*button back travel */}
                                        <button className="ofline-price">قبلی</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* input trvael orgin car */}
                        <div className="option-Receive-request">
                        <input type="text" className='origin-car' style={{marginTop:'70px'}} placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    <div className="box-unit">
                        {/* input unit */}
                        <input type="text" className='unit'  placeholder='واحد'/>
                        <input type="text" className="unit unit-border" placeholder='پلاک' />
                    </div>
                    {/* seletor orgin option */}
                    <select name="cars" id="select-origin-option">
                        <option value="volvo">نوع وسیله نقلیه</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                      {/* seletor orgin option */}
                    <select name="cars" id="select-origin-option">
                        <option value="volvo">نوع بار</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    {/* input weight selector */}
                    <div className="Load-weight">
                        <p>وزن حدودی بار</p>
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
                        {/* seletor lead weight */}
                        <p>ابعاد بار</p>
                        <select name="cars" className='weight-select' style={{marginRight:'45px'}}>
                            <option value="volvo"> طول</option>
                            <option value="saab">Saab</option>
                        </select>
                        {/* seletor witgh */}
                        <select name="cars" className='weight-select'>
                            <option value="volvo"> عرض</option>
                            <option value="saab">Saab</option>
                        </select>
                    </div>
                    {/* input information */}
                    <input type="text" className='origin-car' style={{marginBottom:'10px'}} placeholder='توضیحات' />
                        </div>
                    </div>
                </div>
            </div>{/* box travel order */}
            
        </div>
        // end html
    );
}
export default Register_travel_order;