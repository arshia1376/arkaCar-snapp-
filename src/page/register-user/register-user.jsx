
import '../../sass/page/control-panel/style.scss';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import Header from "../../component/header/header";
// function register user
function Register_user() {
    // method scroll top
    window.scrollTo(0, 0);
    // function code number
    function code_number(){
        // arraye number
    let regex=/^[0-9]*$/
    let code=document.getElementById('code').value.split('');
    // for checked value code
    for (let i = 0; i < code.length; i++) {
        const element = code[i];
        if (regex.test(element)) {
            return true
        }else{
            // remove value
            code.pop()
            document.getElementById('code').value=code.toString();
        }
        
    }
    // let arrayCode=code.split(',')
    
    
    }
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    // function name register user
    function name_register_user(){
        // arraye farsi
        let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
        let code=document.getElementById('name-register-user').value.split(',');
        // for checked length code
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            // checked test value code
            if (regex.test(element)) {
                return true
            }else{
                // remove value 
                code.pop()
                document.getElementById('name-register-user').value=code.toString();
            }
        }
        }
        //function first register user
        function first_register_user(){
            let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
            let code=document.getElementById('first-register-user').value.split(',');
            // for checked lentgh
            for (let i = 0; i < code.length; i++) {
                const element = code[i];
                if (regex.test(element)) {
                    return true
                }else{
                    
                    code.pop()
                    document.getElementById('first-register-user').value=code.toString();
                }
            }
            }
    function phone_number(){
        let regex=/^[0-9]*$/
        let code=document.getElementById('phone-number').value;//.split(',');
        let element=''
        for (let i = 0; i < code.length; i++) {
            //const element = code[i];
            if (regex.test(code[i])) {
               element+=code[i]
              
            }
        document.getElementById('phone-number').value=element.toString();
       } 
                
        }
        // method history
    const history = useHistory();
    // function error phone number
    function error_phone_number(e) {
        // input value input
        e.preventDefault(); 
        let phoneNumber = document.getElementById('phone-number').value;
        // error pm
        let errorP = document.getElementById("error-phone-number");
        errorP.innerHTML = "";
        // display html
        let boxCode = document.getElementById('box-city-display');
        let submit = document.getElementsByClassName('submit')[0];
        // arraye number
        let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        // for checked number length
        for (let j = 0; j <= number.length; j++) {
                    // for checked phone number length
            for (let i = 0; i <= phoneNumber.length; i++) {
                errorP.innerHTML = "";
                   // checked phone number length
                if (phoneNumber.length == 11) {
                    if (number[j] == phoneNumber[i]) {
                        // phone number arraye checked
                        if (phoneNumber[0] == 0 && phoneNumber[1] == 9) {
                            // display html
                            boxCode.style.display = 'block';
                            submit.style.display = 'none';
                            // value label input
                            let label_phone_number=document.getElementById('label-phone-number');
                            // text label
                            label_phone_number.innerHTML='کد ارسال شده را وارد کنید';
                        }
                        else {
                            // error pm phone number
                            errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                        }
                    }
                    else {
                            // error pm phone number
                        errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                    }
                }
                // checked phone number
                else if (phoneNumber.length == 0) {
                    let errorP = document.getElementById("error-phone-number");
                         // error pm phone number
                    errorP.innerHTML = 'شماره تلفن وارد نشده';
                }
                else if (phoneNumber.length > 11) {
                    let errorP = document.getElementById("error-phone-number");
                         // error pm phone number
                    errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                }
                else {
                    let errorP = document.getElementById("error-phone-number");
                         // error pm phone number
                    errorP.innerHTML = "شماره تلفن کوتاه است";
                }
            }

        }
    };
    // function error code
    function errorcode(e) {
        e.preventDefault(); 
        // input value code
        let inputCode = document.getElementById("code").value;
        let errorP = document.getElementById("errorCODE");
        errorP.innerHTML = "";
        // checked code length
        if (inputCode.length == 0) {
            let errorP = document.getElementById("errorCODE");
            // error pm
            errorP.innerHTML = 'کد وارد نشده است';
            let boxCODE = document.getElementById("box-code");

        }
           // checked code length
        else if (inputCode.length == 4) {
            // displayhtml
            let boxCITY = document.getElementById("box-city");
            boxCITY.style.display = "flex";
            let boxCODE = document.getElementById("box-code");
            boxCODE.style.marginRight = '0px';
            let box_register_driver=document.getElementById('box-register-driver');
            box_register_driver.style.display='none';
            boxCODE.style.display='none';
        
            
        }
        else {
            // error pm code
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد صحیح نیست ';
            let boxCODE = document.getElementById("box-code-input");
            boxCODE.style.display = 'flex';
            boxCODE.style.alignItems = 'center';
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
// function register user
function next_level1_submit(){
    // arraye farsi
    let validationregex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/
    // name input register user
    let name_register_user=document.getElementsByClassName('name-register-user');
    // error pm
    let errorN=document.getElementById('error-name-register');
    errorN.innerHTML='';
    let validateNull = 0;
    // for checked value length index
    for (let index = 0; index < name_register_user.length; index++) {
        // if test value code
        if (validationregex.test(name_register_user[index].value)) {
        if (name_register_user[index].value=='') {
                // error pm
            errorN.innerHTML='اطلاعات تکمیل نیست';
            // border error value input
            name_register_user[index].style.border='.5px solid red'; 
        }
        else {
            // border input
           name_register_user[index].style.border='.5px solid #dcdcdcdb'; 
            validateNull ++;
        }
    
    }
    // value error null
    else if(name_register_user[index].value==""){
        // error border input
        name_register_user[index].style.border='.5px solid red'; 
        // error pm input
        errorN.innerHTML='نام و نام خانوادگی وارد نشده';
    }
    else{
           // error border input
        name_register_user[index].style.border='.5px solid red'; 
                // error pm input
        errorN.innerHTML='حروف به فارسی باشد';
    }
    let lengthSelect = 0;
    // for value selector checked
    let select_error=document.getElementsByClassName('select-error');
    for (let index = 0; index < select_error.length; index++) {
      if (select_error[index].selected) {
          let select=select_error[index].parentElement;
        //   error selector pm
          errorN.innerHTML='محل زندگی خود را وارد کنید';
            //   error border selector pm
          select.style.border='1px solid red';
      
      }
      else {
        //   border input
        let select=select_error[index].parentElement;
        select.style.border='1px solid gray';
        lengthSelect++;
      }
        
    }
    // checked value input and selector
    if (validateNull == 2 && lengthSelect==4) {
        // history push next page
        history.push('/index');
    }
}
}
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            <div className="style-box-input-register">
                <div>
                    <div className="box-register-driver" id='box-register-driver'>
                        <form id="input-phone-number">
                            {/* box register user */}
                            {/* title register user */}
                            <div className="title"><h2 className='h2-register-user'>ثبت نام/ورود</h2></div>
                            {/* input phone number */}
                            <label htmlFor="phone-number" id ='label-phone-number' className='label-phone-number aaaa'>شماره همراه خود را وارد کنید</label>
                            <input type="text" name="phone" onChange={phone_number} maxLength='11' onKeyPress={handleKeypress2} ref={inputEl} id="phone-number" className='phone-number' placeholder='شماره همراه' pattern="[0-9]+" />
                            {/* submit phone number */}
                            <div><button className='submit' onClick={error_phone_number}>ارسال کد تایید</button>
                            </div>
                            {/* error phone number */}
                            <p id='error-phone-number'></p>
                        </form>

                    </div>
                    <div id="box-city-display">
                        <form id="box-code">
                            {/* box checked code */}
                            <div id='box-code-input'>
                                <div className='code-input-submit'>
                                    <div>
                                        {/* input code */}
                                        <input type="text"   onChange={code_number}  maxLength="4" onKeyPress={handleKeypress1} name="" style={{ width: '80%', marginTop: '8px' }} className='phone-number' id="code" placeholder='کد تایید را وارد کنید' />
                                    </div>
                                    {/* submit code */}
                              <button className='submit-code' onClick={errorcode}>تایید کد</button>
                                </div>

                            </div>
                        </form>
                     {/* error pm code */}
                        <p id="errorCODE"></p>
                        <div id="box-city">
                            {/* input value name and family */}
                        <input type="text" name="phone" lang='fa' maxLength='12' onChange={name_register_user} id="name-register-user" className='name-register-user' placeholder='نام' />
                        <input type="text" name="phone" id="first-register-user" maxLength='15' onChange={first_register_user} className='name-register-user' placeholder='نام خانوادگی' />
                            <div className="input-city">
                                {/* selector city */}
                                <select name="cars" id="city">
                                    <option value="volvo" className='select-error' selected>استان</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                   {/* selector city */}
                                <select name="cars" id="city1">
                                    <option value="volvo" className='select-error' selected>شهر</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                               {/* selector city */}
                            <div className="input-city">
                                <select name="cars" id="city">
                                    <option value="volvo" className='select-error' selected>منطقه</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                   {/* selector city */}
                                <select name="cars" id="city1">
                                    <option value="volvo" className='select-error' selected>روستا</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            {/* submit next page */}
                            <div className='box-submit-register'  onClick={next_level1_submit}><button id='submit-register'className='submit-register'  >ثبت نام</button></div>
                            {/* pm error valur input */}
                            <p id="error-name-register"></p>
                        </div>
                    </div>

                </div >
            </div>
        </div>
        // end html
    );
}
export default Register_user;