import "../../sass/page/AutoExpo-level3/style.scss";
import { useHistory, Link } from "react-router-dom";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
function AutoExpoLevel3() {
  const history = useHistory();
  function error(event) {
    event.preventDefault();
    let errorP = document.getElementsByClassName("style-input-expo");
    let textError = document.getElementById("error-phone-number");
    textError.innerHTML = "";
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
          <form id="form-autoExpo-level2" action="">
            <div className="title">
              <h2>اطلاعات مالک بنگاه</h2>
            </div>
            <div>
              <input
                type="text"
                className="name-expo style-input-expo"
                placeholder="نام و نام خانوادگی"
              />
            </div>
            <div>
              <input
                type="text"
                className="name-expo style-input-expo"
                placeholder="ادرس محل سکونت"
              />
            </div>
            <div>
              <input
                type="number"
                className="name-expo style-input-expo"
                placeholder="کد ملی"
              />
            </div>
            <div className="box-img-uploader">
              <div class="image-upload-auto">
                <div>
                  <p id="text-input-upload">عکس اول صفحه شناسنامه</p>
                </div>
                <div>
                  {" "}
                  <label for="one-certificate">
                    <img
                      className="img-folder"
                      src={process.env.PUBLIC_URL + "/folder.png"}
                      alt=""
                    />
                  </label>
                  <input className="file-input style-input-expo" id='one-certificate' type="file" />
                </div>
              </div>
            </div>
            <div>
              <input
                type="number"
                className="name-expo style-input-expo"
                placeholder="شماره همراه"
              />
            </div>
            <div>
              <button className="submit" id="submit" onClick={error}>
                ثبت
              </button>
            </div>
            <div style={{ display: "flex",width:'270px' }}>
              <button  className="back-level1">
                بازگشت
              </button>
            </div>
          </form>
          <p id="error-phone-number"></p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default AutoExpoLevel3;
