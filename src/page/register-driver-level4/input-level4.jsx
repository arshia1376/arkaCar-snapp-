import '../../sass/page/register-driver-level4/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useState, useEffect, useRef } from "react";
// function page4
function Inputlevel4(){
  // method scroll top
  window.scrollTo(0, 0);
  // history method
    let history = useHistory();
    // funtion input
    function Inputlevel5() {
      // input value file
      let file_input = document.getElementsByClassName("file-input");
      // error pm
      let errorP = document.getElementById("error-phone-number");
      errorP.innerHTML='';
    let  validateNull=0;
    // for checked value input
      for (let index = 0; index < file_input.length; index++) {
        if (file_input[index].value == '') {
          // error value input
          let errorP = document.getElementById("error-phone-number");
          // text error
          errorP.innerHTML = 'اطلاعات تکمیل نیست';
          // border error input
          file_input[index].parentElement.parentElement.style.border='.5px solid red'; 
        }
        else{
          // border input
          validateNull ++;
          file_input[index].parentElement.parentElement.style.border='.5px solid #dcdcdcdb'; 
        }
        if(validateNull==2){
          // display page
          let box_title_completed=document.getElementById("box-text-register-completed");
          box_title_completed.style.display='flex';
          box_title_completed.style.marginTop='220px';
        }
      }
    }
    return (
      // start html
       <div>
         {/* component header */}
         <Header/>
          <div style={{ display: "flex", justifyContent: "center",height:'100vh' }}>
      <div className="box-input-level3">
        {/* title register driver page4 */}
      <h2  className='h2-register-user'>فرم استخدام-احراز هویت</h2>
            {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
      <div className="box-img-upload">
                <p className="title-img-upload"> بارگذاری عکس خودرو</p>
                <div class="image-upload">
                    <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
                    <div>  <label for="car">
                        <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
                    </label>
                        <input className="file-input" id='car' type="file" /></div>
                </div>
            </div>
                  {/* title img upload */}
          {/* text input upload */}
          {/* input file upload filde */}
          {/* img input file upload */}
            <div className="box-img-upload">
                <p className="title-img-upload"> بارگذاری عکس سلفی از خود</p>
                <div class="image-upload">
                    <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
                    <div>  <label for="self">
                        <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
                    </label>
                        <input className="file-input" id='self' type="file" /></div>
                </div>
            </div>
            {/* submit next page */}
            <div className="box-input-link">
      <button id='next-level1' onClick={Inputlevel5}>ثبت</button>
         {/* submit back page */}
      <Link to='/next-register-level2' className='back-level1'>بازگشت</Link>
      {/* error value input */}
      <p id='error-phone-number'></p>
    </div>
      </div>
      {/* box text register completed */}
      <div id="box-text-register-completed" style={{display:'none'}}>
          <p className='text-register-completed'>تبریک!فرم استخدام شما تکمیل شد <br />
            منتظر تایید از سوی مدیریت ناوگان <br />اکوکار باشید
          </p>
      </div>
        </div>
        {/* component footer */}
        <Footer/>
       </div>
      //  end html
    );
}

export default Inputlevel4;