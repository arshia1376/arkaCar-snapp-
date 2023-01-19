import "../../sass/page/index/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import TabLine from "../../component/tabLine/tabLine";
import {
  Link
} from 'react-router-dom';
// function index
function Index() {
  // method scroll top
  window.scrollTo(0, 0);
  // funtion checked value phone number
  function error_phone_number() {
    let phoneNumber = document.getElementById('number-link-download').value;
    let errorP = document.getElementById("error-phone-number");
    errorP.innerHTML = "";
    let boxCode = document.getElementById('box-city-display');
    let submit = document.getElementsByClassName('submit')[0];
    // arraye number
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let j = 0; j <= number.length; j++) {
        for (let i = 0; i <= phoneNumber.length; i++) {
            errorP.innerHTML = "";
            // checked lentgh phone number
            if (phoneNumber.length == 11) {
                if (number[j] == phoneNumber[i]) {
                  // start value number
                    if (phoneNumber[0] == 0 && phoneNumber[1] == 9) {
                        boxCode.style.display = 'block';
                        submit.style.display = 'none';
                    }
                    else {
                      // error phone number
                        errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                    }
                }
                else {
                  // error phone number
                    errorP.innerHTML = 'شماره تلفن درست وارد نشده';
                }
            }
            // checked phone number null
            else if (phoneNumber.length == 0) {
                let errorP = document.getElementById("error-phone-number");
                // error phone number
                errorP.innerHTML = 'شماره تلفن وارد نشده';
            }
            else if (phoneNumber.length > 11) {
                let errorP = document.getElementById("error-phone-number");
                // error phone number
                errorP.innerHTML = 'شماره تلفن درست وارد نشده';
            }
            else {
                let errorP = document.getElementById("error-phone-number");
                // error phone number
                errorP.innerHTML = "شماره تلفن کوتاه است";
            }
        }

    }
};
  return (
    // start html
    <div>
      {/* component header */}
      <Header />
      {/* box index */}
      <div className="style-index">
        {/* box title indes */}
        <div className="box-index">
          <div className="box-title-index">
            <div className="title-index">
              <h2 className="text-title-index">
                {/* information ako car */}
                ‫ﻧﻘﻞ‬ ‫ﺣﻤﻠﻮ‬ ‫ﺳﯿﺴﺘﻢ‬ ‫ﺗﺮﯾﻦ‬ ‫اﻣﮑﺎﻧﺎت‬ ‫ﭘﺮ‬ ‫ﺑﻪ‬ ‫ﮐﻨﯿﺪ‬ ‫ﺳﻼم‬
                ‫اﯾﺮان‬
              </h2>
               {/*text information ako car */}
              <p className="text-index">
                ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬ ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬
                ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫اﺳﺖ‬ ‫ﮔﺮاﻓﯿﮏ‬ ‫ﻃﺮاﺣﺎن‬ ‫از‬ ‫اﺳﺘﻔﺎده‬ ‫ﺑﺎ‬ ‫و‬
                ‫‪.‬ﭼﺎپ‬ ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬ ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬
                ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫اﺳﺖ‬ ‫ﮔﺮاﻓﯿﮏ‬ ‫ﻃﺮاﺣﺎن‬ ‫از‬ ‫اﺳﺘﻔﺎده‬
                ‫ﺑﺎ‬ ‫و‬ ‫‪.‬ﭼﺎپ‬
              </p>
            </div>
            {/* box img title index */}
            <div className="img-title-index">
              {/* img title index */}
              <img
                className="imgIndex2"
                src={process.env.PUBLIC_URL + "/imgIndex2.png"}
                alt=""
              />
              <img
                className="imgIndex1"
                src={process.env.PUBLIC_URL + "/imgIndex1.png"}
                alt=""
              />
            </div>
          </div>
          {/* component tabline index car */}
          <div className="tabline-index">
            <TabLine />
          </div>
         <div className="style-box-index">
         <div className="option-index">
            <div className="title-option-index">
              {/* title option ako car */}
              <h3 className='ako-car-index-title'>آکوکار چیست</h3>
              <h5 className='ako-car-index-title1' style={{ marginTop: "15px", color: "gray" }}>
                سامانه هوشمند درخواست حودرو
              </h5>
              {/* text informaiton ako car */}
              <p
              className='ako-car-index-text' 
              >
                اکوکار یک سامانه هوشمند درخواست خودرو است که در هر زمان و هر
                نقطه ایی از شهر شما یا بارتان را به مقصد میرساند
              </p>
            </div>
            <div className="boxs-option-index">
              <div className="box-option-index">
                {/* box option ako car */}
                {/* img option */}
                {/* information option */}
                <img
                  className="img-option"
                  src={process.env.PUBLIC_URL + "/motor.png"}
                  alt=""
                />
                <h3 className="title-option">پرسرعت</h3>
                <p className="text-option">سرزمان تایید شده به مقصد برسید</p>
              </div>
              <div className="box-option-index">
                <img
                  className="img-option"
                  src={process.env.PUBLIC_URL + "/motor.png"}
                  alt=""
                />
                    {/* box option ako car */}
                {/* img option */}
                {/* information option */}
                <h3 className="title-option">ایمن</h3>
                <p className="text-option">سرزمان تایید شده به مقصد برسید</p>
              </div>
              <div className="box-option-index">
                <img
                  className="img-option"
                  src={process.env.PUBLIC_URL + "/motor.png"}
                  alt=""
                />
                    {/* box option ako car */}
                {/* img option */}
                {/* information option */}
                <h3 className="title-option">به صرفه</h3>
                <p className="text-option">سرزمان تایید شده به مقصد برسید</p>
              </div>
              <div className="box-option-index">
                <img
                  className="img-option"
                  src={process.env.PUBLIC_URL + "/motor.png"}
                  alt=""
                />
                    {/* box option ako car */}
                {/* img option */}
                {/* information option */}
                <h3 className="title-option">راحت</h3>
                <p className="text-option">سرزمان تایید شده به مقصد برسید</p>
              </div>
              <div className="box-option-index">
                <img
                  className="img-option"
                  src={process.env.PUBLIC_URL + "/motor.png"}
                  alt=""
                />
                    {/* box option ako car */}
                {/* img option */}
                {/* information option */}
                <h3 className="title-option">راحت</h3>
                <p className="text-option">سرزمان تایید شده به مقصد برسید</p>
              </div>
            </div>
          </div>
         </div>
         {/* box download app */}
          <div className="box-app-download">
            <div className="box-link-download">
              {/* title download app */}
              <p className='span-text-download'>
                دانلود اپلیکیشن <span className='span-title-download'>اکوکار</span>
              </p>
              <div className="box-link">
              <div className="box-phone-link-download">
                {/* input send link download */}
              <input
                  type="number"
                  placeholder="شماره همراه"
                  className="number-link-download"
                  id='number-link-download'
                />
                {/* error phone number */}
                <p id="error-phone-number"></p>
              </div>
              {/* click send link download app */}
                <button className="button-link" onClick={error_phone_number}>ارسال لینک دانلود</button>
              </div>
            </div>
            {/* app download */}
            <div className="app-download">
              <div className="app">
                {/* img download app */}
                <img
                  className="img-option-download"
                  src={process.env.PUBLIC_URL + "/google.png"}
                  alt=""
                />
                {/* title download */}
                  {/* click download */}
                <h6 className="title-app">نسخه اندروید</h6>
                <p className="text-app">جهت دانلود کلید کنید</p>
              </div>
              <div className="app">
                <img
                  className="img-option-download"
                  src={process.env.PUBLIC_URL + "/google.png"}
                  alt=""
                />
                 {/* title download */}
                  {/* click download */}
                <h6 className="title-app">نسخه اندروید</h6>
                <p className="text-app">جهت دانلود کلید کنید</p>
              </div>
              <div className="app">
                <img
                  className="img-option-download"
                  src={process.env.PUBLIC_URL + "/google.png"}
                  alt=""
                />
                 {/* title download */}
                  {/* click download */}
                <h6 className="title-app">نسخه ios</h6>
                <p className="text-app">جهت دانلود کلید کنید</p>
              </div>
              <div className="app">
                <img
                  className="img-option-download"
                  src={process.env.PUBLIC_URL + "/google.png"}
                  alt=""
                />
                 {/* title download */}
                  {/* click download */}
                <h6 className="title-app">نسخه ios</h6>
                <p className="text-app">جهت دانلود کلید کنید</p>
              </div>
            </div>
            </div>
      <div className="style-box-index">
      <div className="ako-car">
        {/* text ako car */}
              <div className="text-ako-car">
                <h2 className="title-ako">چرا راننده اکوکار شویم</h2>
                <p className="text-ako">
                  {/* option ako car */}
                  <li className='option-system-ako-car'>درامد روزانه و مطمعنی خواهید داشت</li>
                  <li className='option-system-ako-car'>میتوانید در لحظه تمام درامد خود را دریافت کنید</li>
                  <li className='option-system-ako-car'>
                    میتوانید بدون محدودیت به صورت پاره وقت و تمام وقت درامد کسب
                    کنید
                  </li>
                  <li className='option-system-ako-car'>
                    با قابلیت های پیشبینی شده در سیستم اکوکار با امنیت بیشتری
                    فعالیت کیند
                  </li>
                </p>
              </div>
              {/* img ako car */}
              <div className="img-ako-car">
                <img
                  className="img-ako"
                  src={process.env.PUBLIC_URL + "/hand.png"}
                  alt=""
                />
              </div>
            </div>
      </div>
            <div className="box-Exhibition">
              <div className="box-img-Exhibition">
                <img
                  className="img-Exhibition"
                  src={process.env.PUBLIC_URL + "/office1.png"}
                  alt=""
                />
              </div>
              <div className="box-text-Exhibition">
                {/* title exhibition */}
                <h2 className="title-Exhibition">
                  ثبت قرارداد با بنگاه های خودرو
                </h2>
                     {/* text exhibition */}
                <p className="text-exhibition">
                  شما بنگاه داران عزیز میتوانید به صورت واسطه با ناوگان حمل و
                  نقل <br />
                  اکوکار همکاری کنید و از مزایای ما بهرمند شویدوبرای اطلاعات
                  بیشتر کلیک کنید
                </p>
                {/* click exhibition */}
                <Link to='/AutoExpo' className="onclick-exhibition">کلیک کنید</Link>
              </div>
            </div>
         
        </div>
        {/* end html */}
      </div>
      {/* component footer */}
      <Footer />
    </div>
  );
}
export default Index;
