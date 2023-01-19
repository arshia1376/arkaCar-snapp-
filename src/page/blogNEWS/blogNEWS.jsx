import "../../sass/page/blogNEWS/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
// funtion blog news
function blogNEWS() {
  // scroll top method
  window.scrollTo(0, 0);
  return (
    // start html
    <div>
      {/* commponent header */}
      <Header />
      {/* box blog news page */}
      <div className="style-blog">
        <div className="blog">
          {/* img news */}
          <div className="img-title-blog">
            {/* like news */}
            <div className="like-blog">
              <div className="box-like-blog"></div>
            </div>
            {/* text news */}
            <div className="text-img-blog">
              <div className="title-img-blog">
                <h2 className="time-blog">
                  ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬ ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬
                  ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬
                </h2>
              </div>
              {/* time news */}
              <div className="timer-img-blog">
                <p className="time-blog">1400/8/13</p>
                <p className="time-blog time-blog-clock">12:54:10</p>
              </div>
            </div>
          </div>
          <div className="information-blog-news">
            {/* title news */}
            <h2 className='title-about-blog-news'>
              ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬ ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬
              ‫ﻟﻮرم‬
            </h2>
            {/* text news */}
            <p className='text-about-blog-news'>
              ‫ﻃﺮاﺣﺎن‬ ‫از‬ ‫اﺳﺘﻔﺎده‬ ‫ﺑﺎ‬ ‫و‬ ‫ﭼﺎپ‬ ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬
              ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫اﺳﺖ‬ ‫ﻻزم‬
              ‫ﮐﻪ‬ ‫ﺳﻄﺮآﻧﭽﻨﺎن‬ ‫و‬ ‫ﺳﺘﻮن‬ ‫در‬ ‫ﻣﺠﻠﻪ‬ ‫و‬ ‫روزﻧﺎﻣﻪ‬ ‫ﺑﻠﮑﻪ‬
              ‫ﻣﺘﻮن‬ ‫و‬ ‫ﭼﺎﭘﮕﺮﻫﺎ‬ ‫اﺳﺖ‪.‬‬ ‫ﮔﺮاﻓﯿﮏ‬ ‫ﮐﺎرﺑﺮدي‬ ‫اﺑﺰارﻫﺎي‬
              ‫ﺑﻬﺒﻮد‬ ‫ﻫﺪف‬ ‫ﺑﺎ‬ ‫ﻣﺘﻨﻮع‬ ‫ﮐﺎرﺑﺮدﻫﺎي‬ ‫و‬ ‫ﻧﯿﺎز‬ ‫ﻣﻮرد‬
              ‫ﺗﮑﻨﻮﻟﻮژي‬ ‫ﻓﻌﻠﯽ‬ ‫ﺷﺮاﯾﻂ‬ ‫ﺑﺮاي‬ ‫و‬ ‫ﺟﺎﻣﻊ‬ ‫ﻓﺮاوان‬ ‫ﺷﻨﺎﺧﺖ‬
              ‫آﯾﻨﺪه‬ ‫و‬ ‫ﺣﺎل‬ ‫ﮔﺬﺷﺘﻪ‪،‬‬ ‫درﺻﺪ‬ ‫ﺳﻪ‬ ‫و‬ ‫ﺷﺼﺖ‬ ‫در‬ ‫زﯾﺎدي‬
              ‫ﮐﺘﺎﺑﻬﺎي‬ ‫ﺑﺎﺷﺪ‪.‬‬ ‫ﻣﯽ‬ ‫ﻋﻠﯽ‬ ‫اي‬ ‫راﯾﺎﻧﻪ‬ ‫ﻃﺮاﺣﺎن‬ ‫ﺑﺮاي‬ ‫را‬
              ‫ﺑﯿﺸﺘﺮي‬ ‫ﺷﻨﺎﺧﺖ‬ ‫اﻓﺰارﻫﺎ‬ ‫ﻧﺮم‬ ‫ﺑﺎ‬ ‫ﺗﺎ‬ ‫ﻃﻠﺒﺪ‬ ‫ﻣﯽ‬ ‫را‬
              ‫ﻣﺘﺨﺼﺼﺎن‬ ‫و‬ ‫ه‬ ‫ﺗﻮا‬ ‫ﻣﯽ‬ ‫ﺻﻮرت‬ ‫اﯾﻦ‬ ‫در‬ ‫ﮐﺮد‪.‬‬ ‫اﯾﺠﺎد‬
              ‫ﻓﺎرﺳﯽ‬ ‫زﺑﺎن‬ ‫در‬ ‫ﭘﯿﺸﺮو‬ ‫ﻓﺮﻫﻨﮓ‬ ‫و‬ ‫ﺧﻼﻗﯽ‬ ‫ﻃﺮاﺣﺎن‬ ‫اﻟﺨﺼﻮص‬
              ‫ﭘﺎﯾﺎن‬ ‫ﺑﻪ‬ ‫ﺗﺎﯾﭗ‬ ‫ﺳﺨﺖ‬ ‫ﺷﺮاﯾﻂ‬ ‫و‬ ‫راﻫﮑﺎرﻫﺎ‬ ‫اراﺋﻪ‬ ‫در‬
              ‫ﻣﻮﺟﻮد‬ ‫دﺷﻮاري‬ ‫و‬ ‫ﺗﻤﺎم‬ ‫ﮐﻪ‬ ‫داﺷﺖ‬ ‫اﻣﯿﺪ‬ ‫ن‬ ‫اﻫﻞ‬ ‫ﭘﯿﻮﺳﺘﻪ‬
              ‫ﺳﻮاﻻت‬ ‫ﺟﻮاﺑﮕﻮي‬ ‫و‬ ‫اﺻﻠﯽ‬ ‫دﺳﺘﺎوردﻫﺎي‬ ‫ﺣﺮوﻓﭽﯿﻨﯽ‬ ‫ﺷﺎﻣﻞ‬ ‫ﻧﯿﺎز‬
              ‫ﻣﻮرد‬ ‫زﻣﺎن‬ ‫و‬ ‫رﺳﺪ‬ ‫ﮔﯿﺮد‬ ‫ﻗﺮار‬ ‫اﺳﺘﻔﺎده‬ ‫ﻣﻮرد‬ ‫اﺳﺎﺳﺎ‬
              ‫ﻃﺮاﺣﯽ‬ ‫ﻣﻮﺟﻮد‬ ‫‪.‬دﻧﯿﺎي‬
            </p>
          </div>
          <div className="social-media">
            {/* author news */}
            <div className="author">نویسنده:عرشیا صفی خانی</div>
            <div className="box-social-media">
              {/* logo network */}
              <p className='title-network-app-blog'>شبکه های اجتماعی</p>
              {/* img network app */}
              <img
                className="logo-social-media"
                src={process.env.PUBLIC_URL + "/facebook.png"}
                alt=""
              />
              <img
                className="logo-social-media"
                src={process.env.PUBLIC_URL + "/facebook.png"}
                alt=""
              />
              <img
                className="logo-social-media"
                src={process.env.PUBLIC_URL + "/facebook.png"}
                alt=""
              />
              <img
                className="logo-social-media"
                src={process.env.PUBLIC_URL + "/facebook.png"}
                alt=""
              />
            </div>
          </div>
          <div className="final-box-blog">
        <h3  className='title-box-blog-news-related'>اخبار مرتبط</h3>
        <div className="final-style-box-blog">
          <div className="blog-new blog-new-scroll-news ">
            <img
              className="image-blog-new"
              src={process.env.PUBLIC_URL + "/15.jpg"}
              alt=""
            />
            <div className="text-box-blog-new">
              <div className="text-title-blog">
                <p className="text-blog">
                  ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫ﺻﻨﻌﺖ‬
                  ‫از‫ﻧﺎﻣﻔﻬﻮم‬
                </p>
              </div>
              <div className="time-blog-new">
                <p className="time-text-blog">1400/8/17</p>
                <p className="time-text-blog" style={{ marginRight: "40px" }}>
                  12:43:10
                </p>
              </div>
            </div>
            <div className="open-box-blog">
              <p className="text-open-box">اطلاعات بیشتر</p>
              <p className="icon-open-blog"> ?? </p>
            </div>
          </div>
          <div className="blog-new">
            <img
              className="image-blog-new"
              src={process.env.PUBLIC_URL + "/15.jpg"}
              alt=""
            />
            <div className="text-box-blog-new">
              <div className="text-title-blog">
                <p className="text-blog">
                  ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫ﺻﻨﻌﺖ‬
                  ‫از‫ﻧﺎﻣﻔﻬﻮم‬
                </p>
              </div>
              <div className="time-blog-new">
                <p className="time-text-blog">1400/8/17</p>
                <p className="time-text-blog" style={{ marginRight: "40px" }}>
                  12:43:10
                </p>
              </div>
            </div>
            {/* information submit */}
            <div className="open-box-blog">
              <p className="text-open-box">اطلاعات بیشتر</p>
              <p className="icon-open-blog"> ?? </p>
            </div>
          </div>
          <div className="blog-new">
            <img
              className="image-blog-new"
              src={process.env.PUBLIC_URL + "/15.jpg"}
              alt=""
            />
            <div className="text-box-blog-new">
              <div className="text-title-blog">
                <p className="text-blog">
                  ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫ﺻﻨﻌﺖ‬
                  ‫از‫ﻧﺎﻣﻔﻬﻮم‬
                </p>
              </div>
              <div className="time-blog-new">
                <p className="time-text-blog">1400/8/17</p>
                <p className="time-text-blog" style={{ marginRight: "40px" }}>
                  12:43:10
                </p>
              </div>
            </div>
            <div className="open-box-blog">
              <p className="text-open-box">اطلاعات بیشتر</p>
              <p className="icon-open-blog"> ?? </p>
            </div>
          </div>
        </div>
      </div>
          <h4  className='end-text-blog'>
          ‫ﻃﺮاﺣﺎن‬ ‫از‬ ‫اﺳﺘﻔﺎده‬ ‫ﺑﺎ‬ ‫و‬ ‫ﭼﺎپ‬ ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬ ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬
‫اﺳﺖ‬ ‫‪.
‫ﻃﺮاﺣﺎن‬ ‫از‬ ‫اﺳﺘﻔﺎده‬ ‫ﺑﺎ‬ ‫و‬ ‫ﭼﺎپ‬ ‫ﺻﻨﻌﺖ‬ ‫از‬ ‫ﻧﺎﻣﻔﻬﻮم‬ ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬
‫اﺳﺖ‬ ‫‪.‬ﮔﺮاﻓﯿﮏ‬‬ﮔﺮاﻓﯿﮏ‬
          </h4>
        </div>
      </div>
      {/* commponent footer */}
      <Footer />
    </div>
  );
}
export default blogNEWS;
