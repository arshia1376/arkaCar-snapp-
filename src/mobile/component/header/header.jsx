import '../../sass/page/header/style.scss';
import {
  Link
} from 'react-router-dom';
function Header() {
  return (
    <div className="App">
      <header style={{ minHeight: "0" }} className="App-header">
        <header>
        <div className="logo">
           <img className='logo-arka-car' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
          </div>
          <div>
            <nav>
              <ul style={{ display: "flex" }}>
                <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}><Link className='link' to='/Index'>صفحه اصلی</Link></li>
                <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}><Link id='link' to="/Driver">استخدام راننده</Link></li>
                <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}><Link className='link' to='/contactUs'>تماس با ما</Link></li>
                <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}><Link className='link' to='/controlpanel'>پنل مدیریت</Link></li>
                <li style={{ listStyle: "none", marginRight: "30px", fontSize: "15px", color: "black" }}><Link className='link' to='/PanelDriverBox'>پنل رانندگان</Link></li>
              </ul>
            </nav>
          </div>
          <div>
            <Link to='/Register_user' style={{ border: "none", backgroundColor: "#FFBA00", padding: "8px 18px", borderRadius: "6px", color: "white", fontSize: "16px" }}>ورود/ ثبت نام</Link>
          </div>
        </header>
      </header>
    </div>
  );
}

export default Header;