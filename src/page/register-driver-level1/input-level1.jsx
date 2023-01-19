import '../../sass/page/register-driver-level1/style.scss';
import Header from "../../component/header/header";
import Test from '../../component/test';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
// function input register driver
function Inputlevel1() {
    const [value, setValue] = useState("");
    const handleChange = e => {
        setValue(e.target.value);
    };
    function state(e){
        let avalue=e.target.value;
        if (avalue=='0') {
            
        }
        else{
            localStorage.setItem('state',avalue);
        }
    }
    function city(e){
        let avalue=e.target.value;
        if (avalue=='0') {
            
        }
        else{
            localStorage.setItem('city',avalue);
        }
    }
    function region(e){
        let avalue=e.target.value;
        if (avalue=='0') {
            
        }
        else{
            localStorage.setItem('region',avalue);
        }
    }
    function village(e){
        let avalue=e.target.value;
        if (avalue=='0') {
            
        }
        else{
            localStorage.setItem('village',avalue);
        }
    }
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    // method scroll top
    window.scrollTo(0, 0);

    // `current` points to the mounted text input element

    function code_number(e) {
        // arraye number
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
        let regex = /^[0-9]*$/
        let code = document.getElementById('code').value.split(',');
        // for value number code
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            // checked number
            if (regex.test(element)) {
                return true
            } else {
                // value delete 
                code.pop()
                document.getElementById('code').value = code.toString();
            }

        }
    }
    // function phone number

    // method history
    const history = useHistory();
    function error_phone_number(event) {
        event.preventDefault();
        
            let phoneNumber = document.getElementById('phone-number').value;
            let errorP = document.getElementById("error-phone-number");
            errorP.innerHTML = "";
            let boxCode = document.getElementById('box-city-display');
            let submit = document.getElementsByClassName('submit')[0];
            let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (let j = 0; j <= number.length; j++) {
                for (let i = 0; i <= phoneNumber.length; i++) {
                    errorP.innerHTML = "";
                    if (phoneNumber.length == 11) {
                        if (number[j] == phoneNumber[i]) {
                            if (phoneNumber[0] == 0 && phoneNumber[1] == 9) {
                                boxCode.style.display = 'block';
                                submit.style.display = 'none';
                            }
                            else {
                                errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                            }
                        }
                        else {
                            errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                        }
                    }
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
    // function error code
    function errorcode(event) {
        // input value code
        event.preventDefault();
        let inputCode = document.getElementById("code").value;
        let errorP = document.getElementById("errorCODE");
        errorP.innerHTML = "";
        // checked value lentgh
        if (inputCode.length == 0) {
            let errorP = document.getElementById("errorCODE");
            // pm error code
            errorP.innerHTML = 'کد وارد نشده است';
            let boxCODE = document.getElementById("box-code");

        }
        // checked value lentgh
        else if (inputCode.length == 4) {
            let boxCITY = document.getElementById("box-city");
            boxCITY.style.display = "flex";
            let boxCODE = document.getElementById("box-code");
            boxCODE.style.marginRight = '0px';
            let box_register_driver = document.getElementById('box-register-driver');
            box_register_driver.style.display = 'none';
            boxCODE.style.display = 'none';
        }
        else {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد صحیح نیست ';
            let boxCODE = document.getElementById("box-code-input");
            boxCODE.style.display = 'flex';
            boxCODE.style.alignItems = 'center';
        }

    }
    // function page1 submit
    function next_level1_submit() {
        // length select
        let lengthSelect = 0;
        // value selector
        let select_error = document.getElementsByClassName('select-error');
        // for value seletor
        for (let index = 0; index < select_error.length; index++) {
            if (select_error[index].selected) {
                let select = select_error[index].parentElement;
                //   border error value
                select.style.border = '1px solid red';

            }
            else {
                //   border value
                let select = select_error[index].parentElement;
                select.style.border = '1px solid gray';
                lengthSelect++;
            }

        }
        // checked selector
        if (lengthSelect == select_error.length) {
            // history push next page
            history.push('/InputLevel1register');
        }


    }

    const [value1, setValue1] = useState("");

    const handleChange1 = e => {
      setValue(e.target.value);
      let avalue=e.target.value;
      localStorage.setItem('key',avalue);

    };
    function phone_number() {
        // arryre number
        let regex = /^[0-9]*$/
        // input code value
        let code = document.getElementById('phone-number').value.split(',');
        // checked value code
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            if (regex.test(element)) {
                return true
            } else {
                // value delete 
                code.pop()
                document.getElementById('phone-number').value = code.toString();
            }

        }
    }
    const handleSubmit1 = e => {
      
      e.preventDefault();   
      let phoneNumber = document.getElementById('phone-number').value;
      let errorP = document.getElementById("error-phone-number");
      errorP.innerHTML = "";
      let boxCode = document.getElementById('box-city-display');
      let submit = document.getElementsByClassName('submit')[0];
      let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let j = 0; j <= number.length; j++) {
          for (let i = 0; i <= phoneNumber.length; i++) {
              errorP.innerHTML = "";
              if (phoneNumber.length == 11) {
                  if (number[j] == phoneNumber[i]) {
                      if (phoneNumber[0] == 0 && phoneNumber[1] == 9) {
                          boxCode.style.display = 'block';
                          submit.style.display = 'none';
                      }
                      else {
                          errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                      }
                  }
                  else {
                      errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                  }
              }
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
  
    function handleKeypress1(e){
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handleSubmit1();
       
      }
    };
    function handleKeypress2(e){
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        errorcode();
      }
    };

    return (
        // start html
        <div>
            {/* component header */}
            <Header />
            {/* box register page1 */}
            <div className="style-box-input-register">
                <div>
                    <div className="box-register-driver" id='box-register-driver'>
                        <div id="input-phone-number">
                            {/* title register user */}
                            <div className="title"><h2 className='h2-register-user'>استخدام راننده</h2></div>
                            {/* phone number */}
                            {/* <label htmlFor="phone-number" className='label-phone-number aaaa' id='label-phone-number'>شماره همراه خود را وارد کنید</label>
                            <input type="text" ref={inputEl} name="phone" id="phone-number" maxLength='11' onChange={phone_number}
                                    onKeyPress={(event)=> {
                                        console.log(event.keyCode);
                                    }}  className='phone-number' placeholder='شماره همراه' />
                            <div>
                                <input type='button' value=' ارسال کد تایید ' className='submit' id="myButton"
                                      onClick={handleSubmit1} 
                            />
                            </div> */}
                            {/* pm error phone number */}
                            <form id='form-phone-number-input1'>
                            <label htmlFor="phone-number" className='label-phone-number aaaa' id='label-phone-number'>شماره همراه خود را وارد کنید</label>
                                <input
                                    ref={inputEl}
                                    name="phone" id="phone-number" maxLength='11'
                                    onChange={phone_number}
                                    onKeyPress={handleKeypress1}
                                    className='phone-number'
                                />
                                <button onClick={handleSubmit1} type="submit" className='submit' id="myButton">
                                ارسال کد تایید
                                </button>
                            </form>
                            <p id='error-phone-number'></p>
                        </div>

                    </div>
                    {/* box code */}
                    <div id="box-city-display">
                        <div id="box-code">
                            <div id='box-code-input'>
                                <form className='code-input-submit'>
                                    <div>
                                        <input type="text" onChange={code_number} maxLength='4' onKeyPress={handleKeypress2} name="" style={{ width: '86%', marginTop: '8px' }} className='phone-number' id="code" placeholder='کد تایید را وارد کنید' />
                                    </div>
                                    <button className='submit-code' onClick={errorcode}>
                                        تایید کد
                                    </button>
                                </form>

                            </div>
                        </div>
                        <p id="errorCODE"></p>
                        {/* box selector city */}
                        <div id="box-city">
                            <div className="input-city">
                                {/* seletor city */}
                                <select name="cars" id="city" onChange={state} className='select-error-box'>
                                    <option className='select-error' value="0" selected>استان</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                {/* seletor city */}
                                <select name="cars" className='select-error-box' onChange={city} id="city1">
                                    <option className='select-error' value="0" selected>شهر</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="input-city">
                                {/* seletor city */}
                                <select name="cars" className='select-error-box' onChange={region} id="city">
                                    <option className='select-error' value="0" selected>منطقه</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                {/* seletor city */}
                                <select name="cars" className='select-error-box' onChange={village} id="city1">
                                    <option className='select-error' value="0" selected>روستا</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            {/* submit next page */}
                            <div className='box-submit-register' onClick={next_level1_submit}><button className='submit-register'>ثبت نام</button></div>
                        </div>
                    </div>

                </div >
            </div>
        </div>
        // end html
    );
}


export default Inputlevel1;