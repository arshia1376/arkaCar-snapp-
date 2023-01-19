import '../../sass/page/panel-driver/style.scss';
import Header from "../../component/header/header";
import React, { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import Collapsible from '../../component/collapsible/collapsible';
function Panel_driver() {
    const [open, setOpen] = useState(false);
    let p = null;
    function togglepanel() {
        setOpen(!open);
      }
      if (open) {
          p=  <div className="collapsible-panel-driver" style={{width:'80%'}}>
          <Collapsible/>
          <Collapsible/>
          <Collapsible/>
          <Collapsible/>
          <Collapsible/>
          <Collapsible/>
          </div>
      }
    return (
        <div>
            <Header />
            <div className="box-panel-driver">
                <div className="img-driver-panel">
                    <img className='img-panel' src={process.env.PUBLIC_URL + '/me2.jpg'} alt="" />
                </div>
                <p className="text-name-driver">علی علیپور</p>
                <Link to='/Register_travel_order' className='submit-trip'>لیست سفر های پیشنهادی</Link>
                <button className="list-trip">تماس با پشتیبانی</button>
                <div>
                    <button className="list-trip" onClick={togglepanel}>لیست سفرهای اخیر</button>
                </div>
                {p}

            </div>
        </div>
    )
}
export default Panel_driver;