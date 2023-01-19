import '../../sass/page/control-panel/style.scss';
import { useHistory, Link } from 'react-router-dom';
import Header from "../../component/header/header";
import { useState, useEffect, useRef } from "react";
// panel driver header
function Register_user() {
    // method scroll top
    window.scrollTo(0, 0);
    // method history
    const history = useHistory();
    // function error phone number
    function error_phone_number(e) {
        e.preventDefault(); 
        // value phone number driver
        let phoneNumber = document.getElementById('phone-number').value;
        // pm error
        let errorP = document.getElementById("error-phone-number");
        errorP.innerHTML = "";
        let boxCode = document.getElementById('box-city-display');
        let submit = document.getElementsByClassName('submit')[0];
        // arraye number
        let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // for checked value phone number
        for (let j = 0; j <= number.length; j++) {
            for (let i = 0; i <= phoneNumber.length; i++) {
                errorP.innerHTML = "";
                // checked lentgh phone number
                if (phoneNumber.length == 11) {
                    if (number[j] == phoneNumber[i]) {
                        // ckeched phone number
                        if (phoneNumber[0] == 0 && phoneNumber[1] == 9) {
                            boxCode.style.display = 'block';
                            submit.style.display = 'none';
                        }
                        else {
                            // error phone number
                            errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                        }
                    }
                    else {
                        // error phone number
                        errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                    }
                }
                // error lentgh phone number
                else if (phoneNumber.length == 0) {
                    let errorP = document.getElementById("error-phone-number");
                    errorP.innerHTML = 'شماره تلفن وارد نشده';
                }
                     // error lentgh phone number
                else if (phoneNumber.length > 11) {
                    let errorP = document.getElementById("error-phone-number");
                    errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                }
                     // error lentgh phone number
                else {
                    let errorP = document.getElementById("error-phone-number");
                    errorP.innerHTML = "شماره تلفن کوتاه است";
                }
            }

        }
    };
    function handleKeypress2(e){
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        error_phone_number();
       
      }
    };
    function handleKeypress1(e){
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        errorcode();
       
      }
    };
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    // function error code
    function errorcode(e) {
        e.preventDefault(); 
        // input code value
        let inputCode = document.getElementById("code").value;
        // error code
        let errorP = document.getElementById("errorCODE");
        errorP.innerHTML = "";
        // checked lentgh code
        if (inputCode.length == 0) {
            let errorP = document.getElementById("errorCODE");
            // error code lentgh
            errorP.innerHTML = 'کد وارد نشده است';
            let boxCODE = document.getElementById("box-code");

        }
        // checked code lentgh
        else if (inputCode.length == 4) {
            // method history next page
            history.push('/Panel_driver')
        
            
        }
        else {
            // error code lentgh
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد صحیح نیست ';
            let boxCODE = document.getElementById("box-code-input");
            boxCODE.style.display = 'flex';
            boxCODE.style.alignItems = 'center';
        }

    }

    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* box panel driver */}
            <form className="style-box-input-register">
                <div>
                    <div className="box-register-driver">
                        {/* box input phone number driver */}
                        <div id="input-phone-number">
                            {/* title panel driver */}
                            <div className="title"><h2 className='h2-register-user'>پنل ورود رانندگان</h2></div>
                            {/* input phone number driver */}
                            <label htmlFor="phone-number" id='label-phone-number' className='label-phone-number'>شماره همراه خود را وارد کنید</label>
                            <input type="number" name="phone" id="phone-number" ref={inputEl} onKeyPress={handleKeypress2} className='phone-number' placeholder='شماره همراه' />
                            {/* submit phone number driver */}
                            <div><button className='submit' onClick={error_phone_number}>ارسال کد تایید</button>
                            </div>
                            {/* error phone number */}
                            <p id='error-phone-number'></p>
                        </div>

                    </div>
                    {/* box code accept */}
                    <div id="box-city-display">
                        <form id="box-code">
                            {/* box code input */}
                            <div id='box-code-input'>
                                <div className='code-input-submit'>
                                    <div>
                                        {/* input code */}
                                        <input type="number" name="" style={{ width: '80%', marginTop: '8px' }} onKeyPress={handleKeypress1} className='phone-number' id="code" placeholder='کد تایید را وارد کنید' />
                                    </div>
                                    {/* submit code */}
                                  <button className='submit-code' onClick={errorcode}>تایید کد</button>
                                </div>

                            </div>
                        </form>
                     {/* error pm */}
                        <p id="errorCODE"></p>
                    
                    </div>

                </div >
            </form>
        </div>
        // end html
    );
}
export default Register_user;