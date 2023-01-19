import "../../sass/page/contactUs/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import Mapir_location from '../../component/map-location/map-location';
// function contactus
function contactUs() {
  // method scroll top
  window.scrollTo(0, 0);
  return (
    // start html
    <div>
      {/* component header */}
      <Header/>
      {/* title contactus */}
      <div className="title-aboutus">
        <div className="underline"></div>
        {/* title call me */}
        <div className="text-aboutus">تماس با ما</div>
        <div className="orderline"></div>
      </div>
      <div className="style-contactUs">
        {/* box contactus */}
        <div className="box-contact">
          {/* box map */}
          <div className="map-contact-us">
            {/* map loction company */}
            <Mapir_location/>
            {/* <img
              className="img-map-contact"
              src={process.env.PUBLIC_URL + "/map.jpeg"}
              alt=""
            /> */}
          </div>
          {/* box information contactus */}
          <div className="text-contact-us">
            <div className="text-display-contact">
              {/* address company */}
              <h2 className='style-text-contact'>آدرس</h2>
              {/* text address company */}
              <p className="address-text-contact style-text-contact">
                ‫ﭘﺴﺖ‬ ‫اداره‬ ‫ﻓﺮودﮔﺘﻪ‪.‬ﺟﻨﺐ‬ ‫ﺑﻪ‬ ‫ﻫﻤﺪان‪.‬ﻧﺮﺳﯿﺪه‬
                ‫ﻓﻨﺎوري‪.‬ﻃﺒﻘﻪ‪3‬‬ ‫و‬ ‫ﻋﻠﻢ‬ ‫ﭘﺎرك‬ ‫ﻣﺠﻤﻮع‬ ‫آرﮐﺎ‬
                ‫واﺣﺪ‪.78‬ﺷﺮﮐﺖ‬
              </p>
              {/* hours of work */}
              <h2 className='style-text-contact'>ساعت کاری</h2>
              <p className='style-text-contact'>‫‪18:00‬‬ ‫ﺷﻨﺒﻪ‪:‬از‪08:00‬ﺗﺎ‬ ‫ﭘﻨﺞ‬ ‫ﺗﺎ‬ ‫ﺷﻨﺒﻪ‬</p>
              <h2 className='style-text-contact'>ایمیل</h2>
              {/* email address */}
              <p className='style-text-contact'>msafikhani1717@gmail.com</p>
            </div>
            <div className="text-display-contact">
              {/* phone number company */}
              <h2 className='style-text-contact'>شماره تماس</h2>
              <p className='style-text-contact'>‫‪0818343535‬‬</p>
              {/* title name boss */}
              <h2 className='style-text-contact'>مدیریت</h2>
              <p className='style-text-contact'>رضا خالقی قر</p>
            </div>
          </div>
        </div>
        {/* end html */}
      </div>
      {/* component footer */}
      <Footer/>
    </div>
  );
}
export default contactUs;
