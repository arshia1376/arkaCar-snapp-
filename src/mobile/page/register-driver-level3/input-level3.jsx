
import '../../sass/page/register-driver-level3/style.scss';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import { useHistory,Link } from 'react-router-dom';
function Inputlevel3() {
  let history = useHistory();
  function Inputlevel4() {
    let file_input = document.getElementsByClassName("file-input");
    let errorP = document.getElementById("error-phone-number");
    errorP.innerHTML='';
    let validateNull = 0;
    for (let index = 0; index < file_input.length; index++) {
      if (file_input[index].value == "") {
          errorP.innerHTML = ' اصلاعات تکمیل نیست';
      }
      else {
          validateNull ++;
      }
  }

  if (validateNull == 8) {
      history.push('/next-register-level3')
  }
  }
  return (
    <div>
      <Header/>
      <div style={{ display: "flex", justifyContent: "center",height:'150vh' }}>
      <div className="box-input-level3">
        <h2 style={{ fontSize: "15px" }}>فرم استخدام- بارگذاری  مدارک  مورد نیاز</h2>
        <div className="box-img-upload">
          <p className="title-img-upload">گواهی نامه</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Certificate">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Certificate' type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">کارت خودرو</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Car-card">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input"  id='Car-card' type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">بیمه نامه خودرو</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Insurance">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id="Insurance" type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">معاینه فنی</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="technical-diagnosis">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id="technical-diagnosis" type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">گواهی عدم اعتیاد</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Addiction">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Addiction' type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">کارت معافیت</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Exemption">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Exemption' type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">کارت معاینه فنی</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="technical-diagnosis-card">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='technical-diagnosis-card' type="file" /></div>
          </div>
        </div>
        <div className="box-img-upload">
          <p className="title-img-upload">عکس اول شناسنامه</p>
          <div class="image-upload">
            <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
            <div>  <label for="Birth-certificate">
              <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
            </label>
              <input className="file-input" id='Birth-certificate' type="file" /></div>
          </div>
        </div>


        <div className="box-input-link">
          <button id='next-level1' onClick={Inputlevel4}>ثبت</button>
          <button className='back-level1'>بازگشت</button>
          <p id='error-phone-number'></p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
export default Inputlevel3;