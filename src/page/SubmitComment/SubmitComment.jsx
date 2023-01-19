import "../../sass/page/SubmitComment/style.scss";
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
// function submit comment
function SubmitComment() {
  return (
    // start html
    <div>
      {/* component header */}
      <Header />
      {/* box submit comment */}
      <div className="style-SubmitComment">
        <div className="box-SubmitComment">
          {/* text submit */}
          <div className="text-comment">
            {/* form comment */}
            <form action="" className='form-comment'>
              {/* title submit comment */}
              <h2>ثبت نظر</h2>
              {/* text area comment */}
              <textarea
                name=""
                id="box-comment"
                placeholder="دیدگاه خود را بنویسید"
                cols="30"
                rows="10"
              ></textarea>
            </form>
            {/* end form */}
          </div>
          {/* box email */}
          <div className="information-comment">
            {/* email */}
            <input
              type="email"
              className="input-comment"
              className="phone-number"
              placeholder="ایمیل:"
            />
            {/* name */}
            <input
              type="text"
              className="input-comment"
              className="phone-number"
              placeholder="نام:"
            />
            {/* website */}
            <input
              type="text"
              className="input-comment"
              className="phone-number"
              placeholder="وبسایت"
            />
          </div>
          <div className="submit-comment">
            {/* submit comment */}
              <input type="button" value="ارسال دیدگاه" className='submit-click-comment' />
              {/* back page */}
              <input type="button" value="بازگشت" className='back-click-comment' />
          </div>
        </div>
      </div>
      {/* component footer */}
      <Footer />
    </div>
    // end html
  );
}
export default SubmitComment;
