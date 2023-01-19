import '../../sass/page/register-driver-level4/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
function Inputlevel4(){
    let history = useHistory();
    function Inputlevel5() {
      let file_input = document.getElementsByClassName("file-input");
      let errorP = document.getElementById("error-phone-number");
      errorP.innerHTML='';
    let  validateNull=0;
      for (let index = 0; index < file_input.length; index++) {
        if (file_input[index].value == '') {
          let errorP = document.getElementById("error-phone-number");
          errorP.innerHTML = 'اطلاعات تکمیل نیست';
        }
        else{
          validateNull ++;
        }
        if(validateNull==2){
          let box_title_completed=document.getElementById("box-text-register-completed");
          box_title_completed.style.display='flex';
          box_title_completed.style.marginTop='220px';
        }
      }
    }
    return (
       <div>
         <Header/>
          <div style={{ display: "flex", justifyContent: "center",height:'100vh' }}>
      <div className="box-input-level3">
      <h2 style={{ fontSize: "15px" }}>فرم استخدام-احراز هویت</h2>
      <div className="box-img-upload">
                <p className="title-img-upload"> بارگذاری عکس خودرو</p>
                <div class="image-upload">
                    <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
                    <div>  <label for="car">
                        <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
                    </label>
                        <input className="file-input" id='car' type="file" /></div>
                </div>
            </div>
            <div className="box-img-upload">
                <p className="title-img-upload"> بارگذاری عکس سلفی از خود</p>
                <div class="image-upload">
                    <div><p id="text-input-upload">عکس بارگزاری شود</p></div>
                    <div>  <label for="self">
                        <img className='img-folder' src={process.env.PUBLIC_URL + '/folder.png'} alt="" />
                    </label>
                        <input className="file-input" id='self' type="file" /></div>
                </div>
            </div>
            <div className="box-input-link">
      <button id='next-level1' onClick={Inputlevel5}>ثبت</button>
      <button className='back-level1'>بازگشت</button>
      <p id='error-phone-number'></p>
    </div>
      </div>
      <div id="box-text-register-completed" style={{display:'none'}}>
          <h5 className='text-register-completed'>تبریک!فرم استخدام شما تکمیل شد</h5>
          <p className='text-register-completed'>منتظر تایید از سوی مدیریت ناوگان <br />اکوکار باشید
          </p>
      </div>
        </div>
        <Footer/>
       </div>
    );
}

export default Inputlevel4;