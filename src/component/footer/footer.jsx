import '../../sass/page/footer/style.scss';
import {
    Link
} from 'react-router-dom';
// function component footer
function footer() {
    return (
        // start html
        <div className="app-footer">
            <footer>
                <div className="namad-etemad">
                    <div className="social-network-box">
                        <div className="logo">
                            <img className='logo-arka-car' src={process.env.PUBLIC_URL + '/logo1.png'} alt="" />
                        </div>
                        <div className="title-law-copy">
                            {/* title law copy */}
                            <p>سامانه هوشمند درخواست خودرو تمام حقوق <br />و معنوعی این سایت متلعق به اکوکار است</p>
                        </div>
                        <div>
                            {/* img namad */}
                            <img className='namad' src={process.env.PUBLIC_URL + '/samandhi.png'} alt="" />
                            <img className='namad' src={process.env.PUBLIC_URL + '/namad.png'} alt="" />
                            <img className='namad' src={process.env.PUBLIC_URL + '/1.png'} alt="" />

                        </div>
                    </div>
                </div>
                {/* start end header web */}
                {/* menu footer list */}
                <div className="menu-footer">
                    <div className="list-footer-box">
                        <div className="list-footer">
                            <Link to="/contactUs">ارتباط با ما</Link>
                            <a href="">لوگو و هویت سازمانی</a>
                            <Link to='/Forsat_shoghli'>فرصت شغلی</Link>
                        </div>
                        {/* menu footer list */}
                        <div className="list-footer">
                            <Link to='/Blog'>بلاگ</Link>
                            <Link to='/Questions'>سوالات متداول</Link>
                            <Link to='/AboutUs'>درباره ای ما</Link>
                        </div>
                    </div>
                    <div className="network">
                        {/* div box network */}
                        <div className="logo-network">
                            {/* img logo social media */}
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/telegram.png'} alt="" />
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/twitter.png'} alt="" />
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/facebook.png'} alt="" />
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/instagram.png'} alt="" />
                        </div>
                        {/* title social media */}
                        <div className="title-network">شبکه های مجازی</div>
                    </div>
                </div>
            </footer>
            {/* footer mobile */}
            <footer className='footer-mobile'>
                <div className="list-footer-box">
                    {/* box list footer */}
                    <div className="box-list-footer">
                        <Link to="/contactUs" className='list-footer list-footer1'>ارتباط با ما</Link>
                        <Link href="" className='list-footer'>لوگو و هویت سازمانی</Link>
                        <Link href="/Forsat_shoghli" className='list-footer'>فرصت شغلی</Link>
                    </div>
                        {/* box list footer */}
                    <div className="box-list-footer box-list-footer1">
                        <Link to='/Blog' className='list-footer list-footer1'>بلاگ</Link>
                        <Link to='/Questions' className='list-footer'>سوالات متداول</Link>
                        <Link to='/AboutUs' className='list-footer'>درباره ای ما</Link>
                    </div>
                </div>
                <div className="box-img-logo-footer-mobile">
                    {/* box network */}
                    <div className="network">
                            {/* img logo social media */}
                        <img className="logo-img-network" src={process.env.PUBLIC_URL + '/telegram.png'} alt="" />
                        <img className="logo-img-network" src={process.env.PUBLIC_URL + '/twitter.png'} alt="" />
                        <img className="logo-img-network" src={process.env.PUBLIC_URL + '/facebook.png'} alt="" />
                        <img className="logo-img-network" src={process.env.PUBLIC_URL + '/instagram.png'} alt="" />
                    </div>
                    {/* box namad */}
                    <div style={{ width: '52%' }}>
                        {/* img namad */}
                        <img className='namad' src={process.env.PUBLIC_URL + '/samandhi.png'} alt="" />
                        <img className='namad' src={process.env.PUBLIC_URL + '/namad.png'} alt="" />
                        <img className='namad' src={process.env.PUBLIC_URL + '/1.png'} alt="" />
                    </div>
                </div>
            </footer>
            {/* end footer */}
        </div>
        // end html
    );
}
export default footer;