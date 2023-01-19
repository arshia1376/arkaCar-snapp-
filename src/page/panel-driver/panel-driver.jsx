import '../../sass/page/panel-driver/style.scss';
import Header from "../../component/header/header";
import React, { useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
import Collapsible from '../../component/collapsible/collapsible';
// function panel driver
function Panel_driver() {
    // state collapsible
    const [open, setOpen] = useState(false);
    let p = null;
    // function oprn close collapsible
    function togglepanel() {
        setOpen(!open);
      }
    //   if state open true html
      if (open) {
        //   box collapsible
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
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* box pabel driver */}
            <div className="box-panel-driver">
                {/* img title panel driver */}
                <div className="img-driver-panel">
                    <img className='img-panel' src={process.env.PUBLIC_URL + '/me2.jpg'} alt="" />
                </div>
                {/* name driver */}
                <p className="text-name-driver">علی علیپور</p>
                {/* box register travel order */}
                <Link to='/Register_travel_order' className='submit-trip'>لیست سفر های پیشنهادی</Link>
                {/* submit call me */}
                <button className="list-trip">تماس با پشتیبانی</button>
                <button className="list-trip">امتیاز شما</button>
                <div>
                    {/* box lsit trip */}
                    <button className="list-trip" onClick={togglepanel}>لیست سفرهای اخیر</button>
                </div>
                {/* state */}
                {p}

            </div>
        </div>
        // end html
    )
}
export default Panel_driver;