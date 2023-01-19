import "../../sass/page/contactUs/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
function contactUs() {
  return (
    <div>
      <Header/>
      <div className="title-aboutus">
        <div className="underline"></div>
        <div className="text-aboutus">تماس با ما</div>
        <div className="orderline"></div>
      </div>
      <div className="style-contactUs">
        <div className="box-contact">
          <div className="map-contact-us">
            <img
              className="img-map-contact"
              src={process.env.PUBLIC_URL + "/map.jpeg"}
              alt=""
            />
          </div>
          <div className="text-contact-us">
            <div className="text-display-contact">
              <h2 className='style-text-contact'>آدرس</h2>
              <p className="address-text-contact style-text-contact">
                ‫ﭘﺴﺖ‬ ‫اداره‬ ‫ﻓﺮودﮔﺘﻪ‪.‬ﺟﻨﺐ‬ ‫ﺑﻪ‬ ‫ﻫﻤﺪان‪.‬ﻧﺮﺳﯿﺪه‬
                ‫ﻓﻨﺎوري‪.‬ﻃﺒﻘﻪ‪3‬‬ ‫و‬ ‫ﻋﻠﻢ‬ ‫ﭘﺎرك‬ ‫ﻣﺠﻤﻮع‬ ‫آرﮐﺎ‬
                ‫واﺣﺪ‪.78‬ﺷﺮﮐﺖ‬
              </p>
              <h2 className='style-text-contact'>ساعت کاری</h2>
              <p className='style-text-contact'>‫‪18:00‬‬ ‫ﺷﻨﺒﻪ‪:‬از‪08:00‬ﺗﺎ‬ ‫ﭘﻨﺞ‬ ‫ﺗﺎ‬ ‫ﺷﻨﺒﻪ‬</p>
              <h2 className='style-text-contact'>ایمیل</h2>
              <p className='style-text-contact'>msafikhani1717@gmail.com</p>
            </div>
            <div className="text-display-contact">
              <h2 className='style-text-contact'>شماره تماس</h2>
              <p className='style-text-contact'>‫‪0818343535‬‬</p>
              <h2 className='style-text-contact'>مدیریت</h2>
              <p className='style-text-contact'>رضا خالقی قر</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default contactUs;
