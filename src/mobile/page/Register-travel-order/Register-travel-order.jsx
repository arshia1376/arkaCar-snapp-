import '../../sass/page/Register-travel-order/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
function Register_travel_order() {
    return (
        <div>
            <Header />
            <Mapir />
            <div className="display-travel-order">
                <div className="style-box-travel-car">
                    <div className="travel-car">
                        <div className="Receive-request">
                            <h3 className="price-Receive-request">قیمت   :12000تومان</h3>
                            <div className="Payment-Method">
                                <p>روش پرداخت:</p>
                                <div className="style-button-payment">
                                    <div className="box-button-payment">
                                        <button className='online-price'>آنلاین</button>
                                        <button className="ofline-price">نقدی</button>
                                    </div>
                                    <button className="Accept-requests">قبول درخواست</button>
                                    <div className="box-button-payment" style={{marginTop:'10px'}}>
                                        <button className='online-price'>بعدی</button>
                                        <button className="ofline-price">قبلی</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="option-Receive-request">
                        <input type="text" className='origin-car' style={{marginTop:'70px'}} placeholder='مبدا' />
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    <div className="box-unit">
                        <input type="text" className='unit'  placeholder='واحد'/>
                        <input type="text" className="unit unit-border" placeholder='پلاک' />
                    </div>
                    <select name="cars" id="select-origin-option">
                        <option value="volvo">نوع وسیله نقلیه</option>
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
                        <p>ابعاد بار</p>
                        <select name="cars" className='weight-select' style={{marginRight:'45px'}}>
                            <option value="volvo"> طول</option>
                            <option value="saab">Saab</option>
                        </select>
                        <select name="cars" className='weight-select'>
                            <option value="volvo"> عرض</option>
                            <option value="saab">Saab</option>
                        </select>
                    </div>
                    <input type="text" className='origin-car' style={{marginBottom:'10px'}} placeholder='توضیحات' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register_travel_order;