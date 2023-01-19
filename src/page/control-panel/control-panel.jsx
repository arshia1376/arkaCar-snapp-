import '../../sass/page/control-panel/style.scss';
import Header from "../../component/header/header";
import { useState, useEffect, useRef } from "react";
import { useHistory, Link } from 'react-router-dom';
// function control panel
function ControlPanel() {
    // method scroll top
    window.scrollTo(0, 0);
    // funtion value phone number
    function phone_number(){
        // arraye number
        let regex=/^[0-9]*$/
        let code=document.getElementById('phone-number').value.split(',');
        // for checked code
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            if (regex.test(element)) {
                return true
            }else{
                // pop remove code value
                code.pop()
                document.getElementById('phone-number').value=code.toString();
            }
            
        }
        }
        // method history
    const history = useHistory();
    // funtion error checked error value
    function error_phone_number(e) {
        e.preventDefault(); 
        let phoneNumber = document.getElementById('phone-number').value;
        let errorP = document.getElementById("error-phone-number");
        errorP.innerHTML = "";
        let boxCode = document.getElementById('box-city-display');
        let submit = document.getElementsByClassName('submit')[0];
        // arraye number
        let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // for checked value number
        for (let j = 0; j <= number.length; j++) {
            for (let i = 0; i <= phoneNumber.length; i++) {
                errorP.innerHTML = "";
                // if checked lentgh number
                if (phoneNumber.length == 11) {
                    if (number[j] == phoneNumber[i]) {
                        // if start 0 ll 9
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
                // error null phone
                else if (phoneNumber.length == 0) {
                    let errorP = document.getElementById("error-phone-number");
                    errorP.innerHTML = 'شماره تلفن وارد نشده';
                }
                else if (phoneNumber.length > 11) {
                    let errorP = document.getElementById("error-phone-number");
                    errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                }
                else {
                    let errorP = document.getElementById("error-phone-number");
                    errorP.innerHTML = "شماره تلفن کوتاه است";
                }
            }

        }
    };
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    // funtion code checked
    function errorcode(e) {
        e.preventDefault(); 
        let inputCode = document.getElementById("code").value;
        let errorP = document.getElementById("errorCODE");
        errorP.innerHTML = "";
        // error null code
        if (inputCode.length == 0) {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد وارد نشده است';
            let boxCODE = document.getElementById("box-code");

        }
        // if checked lentgh code
        else if (inputCode.length == 4) {
            let boxCITY = document.getElementById("box-city");
            boxCITY.style.display = "flex";
            let boxCODE = document.getElementById("box-code");
            boxCODE.style.marginRight = '0px';
        }
        // error code
        else {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد صحیح نیست ';
            let boxCODE = document.getElementById("box-code-input");
            boxCODE.style.display = 'flex';
            boxCODE.style.alignItems = 'center';
        }

    }
    // funtion checked number
function next_level1_submit(){
    let name_register_user=document.getElementsByClassName('name-register-user');
    let errorN=document.getElementById('error-name-register');
    errorN.innerHTML='';
    let validateNull = 0;
    for (let index = 0; index < name_register_user.length; index++) {
        if (name_register_user[index].value=='') {
            // error pm
            errorN.innerHTML='اطلاعات تکمیل نیست';
        }
        else {
            validateNull ++;
        }
        
    }
    if (validateNull == 2) {
        // history push page
        history.push('/index');
    }
    
}
function handleKeypress1(e){
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    errorcode();
   
  }
};
function handleKeypress2(e){
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    error_phone_number();
   
  }
};
// checked value number
function code_number(){
    // arrraye number
    let regex=/^[0-9]*$/
    let code=document.getElementById('code').value.split(',');
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        // test value number
        if (regex.test(element)) {
            return true
        }else{
            // deleted value not number
            code.pop()
            document.getElementById('code').value=code.toString();
        }
        
    }
    }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* box control */}
            <form className="style-box-input-register">
                <div>
                    <div className="box-register-driver">
                        <div id="input-phone-number">
                            {/* title control panel */}
                            <div className="title"><h2 className='h2-register-user'>پنل مدیریت</h2></div>
                            {/* text enter phone number */}
                            <label htmlFor="phone-number" id ='label-phone-number' className='label-phone-number aaaa'>شماره همراه خود را وارد کنید</label>
                            <input type="text" name="phone" ref={inputEl} onKeyPress={handleKeypress2} id="phone-number" onChange={phone_number} maxLength='11' className='phone-number' placeholder='شماره همراه' />
                            {/* submit click cheked phone number */}
                            <div><button className='submit' onClick={error_phone_number}>ارسال کد تایید</button>
                            </div>
                            {/* error pm phone number */}
                            <p id='error-phone-number'></p>
                        </div>

                    </div>
                    <div id="box-city-display">
                        <div id="box-code">
                            <div id='box-code-input'>
                                <div className='code-input-submit'>
                                    {/* box checked code */}
                                    <div>
                                        {/* input code */}
                                        <input type="text" maxLength='4'    onKeyPress={handleKeypress1} name="" style={{ width: '80%', marginTop: '8px' }} onChange={code_number} className='phone-number' id="code" placeholder='کد تایید را وارد کنید' />
                                    </div>
                                    {/* submit onlick next page */}
                                    <input type="button" value="تایید کد" className='submit-code' onClick={errorcode} />
                                </div>

                            </div>
                            {/* end box control panel */}
                        </div>
                     {/* error pm */}
                        <p id="errorCODE"></p>
                      
                    </div>

                </div >
            </form>
        </div>
    );

}
export default ControlPanel;