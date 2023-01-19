import "../../sass/page/SubmitComment/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
function SubmitComment() {
  return (
    <div>
      <Header />
      <div className="style-SubmitComment">
        <div className="box-SubmitComment">
          <div className="text-comment">
            <form action="" className='form-comment'>
              <h2>ثبت نظر</h2>
              <textarea
                name=""
                id="box-comment"
                placeholder="دیدگاه خود را بنویسید"
                cols="30"
                rows="10"
              ></textarea>
            </form>
          </div>
          <div className="information-comment">
            <input
              type="email"
              className="input-comment"
              className="phone-number"
              placeholder="ایمیل:"
            />
            <input
              type="text"
              className="input-comment"
              className="phone-number"
              placeholder="نام:"
            />
            <input
              type="text"
              className="input-comment"
              className="phone-number"
              placeholder="وبسایت"
            />
          </div>
          <div className="submit-comment">
              <input type="button" value="ارسال دیدگاه" className='submit-click-comment' />
              <input type="button" value="بازگشت" className='back-click-comment' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SubmitComment;
