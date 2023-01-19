import '../../sass/page/header/style.scss';
import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import {
  Link
} from 'react-router-dom';
// component header resvansive
function Header() {
  // state list header
  const [open, setOpen] = useState(false);
  let p = null;
  // function open list header
  function togglepanel() {
    setOpen(!open);
  }
  if (open) {
    // start html
    p=<div>
      {/* list header */}
      <ul className="ul-header-mobile">
        <li className="li-header-mobile"><Link className='link' to='/Index'>صفحه اصلی</Link></li>
        <li className="li-header-mobile"><Link id='link' to="/Driver">استخدام راننده</Link></li>
        <li className="li-header-mobile"><Link className='link' to='/contactUs'>تماس با ما</Link></li>
        <li className="li-header-mobile"><Link className='link' to='/controlpanel'>پنل مدیریت</Link></li>
        <li className="li-header-mobile"><Link className='link' to='/PanelDriverBox'>پنل رانندگان</Link></li>
      </ul>
    </div>
    // end html
  }
  // method history
  const history = useHistory();
  function logochanche(){
    // history push next page
    history.push('/index');

  }
  return (
    // start html
    <div className="App">
      <header style={{ minHeight: "0" }} className="App-header">
        {/* start header */}
        <header>
          {/* logo header ako car */}
        <div className="logo" >
           <img className='logo-arka-car' onClick={logochanche} src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
          </div>
          <div>
            <nav>
              {/* list header */}
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
            {/* submit register user */}
            <Link to='/Register_user' style={{ border: "none", backgroundColor: "#FFBA00", padding: "8px 18px", borderRadius: "6px", color: "white", fontSize: "16px" }}>ورود/ ثبت نام</Link>
          </div>
        </header>
        {/* end header */}
      </header>
      {/* header resvansive */}
      <header style={{minHeight: "0"}} className="mobile-header">
      <header>
        {/* list header */}
        <div onClick={togglepanel} className="li-header">
        {p}
        <i class="fas fa-bars">
        </i>
        </div>
        {/* logo header resvasive */}
        <div className="logo">
           <img className='logo-arka-car-mobile' src={process.env.PUBLIC_URL + '/logo.png'} alt="" />
          </div>
          <div>
            {/* submit register user */}
            <Link to='/Register_user' className='register-user'>ورود/ ثبت نام</Link>
          </div>
        </header>
      </header>
      {/* end header resvansive */}
    </div>
    // end html
  );
}

export default Header;