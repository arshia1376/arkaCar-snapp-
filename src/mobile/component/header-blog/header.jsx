import '../../sass/page/header/style.scss';
import Test from '../../component/test';
import {
    Link
  } from 'react-router-dom';
function Header() {
    function Search_blog(){

    }
    return (
        <div>
            <div className="App">
                <header style={{ minHeight: "0",position:'absolute',zIndex:'2' }} className="App-header">
                    <header>
                        <div className="logo">
                            <img className='logo-arka-car' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
                        </div>
                        <div>
                            <nav>
                            <Test/>
                                <ul id='ui' style={{ display: "flex" }}>
                                    <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}>صفحه اصلی</li>
                                    <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}><Link id='link' to="/driver">استخدام راننده</Link></li>
                                    <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}>تماس با ما</li>
                                    <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}>پنل مدیریت</li>
                                </ul>
                            </nav>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                        <i class="fas fa-search" onClick={Search_blog}></i>
                            <button style={{ border: "none", backgroundColor: "#FFBA00", padding: "8px 18px", borderRadius: "6px", color: "white", fontSize: "16px" }}>ورود/ ثبت نام</button>
                        </div>
                    </header>
                </header>
            </div>
        </div>
    )
}
export default Header;