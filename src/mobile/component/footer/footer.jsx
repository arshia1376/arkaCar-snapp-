import '../../sass/page/footer/style.scss';
import {
    Link
} from 'react-router-dom';
function footer() {
    return (
        <div className="app-footer">
            <footer>
                <div className="namad-etemad">
                    <div className="social-network-box">
                        <div className="logo">
                            <img className='logo-arka-car' src={process.env.PUBLIC_URL + '/logo1.png'} alt="" />
                        </div>
                        <div className="title-law-copy">
                            <p>سامانه هوشمند درخواست خودرو تمام حقوق <br />و معنوعی این سایت متلعق به اکوکار است</p>
                        </div>
                        <div>
                            <img className='namad' src={process.env.PUBLIC_URL + '/samandhi.png'} alt="" />
                            <img className='namad' src={process.env.PUBLIC_URL + '/namad.png'} alt="" />
                            <img className='namad' src={process.env.PUBLIC_URL + '/1.png'} alt="" />

                        </div>
                    </div>
                </div>
                <div className="menu-footer">
                    <div className="list-footer-box">
                        <div className="list-footer">
                            <Link to="/contactUs">ارتباط با ما</Link>
                            <a href="">لوگو و هویت سازمانی</a>
                            <a href="">فرصت شغلی</a>
                        </div>
                        <div className="list-footer">
                            <Link to='/Blog'>بلاگ</Link>
                            <Link to='/Questions'>سوالات متداول</Link>
                            <Link to='/AboutUs'>درباره ای ما</Link>
                        </div>
                    </div>
                    <div className="network">

                        <div className="logo-network">
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/telegram.png'} alt="" />
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/twitter.png'} alt="" />
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/facebook.png'} alt="" />
                            <img className="logo-img-network" src={process.env.PUBLIC_URL + '/instagram.png'} alt="" />
                        </div>
                        <div className="title-network">شبکه های مجازی</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default footer;