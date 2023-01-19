import '../../sass/page/page-driver-location/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
import Star from '../../component/star-rating/star-rating';
import React, { useState } from 'react';
function PageDriverLocation(){
    const [open, setOpen] = useState(false);
    let p = null;
    function togglepanel() {
        setOpen(!open);
    }
    if (open) {
        p=<div>
            <div className="box-star">
                <h2>به مسافر خود امتیاز دهید</h2>
                <Star />
                <Link className='submit-rating' to="/Register_travel_order">اتمام</Link>
            </div>
        </div>
    }
    return(
        <>
             {/* component header */}
             <Header />
               {/* component mapir */}
            <Mapir />

            <div className="style-display-driver-profile">
                {/* box price travel */}
                <div className="box-price-time">
                    <div className="price-origin-car-driver-profile">
                        {/* text price travel */}
                        <p className='text-price-origin'>هزینه سفر</p>
                        <p className='text-price-origin' style={{ color: 'red' }}>:4000تومان</p>
                        <input type="text" style={{ width: '40%', border: '1px solid gray' }} />
                    </div>
                    <div className="box-rating">
                    {p}
                    </div>
                
                    {/* time achieve car */}
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
                                <div className="img-call-driver"><i class="fas fa-phone-alt"></i></div>
                                <div className="img-call-driver"><i class="fas fa-comment"></i></div>
                            </div>
                        </div>
                        <div className="box-tag-car">
                            {/* informition car */}
                            <p style={{color:'red'}}>4000تومان</p>
                            {/* tag car */}
                          
                              <button className='submit-end-trip' onClick={togglepanel} >اتمام سفر</button>
                          
                        </div>
                        <div className="box-style-input-driver">
                            <div className="box-input-profile-driver">
                                {/* discount off input */}
                                <input type="text" className="Discount-profile-driver" placeholder='کد تخفیف' />
                                <div className="underline-discount"></div>
                                <select style={{ color: 'gray', fontSize: '11px', marginLeft: '12px' }} name="cars" className='Discount-profile-driver '>
                                    {/* selector option */}
                                    <option value="volvo"> گزینه ها</option>
                                    <option value="saab">Saab</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-profile-driver">             
                       {/* text wellcome */}
                           <p style={{fontSize:'13px'}}> آکوکار سفر خوشی را برای شما ارزومند است</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageDriverLocation;