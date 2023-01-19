import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import '../../sass/page/Driver-profile/style.scss';
import { useHistory, Link } from "react-router-dom";
// function driver profile
function Driver_profile() {
    // method scroll top
    window.scrollTo(0, 0);
    // method history
    const history = useHistory();
    // funtion cancel travel
    function cancel_travel(){
        // history change page
history.push('/index');
    }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* component map */}
            <Mapir />
            {/* box driver profile */}
            <div className="style-display-driver-profile">
                {/* box price travel */}
                <div className="box-price-time">
                    <div className="price-origin-car-driver-profile">
                        {/* text price travel */}
                        <p className='text-price-origin'>هزینه سفر</p>
                        <p className='text-price-origin' style={{ color: 'red' }}>:4000تومان</p>
                        <input type="text" style={{ width: '40%', border: '1px solid gray' }} />
                    </div>
                    {/* time achieve car */}
                    <p className="time-Reach-the-car"><span style={{ color: 'red' }}>4دقیقه</span> تا رسیدن ماشین</p>
                </div>
                <div className="box-driver-profile">
                    <div className="driver-profile">
                        {/* img driver  */}
                        <div className="box-img-name-driver">
                            <div className="box-img-driver">
                                <img className='img-driver' src={process.env.PUBLIC_URL + '/me2.jpg'} alt="" />
                                {/* name driver */}
                                <p style={{ fontSize: '13px' }}>عرشیا صفی خانی</p>
                            </div>
                            <div className="box-call-driver">
                                {/* call driver car */}
                                <div className="img-call-driver"></div>
                                <div className="img-call-driver"></div>
                            </div>
                        </div>
                        <div className="box-tag-car">
                            {/* informition car */}
                            <p>پراید سفید</p>
                            {/* tag car */}
                            <div className="tag-car">
                                <div className='tag-city'>18</div>
                                <div>522 ج 22</div>
                            </div>
                        </div>
                        <div className="box-style-input-driver">
                            <div className="box-input-profile-driver">
                                {/* discount off input */}
                                <input type="text" className="Discount-profile-driver" placeholder='کد تخفیف' />
                                <div className="underline-discount"></div>
                                <select style={{ color: 'gray', fontSize: '11px', marginLeft: '12px' }} name="cars" className='Discount-profile-driver'>
                                    {/* selector option */}
                                    <option value="volvo"> گزینه ها</option>
                                    <option value="saab">Saab</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-profile-driver">
                            {/* submit cancell */}
                       <div  className='submit-cancell' onClick={cancel_travel}>لغو سفر</div>
                       {/* text wellcome */}
                           <p style={{fontSize:'13px'}}> آکوکار سفر خوشی را برای شما ارزومند است</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end box driver profile */}
        </div>
    )
}
export default Driver_profile;