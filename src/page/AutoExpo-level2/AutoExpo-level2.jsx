import '../../sass/page/AutoExpo-level2/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useState, useEffect, useRef } from "react";
function AutoExpoLevel2() {
    // scroll top
    window.scrollTo(0, 0);
    // history method
    const history = useHistory();
    // function submit next to page2
    let inputEl = useRef()
    useEffect(() => {
        inputEl.current.focus();
    }, [])
    function next_level1_submit(e){
        // arraye farsi
        e.preventDefault();  
        let validationregex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$/
        let name_register_user=document.getElementsByClassName('name-expo');
        let call_register_user=document.getElementById('call-expo');
        // error pm
        let errorN=document.getElementById('error-phone-number');
        errorN.innerHTML='';
        let validateNull = 0;
        // for checked value input
        for (let index = 0; index < name_register_user.length; index++) {
            if (validationregex.test(name_register_user[index].value)) {
            if (name_register_user[index].value=='') {
                // error pm value
                errorN.innerHTML='اطلاعات تکمیل نیست';
                // error border
                name_register_user[index].style.border='.5px solid red'; 
            }
            else {
               name_register_user[index].style.border='.5px solid #dcdcdcdb'; 
                validateNull ++;
            }
        
        }
        // error value input null
        else if(name_register_user[index].value==""){
            name_register_user[index].style.border='.5px solid red'; 
            errorN.innerHTML='اطلاعات تکمیل نیست';
        }
        else{
            // error value farsi
            name_register_user[index].style.border='.5px solid red'; 
            errorN.innerHTML='حروف به فارسی باشد';
        }
        if (validateNull == 5) {
            // history push next page
                history.push('/AutoExpo-level3');
        }
    }
    }
    function handleKeypress1(e){
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        next_level1_submit();
       
      }
    };
    function code_title_expo(e){
        // function deleted value
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
        let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
        let code=document.getElementById('title-auto-expo').value.split(',');
        // test value farsi
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            if (regex.test(element)) {
                return true
            }else{
                // pop deleted error value
                code.pop()
                document.getElementById('title-auto-expo').value=code.toString();
            }
            
        }
        }
        function number_expo(e){
            let avalue=e.target.value;
            localStorage.setItem('key',avalue);
        }
        function car_model(e){
            let avalue=e.target.value;
            localStorage.setItem('key',avalue);
        }
        function code_title_expo_boss(e){
            let avalue=e.target.value;
            localStorage.setItem('key',avalue);
            // function value checked farsi namme boss
            let regex=/^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]*$/
            let code=document.getElementById('title-auto-expo-boss').value.split(',');
            for (let i = 0; i < code.length; i++) {
                const element = code[i];
                // test value farsi
                if (regex.test(element)) {
                    return true
                }
                else{
                       // pop deleted error value
                    code.pop()
                    document.getElementById('title-auto-expo-boss').value=code.toString();
                }
                
            }
            }
            // start html 
    return (
        <div>
            {/* commponent header */}
            <Header/>
            {/* box page2 auto */}
            <div className="display">
                <div className="box-car">
                    {/* s form */}
                    <form id='form-autoExpo-level2' action="">
                        {/* title page2 auto */}
                        <div className="title"><h2 className='h2-register-user'>اطلاعات بنگاه</h2></div>
                        <div>
                            {/* phone number auto expo */}
                            <input type="text" ref={inputEl} className='name-expo name-expo-level2 style-input-expo' placeholder='شماره ثبت بنگاه' />
                        </div>
                        <div>
                            {/* information auto expo */}
                            <input type="text" id='title-auto-expo' onChange={code_title_expo} className='name-expo name-expo-level2 style-input-expo' placeholder='نوع فعالیت بنگاه' />
                        </div>
                        <div>
                            {/* information car */}
                            <input type="text" className='name-expo name-expo-level2 style-input-expo' onChange={car_model}  placeholder='نوع وسیله نقلیه' />
                        </div>
                        <div>
                            {/* name boss auto */}
                            <input type="text"  id='title-auto-expo-boss' onChange={code_title_expo_boss} className='name-expo name-expo-level2 style-input-expo' placeholder='مدیریت بنگاه' />
                        </div>
                        <div>
                            {/* number */}
                            <input type="text" className='name-expo name-expo-level2 style-input-expo'         onKeyPress={handleKeypress1} onChange={number_expo} placeholder='شماره مجوز' />
                        </div>
                        <div>
                            {/* onclick next page */}
                            <button className='submit submit-level2' id='submit'  onClick={next_level1_submit}>ثبت</button>
                        </div>
                        <div className='box-submit-back'>
                            {/* onclick back page */}
                        <Link to='/AutoExpo'  className='back-level1'>بازگشت</Link>
                        </div>
                    </form>
                    {/* e form */}
                    {/* error  */}
                    <p id='error-phone-number'></p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default AutoExpoLevel2;