import '../../sass/page/control-panel/style.scss';
import Header from "../../component/header/header";

function ControlPanel() {
    function errorPHONEnumberPanel() {
        let phoneNumber = document.getElementById("phone-number-panel").value;
        let errorP = document.getElementById("error-phone-number");
        errorP.innerHTML = '';
        let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let j = 0; j <= number.length; j++) {
            for (let i = 0; i <= phoneNumber.length; i++) {
                errorP.innerHTML = "";
                if (phoneNumber.length == 11) {
                    if (number[j] == phoneNumber[i]) {
                        if (phoneNumber[0] == 0 && phoneNumber[1] == 9) {

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
    }
    function errorCODE() {
        let inputCode = document.getElementById("code").value;
        let errorP = document.getElementById("errorCODE");
        errorP.innerHTML = "";
        if (inputCode.length == 0) {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد وارد نشده است';


        }
        else if (inputCode.length == 4) {

        }
        else {
            let errorP = document.getElementById("errorCODE");
            errorP.innerHTML = 'کد صحیح نیست ';
        }
    }
    return (
        <div>
             <Header />
            <div id='box-panel'>
            <div id='box-input-panel'>
                <div><h2>پنل مدیریت</h2></div>
                <p id='text-panel'>شماره تلفن همراه خود را وارد کنید</p>
                <div>
                    <input type="number" placeholder="شماره همراه" name="" id="phone-number-panel" />
                    <button className='submit' style={{ width: "100%" }} onClick={errorPHONEnumberPanel}>ارسال کد تایید</button>

                </div>
                <div id='code-confirmation'>
                    <input type="number" name="" id="code" placeholder="کد تایید را وارد کنید" />
                    <button id='submit-code' onClick={errorCODE}>تایید کد</button>

                </div>
                <div style={{ display: "flex" }}>
                    <p id="errorCODE"></p>
                </div>
                <div id="save-information-box">
                    <div className="save">
                        <input type="radio" id="html" name="fav_language" value="مرا به خاطر بسپار" />
                        <label for="html">مرا به خاطر بسپار</label><br />
                    </div>
                    <div id="code-not-received">
                        <button id="title-error-code">کد تایید دریافت نشد</button>
                        <div id="box-time">
                            <nav>s</nav><p id='time'></p>
                        </div>
                    </div>
                </div>
                <p id='error-phone-number'></p>
            </div>
        </div>
        </div>
    );
}
export default ControlPanel;