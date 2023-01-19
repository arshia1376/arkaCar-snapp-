import "../../sass/page/tabLine/style.scss";
import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';
function TabLine() {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  let p = null;
  let p1 = null;
  let p2 = null;
  // let label_tabline;
  let defultSelect ='tabline-label'

  function togglepanel() {
    setOpen(!open);
    setOpen1(false);
    setOpen2(false);
  }
  function togglepanel1() {
    setOpen1(!open1);
    setOpen2(false);
    setOpen(false);

  }
  function togglepanel2() {
    setOpen2(!open2);
    setOpen(false);
    setOpen1(false);
  }
  if (open2) {
    p2 = <div className='box-state-tabline'>
      <Link to='/Motor_delivery' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            پیک موتوری
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-motorcycle"></i>
        </div></Link>
      <Link to='/Motor_delivery' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            پیک خودرو
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-car"></i>
        </div>
      </Link>
      <button className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            بیمه
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-shield-alt"></i>
        </div>
      </button>
    </div>
  }
  if (open) {
    // document.getElementsByClassName('tabline-label')[0];
    defultSelect = 'tabline-label defult-label'
    p = <div className='box-state-tabline'>
      <Link to='/Origin_of_car_destination' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            سواری
          </p>
        </div>
        <div className="box-font-awesome">
          <i class="fas fass fa-car"></i>
        </div></Link>
      <Link to='/Origin_of_car_destination' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            ون
          </p>
        </div>
        <div className="box-font-awesome">
          <i class="fas fass fa-shuttle-van"></i>
        </div>
      </Link>
      <Link to='/Origin_of_car_destination' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            مینی بوس
          </p>
        </div>
        <div className="box-font-awesome">
          <i class="fas fass fa-bus-alt"></i>
        </div>
      </Link>
      <Link to='/Origin_of_car_destination' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            اتوبوس
          </p>
        </div>
        <div className="box-font-awesome">
          <i class="fas fass fa-bus"></i>
        </div>
      </Link>
    </div>
  }
  if (open1) {
    p1 = <div className='box-state-tabline'>
      <Link to='/Origin_truck' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            کامیون
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-truck"></i>
        </div></Link>
      <Link to='/Origin_truck' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            تریلی
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-truck-moving"></i>
        </div>
      </Link>
      <Link to='/Origin_truck' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            جرثتغیل
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-truck-loading"></i>
        </div>
      </Link>
      <Link to='/Origin_truck' className="car-reserve">
        <div className="box-text-car">
          <p className="title-car">
            وانت
          </p>
        </div>
        <div className="box-font-awesome">
        <i class="fas fass fa-truck-pickup"></i>
        </div>
      </Link>
    </div>
  }

  return (
    <div className="container">
      <input type="radio" id="tab1" name="tab" onClick={togglepanel} />
      <label className={defultSelect} id='tabline-label' htmlFor="tab1" > سواری</label>
      <input type="radio" id="tab2" name="tab" onClick={togglepanel1} />
      <label className='tabline-label' htmlFor="tab2"> ماشین سنگین</label>
      <input type="radio" id="tab3" name="tab" onClick={togglepanel2} />
      <label className='tabline-label' htmlFor="tab3"> پیک</label>
      <div />
      <div className="content-container">
        <div className="content-tab" id="c1">
 {p}
        </div>
        <div className="content-tab" id="c2">
          {p1}
        </div>
        <div className="content-tab" id="c3">
          {p2}
        </div>
      </div>
    </div>


  );
}
export default TabLine;
