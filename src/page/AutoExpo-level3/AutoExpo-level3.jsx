import "../../sass/page/AutoExpo-level3/style.scss";
import { useHistory, Link } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useState, useEffect, useRef } from "react"; 
function AutoExpoLevel3() {
    // scroll top
  window.scrollTo(0, 0);
  // history method
  function phone_number() {
    // arryre number
    let regex = /^[0-9]*$/
    // input code value
    let code = document.getElementById('phone-number1').value.split(',');
    // checked value code
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (regex.test(element)) {
            return true
        } else {
            // value delete 
            code.pop()
            document.getElementById('phone-number1').value = code.toString();
        }

    }
}
  const history = useHistory();
   // function submit next to page3
   let inputEl = useRef()
   useEffect(() => {
       inputEl.current.focus();
   }, [])
  function error(event) {
    event.preventDefault();
    let errorP = document.getElementsByClassName("style-input-expo");
    let textError = document.getElementById("error-phone-number");
    textError.innerHTML = "";
    let validateNull = 0;
          // for checked value input
    for (let index = 0; index < errorP.length; index++) {
      if (errorP[index].value == "") {
             // error
          textError.innerHTML = ' اصلاعات تکمیل نیست';
                  // error border
          errorP[index].style.border='.5px solid red'; 
      }
      else {
        errorP[index].style.border='.5px solid #dcdcdcdb ';
          validateNull ++;
      }
  }
 
  if (validateNull == 5) {
      history.push('/AutoExpo-level3')
  }
  }
  function code_title_expo_boss(e){
      // function deleted value
      let avalue=e.target.value;
      localStorage.setItem('key',avalue);
    let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
    let code=document.getElementById('boss-name-auto').value.split(',');
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (regex.test(element)) {
            return true
        }else{
            
            code.pop()
            document.getElementById('boss-name-auto').value=code.toString();
        }
        
    }
    }
    function handleKeypress1(e){
      //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      error();
     
    }
  };
    function code_address_expo_boss(e){
        // function deleted value
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
      let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
             // test value farsi
      let code=document.getElementById('address-boss-auto').value.split(',');
      for (let i = 0; i < code.length; i++) {
          const element = code[i];
          if (regex.test(element)) {
              return true
          }else{
               // pop deleted error value
              code.pop()
              document.getElementById('address-boss-auto').value=code.toString();
          }
          
      }
      }
            // start html 
  return (
    <div>
           {/* commponent header */}
      <Header/>
               {/* box page3 auto */}
      <div className="display">
        <div className="box-car">
            {/* s form */}
          <form id="form-autoExpo-level2" action="">
                        {/* title page3 auto */}
            <div className="title">
              <h2 className='h2-register-user'>اطلاعات مالک بنگاه</h2>
            </div>
            <div>
                 {/* information auto expo boss*/}
              <input
              ref={inputEl}
              onChange={code_title_expo_boss}
              id='boss-name-auto'
                type="text"
                className="name-expo name-expo-level2 style-input-expo"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div>
              {/* address live bos */}
              <input
              onChange={code_address_expo_boss}
              id='address-boss-auto'
                type="text"
                className="name-expo name-expo-level2 style-input-expo"
                placeholder="ادرس محل سکونت"
              />
            </div>
            <div>
              {/* code meli boss auto */}
              <input
                onChange={phone_number}
                maxLength='16'
                id="phone-number1"
                className="name-expo name-expo-level2 style-input-expo"
                placeholder="کد ملی"
              />
            </div>
            <div className="box-img-uploader">
              <div class="image-upload-auto box-img-uploader-expo">
                <div>
                  {/* upload img information boss */}
                  <p id="text-input-upload">عکس اول صفحه شناسنامه</p>
                </div>
                <div>
                  {" "}
                  <label for="one-certificate">
                    <img
                      className="img-folder"
                      src={process.env.PUBLIC_URL + "/folder.png"}
                      alt=""
                    />
                  </label>
                  <input className="file-input name-expo-level2 style-input-expo" id='one-certificate' type="file" />
                </div>
              </div>
            </div>
            <div>
              {/* phone number boss auto */}
              <input
                 onChange={phone_number}
                 maxLength='11'
                 id="phone-number1"
                className="name-expo name-expo-level2 style-input-expo"
                placeholder="شماره همراه"
                onKeyPress={handleKeypress1}
              />
            </div>
            <div>
              {/* submit onclick */}
              <button className="submit submit-level2" id="submit" onClick={error}>
                ثبت
              </button>
            </div>
            {/* back page submit */}
            <div className='box-submit-back'>
              <Link to='/AutoExpo-level2'  className="back-level1">
                بازگشت
              </Link>
            </div>
          </form>
          {/* e form */}
          {/* error pm */}
          <p id="error-phone-number"></p>
        </div>
      </div>
      {/* commponent footer */}
      <Footer/>
    </div>
  );
}
export default AutoExpoLevel3;
