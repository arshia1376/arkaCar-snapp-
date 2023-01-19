import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import '../../sass/page/Driver-profile/style.scss';
function Driver_profile() {
    return (
        <div>
            <Header />
            <Mapir />
            <div className="style-display-driver-profile">
                <div className="box-price-time">
                    <div className="price-origin-car-driver-profile">
                        <p className='text-price-origin'>هزینه سفر</p>
                        <p className='text-price-origin' style={{ color: 'red' }}>:4000تومان</p>
                        <input type="text" style={{ width: '40%', border: '1px solid gray' }} />
                    </div>
                    <p className="time-Reach-the-car"><span style={{ color: 'red' }}>4دقیقه</span> تا رسیدن ماشین</p>
                </div>
                <div className="box-driver-profile">
                    <div className="driver-profile">
                        <div className="box-img-name-driver">
                            <div className="box-img-driver">
                                <img className='img-driver' src={process.env.PUBLIC_URL + '/me2.jpg'} alt="" />
                                <p style={{ fontSize: '13px' }}>عرشیا صفی خانی</p>
                            </div>
                            <div className="box-call-driver">
                                <div className="img-call-driver"></div>
                                <div className="img-call-driver"></div>
                            </div>
                        </div>
                        <div className="box-tag-car">
                            <p>پراید سفید</p>
                            <div className="tag-car">
                                <div className='tag-city'>18</div>
                                <div>522 ج 22</div>
                            </div>
                        </div>
                        <div className="box-style-input-driver">
                            <div className="box-input-profile-driver">
                                <input type="text" className="Discount-profile-driver" placeholder='کد تخفیف' />
                                <div className="underline-discount"></div>
                                <select style={{ color: 'gray', fontSize: '11px', marginLeft: '12px' }} name="cars" className='Discount-profile-driver'>
                                    <option value="volvo"> گزینه ها</option>
                                    <option value="saab">Saab</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-profile-driver">
                            <input type="button" className='submit-cancell' value="لغو سفر" />
                           <p style={{fontSize:'13px'}}> آکوکار سفر خوشی را برای شما ارزومند است</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Driver_profile;