import React from "react";
import "../../sass/page/blog/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import App from '../../component/swiper/swiper';
import Paging from "../../component/paging/paging";
import PagingBlog from '../../component/pagingBlog/pagingBlog';
// function scroll top
export default function Blog() {
  window.scrollTo(0, 0);
  return (
    // start html blog
    <div>
      {/* commponent header */}
      
      <Header />
      <body className="body-blog" >
        {/* commponent swiper */}
        <App />
       
        <div className="blog-box" style={{ marginTop: '30px' }}>
          {/* title news new */}

          <h3 className='title-box-blog'>اخبار جدید</h3>
          <div className="box-blog-new" style={{ marginTop: "10px" }}>
            <div className="blog-new blog-new-scroll">
              <img
                className="image-blog-new"
                src={process.env.PUBLIC_URL + "/4.jpg"}
                alt=""
              />
              {/* text box blog new */}
              <div className="text-box-blog-new">
                <div className="text-title-blog">
                  <p className="text-blog">
                    {/* text blog */}
                    ‫ﺳﺎدﮔﯽ‬ ‫ﺗﻮﻟﯿﺪ‬ ‫ﺑﺎ‬ ‫ﺳﺎﺧﺘﮕﯽ‬ ‫ﻣﺘﻦ‬ ‫اﯾﭙﺴﻮم‬ ‫ﻟﻮرم‬ ‫ﺻﻨﻌﺖ‬
                    ‫از‫ﻧﺎﻣﻔﻬﻮم‬
                  </p>
                </div>
                {/* time news */}
                <div className="time-blog-new">
                  <p className="time-text-blog">1400/8/17</p>
                  <p className="time-text-blog" style={{ marginRight: "40px" }}>
                    12:43:10
                  </p>
                </div>
              </div>
              {/* submit informtion */}
              <div className="open-box-blog">
                <p className="text-open-box">اطلاعات بیشتر</p>
                {/* font awesome icon informaition */}
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
            <div className="blog-new ">
              <img
                className="image-blog-new"
                src={process.env.PUBLIC_URL + "/4.jpg"}
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
            <div className="blog-new">
              <img
                className="image-blog-new"
                src={process.env.PUBLIC_URL + "/4.jpg"}
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
          </div>
          <PagingBlog/>
          <div className="box-blog-new">
            <div className="blog-new blog-new-scroll">
              <img
                className="image-blog-new"
                src={process.env.PUBLIC_URL + "/4.jpg"}
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
            <div className="blog-new">
              <img
                className="image-blog-new"
                src={process.env.PUBLIC_URL + "/4.jpg"}
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
            <div className="blog-new">
              <img
                className="image-blog-new"
                src={process.env.PUBLIC_URL + "/4.jpg"}
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="final-box-blog">
          {/* end text */}
          <h3 className='title-box-blog'>اخرین نوشته ها</h3>
          <div className="final-style-box-blog">
            <div className="blog-new blog-new-scroll">
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
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
                <p className="icon-open-blog"> <i class="fas fa-arrow-circle-right"></i> </p>
              </div>
            </div>
          </div>
          <Paging />
          
        </div>
        {/* end box blog */}
        {/* component footer */}
        <Footer />
      </body>
    </div>
  );
}
