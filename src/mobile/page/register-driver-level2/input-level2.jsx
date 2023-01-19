import '../../sass/page/register-driver-level2/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Date from '../../component/date/date';
function Inputlevel2() {
    const history = useHistory();
    function errorLevel2() {
        let errorP = document.getElementById("error-phone-number");
        errorP.innerHTML = "";
        let validateNull = 0;
        let inputError = document.getElementsByClassName('phone-number');
        for (let index = 0; index < inputError.length; index++) {
            if (inputError[index].value == "") {
                errorP.innerHTML = ' اصلاعات تکمیل نیست';
            }
            else {
                validateNull ++;
            }
        }
  
        if (validateNull == 11) {
            history.push('/next-register-level2')
        }
    }

    return (
        <div>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center',height:'100vh' }}>
            <div className='box-register-level2'>
                <div className="title"><h2>فرم استخدام-اطلاعات فردی</h2></div>
                <div className="box-inputlevel2">
                    <div className="box-section-input">
                        <input type="text" name="phone" id="" className='phone-number' placeholder='نام' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='کدملی' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='نوع خودرو' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='شماره پلاک' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='تابعیت' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='میزان حجم بارگیری' />
                    </div>
                    <div className="box-section-input">
                        <input type="text" name="phone" id="" className='phone-number' placeholder='نام خانوادگی' />
                        <Date />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='رنگ خودرو' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='جنسیت' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='دین' />
                        <input type="text" name="phone" id="" className='phone-number' placeholder='مساحت بارگیری' />
                    </div>
                </div>
                <div className="box-input-link">
                    <button id='next-level1' onClick={errorLevel2}>مرحله بعد</button>
                    <button  className='back-level1'>بازگشت</button>
                    <p id='error-phone-number'></p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );

}

export default Inputlevel2;