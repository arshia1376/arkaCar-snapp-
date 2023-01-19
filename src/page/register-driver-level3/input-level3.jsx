
import '../../sass/page/register-driver-level3/style.scss';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useHistory,Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
// function page3 register driver
function Inputlevel3() {
  // method scrool top
  window.scrollTo(0, 0);
  // method history
  let history = useHistory();
  function Inputlevel4() {
    // file input value
    let file_input = document.getElementsByClassName("file-input");
    // error pm
    let errorP = document.getElementById("error-phone-number");
    errorP.innerHTML='';
    // for checked value lentgh
    let validateNull = 0;
    for (let index = 0; index < file_input.length; index++) {
      if (file_input[index].value == "") {
        // error pm
          errorP.innerHTML = ' اصلاعات تکمیل نیست';
          // border error input
          file_input[index].parentElement.parentElement.style.border='.5px solid red'; 
      }
      else {
        // border input
        file_input[index].parentElement.parentElement.style.border='.5px solid #dcdcdcdb'; 
          validateNull ++;
      }
  }
// validatenull
  if (validateNull == 8) {
    // history push next page
      history.push('/next-register-level3')
  }
  }
  return (
    // start html
    <div>
      {/* component header */}
      <Header/>
      {/* box register level3 */}
      <div className='app-box-register-level3' >
      <div className="box-input-level3">
        {/* title register driver page3 */}
        <h2 className='h2-register-user' style={{}}>فرم استخدام- بارگذاری  مدارک  مورد نیاز</h2>
        <div className="box-img-upload">
          {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
          <p className="title-img-upload">گواهی نامه</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Certificate">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Certificate' type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">کارت خودرو</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Car-card">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input"  id='Car-card' type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">بیمه نامه خودرو</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Insurance">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id="Insurance" type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">معاینه فنی</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="technical-diagnosis">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id="technical-diagnosis" type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">گواهی عدم اعتیاد</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Addiction">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Addiction' type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">کارت معافیت</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Exemption">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Exemption' type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">کارت معاینه فنی</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="technical-diagnosis-card">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='technical-diagnosis-card' type="file" /></div>
          </div>
        </div>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
        <div className="box-img-upload">
          <p className="title-img-upload">عکس اول شناسنامه</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Birth-certificate">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Birth-certificate' type="file" /></div>
          </div>
        </div>

{/* box input link */}
        <div className="box-input-link">
          {/* submit next page */}
          <button id='next-level1' onClick={Inputlevel4}>ثبت</button>
          {/* submit back page */}
          <Link to='/InputLevel1register' className='back-level1'>بازگشت</Link>
          {/* pm error input */}
          <p id='error-phone-number'></p>
        </div>
      </div>
    </div>
    {/* component footer */}
    <Footer/>
    </div>
    // end html
  );
}
export default Inputlevel3;