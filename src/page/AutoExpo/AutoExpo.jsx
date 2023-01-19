import '../../sass/page/AutoExpo/style.scss';
import { useHistory} from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useState, useEffect, useRef } from "react";
//function autoexpo page1
function AutoExpo() {
    //scroll top code
    window.scrollTo(0, 0);
    function state(e){
        let avalue=e.target.value;
        if (avalue=='volvo') {
            
        }
        else{
            localStorage.setItem('state_axpo',avalue);
        }
    }
    function city(e){
        let avalue=e.target.value;
        if (avalue=='volvo') {
            
        }
        else{
            localStorage.setItem('city_axpo',avalue);
        }
    }
    function region(e){
        let avalue=e.target.value;
        if (avalue=='volvo') {
            
        }
        else{
            localStorage.setItem('region_axpo',avalue);
        }
    }
    function village(e){
        let avalue=e.target.value;
        if (avalue=='volvo') {
            
        }
        else{
            localStorage.setItem('village_axpo',avalue);
        }
    }
    //history push url
    const history = useHistory();
    //function enter phone number
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    function next_level1_submit(e){
        e.preventDefault();   
        //arraye letter farsi
        let validationregex=/^[1234567890آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/
        //name value register expo
        let name_register_user=document.getElementsByClassName('name-expo');
        let call_register_user=document.getElementById('call-expo');
        //pm error
        let errorN=document.getElementById('error-phone-number');
        errorN.innerHTML='';
        //validate null input
        let validateNull = 0;
        //for name and information user
        for (let index = 0; index < name_register_user.length; index++) {
            //if test value farsi
            if (validationregex.test(name_register_user[index].value)) {
                //if checked value input
            if (name_register_user[index].value=='') {
                errorN.innerHTML='اطلاعات تکمیل نیست';
                //error border value input
                name_register_user[index].style.border='.5px solid red'; 
            }
            else {
               name_register_user[index].style.border='.5px solid #dcdcdcdb'; 
                validateNull ++;
            }
        
        }
        //error border value farsi
        else if(name_register_user[index].value==""){
            name_register_user[index].style.border='.5px solid red'; 
            errorN.innerHTML='اطلاعات تکمیل نیست';
        }
        else{
            name_register_user[index].style.border='.5px solid red'; 
            errorN.innerHTML='حروف به فارسی باشد';
        }
        //length select checked
        let lengthSelect = 0;
        //select
        let select_error=document.getElementsByClassName('select-error');
        //selected for  checked
        for (let index = 0; index < select_error.length; index++) {
            //if selected
          if (select_error[index].selected) {
              //select fathder
              let select=select_error[index].parentElement;
              //rerror value selected
              errorN.innerHTML='اطلاعات تکمیل نیست';
              select.style.border='1px solid red';
          
          }
          //value selected true
          else {
            let select=select_error[index].parentElement;
            select.style.border='1px solid gray';
            lengthSelect++;
          }
            
        }
        //checked value input and selector
        if (validateNull == 2 && lengthSelect==4) {
            if (call_register_user=='') {
                //error pm
                errorN.innerHTML=" شماره تلفن ثابت بنگاه وارد نشده";
            }
            else{
                //push url history
                history.push('/AutoExpo-level2');
            }
           
        }
    }
    }
    //function name farsi value
    function code_name(e){
        //arraye farsi
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
        let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
        let code=document.getElementById('name-farsi-expo').value.split(',');
        //checked value name
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            //test value farsi
            if (regex.test(element)) {
                return true
            }else{
                //remove value error farsi
                code.pop()
                document.getElementById('name-farsi-expo').value=code.toString();
            }
            
        }
        }
        function handleKeypress1(e){
            //it triggers by pressing the enter key
          if (e.keyCode === 13) {
            next_level1_submit();
           
          }
        };
        //function code title
        function code_title_expo(e){
            let avalue=e.target.value;
            localStorage.setItem('key',avalue);
            let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی1234567890]*$/
            let code=document.getElementById('title-auto-expo').value.split(',');
            for (let i = 0; i < code.length; i++) {
                const element = code[i];
                if (regex.test(element)) {
                    return true
                }else{
                       //remove value error farsi
                    code.pop()
                    document.getElementById('title-auto-expo').value=code.toString();
                }
                
            }
            }
            //start html autoexpo page1
    return (
        <div>
           {/*commponent header */}
            <Header/>
            {/* box display */}
            <div className="box-display">
                {/* start form */}
    <form action="">
    <div className="box-expo">
                    <div className="title">
                        {/* title autoexpo */}
                        <h2 className='h2-register-user'>مشارکت بنگاه ها</h2>
                    </div>
                    <div>
                        {/* input name  */}
                        <input type="text"  ref={inputEl} className='name-expo style-input-expo'onChange={code_name} id='name-farsi-expo' placeholder='نام بنگاه ' />
                    </div>
                    {/* selector city */}
                    <div className="select-city expo">
                        <select id="testoption" name="cars" onChange={state} className="city city-expo">
                            <option value="volvo" className='select-error' selected>استان</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        {/* selector city */}
                        <select name="cars" className="city city2 city-expo" onChange={city}>
                            <option value="volvo" className='select-error' selected>شهر</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                   {/* selector city */}
                    <div className="select-city select-city2 expo">
                        <select name="cars" className="city city-expo" onChange={region}>
                            <option value="volvo" className='select-error' selected>منطقه</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                           {/* selector city */}
                        <select name="cars" className="city city2 city-expo" onChange={village}>
                            <option value="volvo" className='select-error' selected>روستا</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
          
                    <div>
                        {/* input addrres auto */}
                        <input type="text" className='name-expo name-expo1 style-input-expo' onKeyPress={handleKeypress1} id='title-auto-expo' onChange={code_title_expo} placeholder='ادرس بنگاه' />
                    </div>
                    <div>
                        {/* onlick change page */}
                        <button className='submit submit-expo' id='submit' onClick={next_level1_submit}>ثبت</button>
                    </div>
                    {/* pm error */}
                    <p id='error-phone-number'></p>
                </div>
    </form>
            </div>
            <Footer/>
        </div>
    );
}
export default AutoExpo;