import '../../sass/page/register-driver-level1/style.scss';
import Header from "../../component/header/header";
import Test from '../../component/test';
import { useHistory, Link } from 'react-router-dom';
function Inputlevel1() {
    

    const history = useHistory();
    function error_phone_number() {
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
    function errorcode() {
        let inputCode = document.getElementById("code").value;
        let errorP = document.getElementById("errorCODE");
        errorP.innerHTML = "";
        if (inputCode.length == 0) {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد وارد نشده است';
            let boxCODE = document.getElementById("box-code");

        }
        else if (inputCode.length == 4) {
            let boxCITY = document.getElementById("box-city");
            boxCITY.style.display = "flex";
            let boxCODE = document.getElementById("box-code");
            boxCODE.style.marginRight = '0px';
        
            
        }
        else {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد صحیح نیست ';
            let boxCODE = document.getElementById("box-code-input");
            boxCODE.style.display = 'flex';
            boxCODE.style.alignItems = 'center';
        }

    }
function next_level1_submit(){
    history.push('/InputLevel1register');
}
    return (
        <div>
            <Header />
            <div className="style-box-input-register">
                <div>
                    <div className="box-register-driver">
                        <div id="input-phone-number">
                            <div className="title"><h2>استخدام راننده</h2></div>
                            <label htmlFor="phone-number" id='label-phone-number'>شماره همراه خود را وارد کنید</label>
                            <input type="number" name="phone" id="phone-number" className='phone-number' placeholder='شماره همراه' />
                            <div><input type='button' value=' ارسال کد تایید ' className='submit' onClick={error_phone_number} />
                            </div>
                            <p id='error-phone-number'></p>
                        </div>

                    </div>
                    <div id="box-city-display">
                        <div id="box-code">
                            <div id='box-code-input'>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: 'flex-end', marginTop: '60px',width:'270px',justifyContent:'space-between' }}>
                                    <div>
                                        <input type="number" name="" style={{ width: '86%', marginTop: '8px' }} className='phone-number' id="code" placeholder='کد تایید را وارد کنید' />
                                    </div>
                                    <input type="button" value="تایید کد" className='submit-code' onClick={errorcode} />
                                </div>

                            </div>
                        </div>
                        <p id="errorCODE"></p>
                        <div id="box-city">
                            <div className="input-city">
                                <select name="cars" id="city">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <select name="cars" id="city1">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="input-city">
                                <select name="cars" id="city">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <select name="cars" id="city1">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className='box-submit-register' onClick={next_level1_submit}><Link id='submit-register' className='submit-register' to='/InputLevel1register'>ثبت نام</Link></div>
                        </div>
                    </div>

                </div >
            </div>
        </div>
    );
}


export default Inputlevel1;