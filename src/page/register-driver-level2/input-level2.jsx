import '../../sass/page/register-driver-level2/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Date from '../../component/date/date';
import { useState, useEffect, useRef } from "react";
// function page2
function Inputlevel2() {
    function handleKeypress1(e){
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        errorLevel2();
      }
    };
    // method scroll top
    window.scrollTo(0, 0);
    // history method
    const history = useHistory();
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    // funtion name
    function code_name(e){
        // arraye farsi
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
        let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
        let code=document.getElementById('code').value.split(',');
        // for code lentgh
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
        }
        // funtion codefirst name
        function code_first_name(e){
            // arraye farsi
            let avalue=e.target.value;
            localStorage.setItem('key',avalue);
            let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
            let code=document.getElementById('code-name-farsi').value.split(',');
            // for checked code lentgh
            for (let i = 0; i < code.length; i++) {
                const element = code[i];
                if (regex.test(element)) {
                    return true
                }else{
                    // remove value code
                    code.pop()
                    document.getElementById('code-name-farsi').value=code.toString();
                }
                
            }
            }
            // function code meli
            function code_meli(e){
                // arraye number
                let avalue=e.target.value;
                localStorage.setItem('key',avalue);
                let regex=/^[0-9]*$/
                let code=document.getElementById('code-meli').value.split(',');
                // checked code lentgh
                for (let i = 0; i < code.length; i++) {
                    const element = code[i];
                    if (regex.test(element)) {
                        return true
                    }else{
                        // remove value
                        code.pop()
                        document.getElementById('code-meli').value=code.toString();
                    }
                }
                }
                // function code color name
            function code_color_name(e){
                // arraye farsi
                let avalue=e.target.value;
                localStorage.setItem('key',avalue);
                let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
                let code=document.getElementById('color-car').value.split(',');
                // checked code lentgh
                for (let i = 0; i < code.length; i++) {
                    const element = code[i];
                    if (regex.test(element)) {
                        return true
                    }else{
                        // remove value 
                        code.pop()
                        document.getElementById('color-car').value=code.toString();
                    }
                    
                }
                }
                function number_tag(e){
                    let avalue=e.target.value;
                    localStorage.setItem('key',avalue);
                }
                function height_volume(e){
                    let avalue=e.target.value;
                    localStorage.setItem('key',avalue);
                }
                function gender(e){
                    let avalue=e.target.value;
                    if (avalue=='volvo') {
                        
                    }
                    else{
                        localStorage.setItem('gender',avalue);
                    }
                }
                function seleted_natinality(e){
                    let avalue=e.target.value;
                    if (avalue=='volvo') {
                        
                    }
                    else{
                        localStorage.setItem('seleted_natinality',avalue);
                    }
                }
                function slected(e){
                    let avalue=e.target.value;
                    if (avalue=='volvo') {
                        
                    }
                    else{
                        localStorage.setItem('selected',avalue);
                    }
                }
                function area_weight(e){
                          let avalue=e.target.value;
                    localStorage.setItem('key',avalue);
                }
                // function error page2
    function errorLevel2(e) {
        // pm error 
        console.log('vfasdgvasdv');
        e.preventDefault();   
        let errorP = document.getElementById("error-phone-number");
        errorP.innerHTML = "";
        let validateNull = 0;
        // value input
        let inputError = document.getElementsByClassName('phone-number');
        // for checked value input
        for (let index = 0; index < inputError.length; index++) {
            // if value error null
            if (inputError[index].value == "") {
                // pm error
                errorP.innerHTML = ' اصلاعات تکمیل نیست';
                // border input error
                inputError[index].style.border='.5px solid red'; 
            }
            else {
                // border input
                let inputError = document.getElementsByClassName('phone-number');
                inputError[index].style.border='.5px solid #dcdcdcdb ';
                validateNull ++;
          
            }
        }
        // lentgh select
        let lengthSelect = 0;
        // value selector
        let select_error=document.getElementsByClassName('select-error');
        // for value lentgh checked
        for (let index = 0; index < select_error.length; index++) {
          if (select_error[index].selected) {
              let select=select_error[index].parentElement;
            //   error pm
              errorP.innerHTML = ' اصلاعات تکمیل نیست';
            //   error border input
              select.style.border='1px solid red';
          
          }
          else {
            //   borfer input
            let select=select_error[index].parentElement;
            select.style.border='1px solid gray';
            lengthSelect++;
          
          }
            
        }
        // checked value
        if (lengthSelect==4) {
    // history push next page

            history.push('/next-register-level2')
        }
    }
  
    return (
        // start html
        <div>
            {/* component header */}
            <Header/>
            {/* start box register level2 */}
            <div className='app-box-register-level2'>
            <div className='box-register-level2'>
                {/* title register user page2 */}
                <div className="title"><h2 className='h2-register-user'>فرم استخدام-اطلاعات فردی</h2></div>
                {/* box input name ... */}
                <div className="box-inputlevel2">
                    <div className="box-section-input">
                        <input type="text" ref={inputEl} name="phone" id="code" onChange={code_name} maxLength='10' className='phone-number' placeholder='نام' />
                        <input type="text" name="phone" onChange={code_first_name} maxLength='15'  id="code-name-farsi" className='phone-number ' placeholder='نام خانوادگی' />
                        <input type="text" onChange={code_meli} maxLength='10' name="phone" id="code-meli" className='phone-number ' placeholder='کدملی' />
                        <select name="cars" className='phone-number' onChange={slected} >
                            {/* box selector car */}
                                    <option value="volvo" className='select-error' selected>نوع وسیله نقلیه</option>
                                    <option value="saab">سواری</option>
                                    <option value="mercedes">وانت</option>
                                    <option value="audi">پیک موتوری</option>
                                    <option value="mercedes">جرثتغیل</option>
                                    <option value="mercedes">کامیون</option>
                                    <option value="mercedes">تریلی</option>
                                    <option value="mercedes">مینی بوس</option>
                                    <option value="mercedes">اتوبوس</option>
                                    <option value="mercedes">ون</option>
                                    <option value="mercedes">پیک خودرو</option>
                                </select>
{/* box selector nationality */}
                        <select name="cars" className='phone-number' onChange={seleted_natinality} >
                                    <option value="volvo" className='select-error' selected>تابعیت  </option>
                                    <option value="saab">ایرانی</option>
                                    <option value="mercedes">خارجی</option>
                                </select>
                                {/* input weight car */}
                        <input type="text" name="phone" id="" className='phone-number' onChange={height_volume} placeholder='میزان حجم بارگیری' />
                    </div>
                    <form className="box-section-input">
                        {/* input plaque */}
                    <input type="text" name="phone" id="" className='phone-number' onChange={number_tag} placeholder='شماره پلاک' />
                    {/* component date birthday */}
                        <Date />
                        {/* input color car */}
                        <input type="text" name="phone" id="color-car" onChange={code_color_name} maxLength='12' className='phone-number ' placeholder='رنگ خودرو' />
                        <select name="cars" className='phone-number' onChange={gender} >
                            {/* selector gender */}
                                    <option value="volvo" className='select-error' selected>جنسیت  </option>
                                    <option value="saab">مذکر</option>
                                    <option value="mercedes">مونث</option>
                                </select>
                                {/* selector religion */}
                                <select name="cars" className='phone-number' >
                                    <option value="volvo" className='select-error' selected>دین  </option>
                                    <option value="saab">اسلام</option>
                                 
                                </select>
                                {/* width weight */}
                        <input type="text" name="phone" id="" className='phone-number' onChange={area_weight}  onKeyPress={handleKeypress1} placeholder='مساحت بارگیری' />
                        <button id='next-level1' style={{marginTop:'10px'}} onClick={errorLevel2}>مرحله بعد</button>
                     {/* submit back page */}
                    <Link to='/Driver'  className='back-level1'>بازگشت</Link>
                    {/* error input value */}
                    <p id='error-phone-number'></p>
                    </form>
                    <div className=" box-input-link-level2">
                        {/* submit next page */}
                    
                </div>
                </div>
               
            </div>
        </div>
        {/* component footer */}
        <Footer/>
        </div>
        // end html
    );

}

export default Inputlevel2;