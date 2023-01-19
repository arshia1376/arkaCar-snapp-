import '../../sass/page/AutoExpo-level2/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
function AutoExpoLevel2() {
    const history = useHistory();
    function error(event) {
        event.preventDefault();
        let errorP = document.getElementsByClassName("style-input-expo");
        let textError = document.getElementById("error-phone-number");
        console.log(errorP);
        textError.innerHTML = '';
        let validateNull = 0;
        for (let index = 0; index < errorP.length; index++) {
            if (errorP[index].value == "") {
                textError.innerHTML = ' اصلاعات تکمیل نیست';
            }
            else {
                validateNull ++;
            }
        }
     
        if (validateNull == 5) {
            history.push('/AutoExpo-level3')
        }
    }
    return (
        <div>
            <Header/>
            <div className="display">
                <div className="box-car">
                    <form id='form-autoExpo-level2' action="">
                        <div className="title"><h2>اطلاعات بنگاه</h2></div>
                        <div>
                            <input type="text" className='name-expo style-input-expo' placeholder='شماره ثبت بنگاه' />
                        </div>
                        <div>
                            <input type="text" className='name-expo style-input-expo' placeholder='نوع فعالیت بنگاه' />
                        </div>
                        <div>
                            <input type="text" className='name-expo style-input-expo' placeholder='نوع وسیله نقلیه' />
                        </div>
                        <div>
                            <input type="text" className='name-expo style-input-expo' placeholder='مدیریت بنگاه' />
                        </div>
                        <div>
                            <input type="text" className='name-expo style-input-expo' placeholder='شماره مجوز' />
                        </div>
                        <div>
                            <button className='submit' onClick={error} id='submit'>ثبت</button>
                        </div>
                        <div style={{display: "flex" ,width:'270px'}}>
                        <button  className='back-level1'>بازگشت</button>
                        </div>
                    </form>
                    <p id='error-phone-number'></p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default AutoExpoLevel2;