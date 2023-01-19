import '../../sass/page/AutoExpo/style.scss';
import { useHistory} from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
function AutoExpo() {
    const history = useHistory();
    function error(event){
        event.preventDefault();
        let errorP = document.getElementsByClassName("style-input-expo");
        let textError=document.getElementById("error-phone-number");
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
 
        if (validateNull == 3) {
            history.push('/AutoExpo-level2')
        }
    }

    return (
        <div>
           
            <Header/>
            <div className="box-display">
    <form action="">
    <div className="box-expo">
                    <div className="title">
                        <h2>مشارکت بنگاه ها</h2>
                    </div>
                    <div>
                        <input type="text" className='name-expo style-input-expo' placeholder='نام بنگاه ' />
                    </div>
                    <div className="select-city expo">
                        <select id="testoption" name="cars" className="city">
                            <option value="volvo">111</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="cars" className="city city2">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className="select-city expo">
                        <select name="cars" className="city">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="cars" className="city city2">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div >
                        <input className="call-expo style-input-expo" placeholder="شماره تلفن ثابت بنگاه" type="number" name="" id="" />
                    </div>
                    <div>
                        <input type="text" className='name-expo style-input-expo' placeholder='ادرس بنگاه' />
                    </div>
                    <div>
                        <button className='submit' id='submit' onClick={error}>ثبت</button>
                    </div>
                    <p id='error-phone-number'></p>
                </div>
    </form>
            </div>
            <Footer/>
        </div>
    );
}
export default AutoExpo;