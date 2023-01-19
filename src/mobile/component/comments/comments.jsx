import "../../sass/page/comments/style.scss";
function Comments() {
  return (
    <div>
      <div className="box-comments">
        <div className="comments">
            <div className="img-comments">
            <img className='img-comment' src={process.env.PUBLIC_URL + '/me.jpg'} alt="" />
            </div>
            <div className="title-comments">
                <h3 className="name-comment">عرشیا</h3>
                <p className="time-comment"> ۱۲ساعت پیش</p>
                <p className="text-comment">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                <div className="like-comments">
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up fa-thumbs-un "></i>
                <p className="replay">  پاسخ دادن</p>
                </div>
            </div>
            
        </div>
        <div className="comments" id='box-replay'>
            <div className="img-comments">
            <img className='img-comment' src={process.env.PUBLIC_URL + '/me2.jpg'} alt="" />
            </div>
            <div className="title-comments">
                <h3 className="name-comment">عرشیا</h3>
                <p className="time-comment"> ۱۲ساعت پیش</p>
                <p className="text-comment" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                <div className="like-comments" id='replay-like'>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up fa-thumbs-un "></i>
                </div>
            </div>   
        </div>
        <div className="underline-comments"></div>
        <div className="comments">
            <div className="img-comments">
            <img className='img-comment' src={process.env.PUBLIC_URL + '/me.jpg'} alt="" />
            </div>
            <div className="title-comments">
                <h3 className="name-comment">عرشیا</h3>
                <p className="time-comment"> ۱۲ساعت پیش</p>
                <p className="text-comment">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                <div className="like-comments">
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up fa-thumbs-un"></i>
                <p className="replay">  پاسخ دادن</p>
                </div>
            </div>
        </div>
        <div className="underline-comments"></div>
        <div className="comments">
            <div className="img-comments">
            <img className='img-comment' src={process.env.PUBLIC_URL + '/me.jpg'} alt="" />
            </div>
            <div className="title-comments">
                <h3 className="name-comment">عرشیا</h3>
                <p className="time-comment"> ۱۲ساعت پیش</p>
                <p className="text-comment">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                <div className="like-comments">
                <i class="fas fa-thumbs-up "></i>
                <i class="fas fa-thumbs-up fa-thumbs-un"></i>
                <p className="replay">  پاسخ دادن</p>
                </div>
            </div>
        </div>
        <div className="underline-comments"></div>
        <div className="comments">
            <div className="img-comments">
            <img className='img-comment' src={process.env.PUBLIC_URL + '/me.jpg'} alt="" />
            </div>
            <div className="title-comments">
                <h3 className="name-comment">عرشیا</h3>
                <p className="time-comment"> ۱۲ساعت پیش</p>
                <p className="text-comment">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                <div className="like-comments">
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-thumbs-up fa-thumbs-un"></i>
                <p className="replay">
                    پاسخ دادن
                    </p>
                </div>
            </div>
        </div>
        <div className="underline-comments"></div>
      </div>
    </div>
  );
}
export default Comments;
