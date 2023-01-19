import '../../sass/page/motor-delivery/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
// funtion motor delivery page 2
function Motor_deliveryy2() {
    // phone number function
    function phone_number(){
        // arraye number
        let regex=/^[0-9]*$/
        let code=document.getElementById('phone-number-motor').value.split(',');
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            // value number test
            if (regex.test(element)) {
                return true
            }else{
                // remove error value
                code.pop()
                document.getElementById('phone-number-motor').value=code.toString();
            }
        }
        }
        // method history
    const history = useHistory();
    // function backpage
    function BackPage(){
        // history push page back index
      history.push('/index');
      }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
                 {/* component mapir */}
            <Mapir />
            {/* box submir back page */}
            <div className="submit-back-origin">
                {/* img submit back page */}
            <img
             onClick={BackPage}
                className="img-submit-back"
                src={process.env.PUBLIC_URL + "/download.png"}
                alt=""
              />
            </div>
            {/* box origin car */}
            <div className="box-origin-cars">
                <div className="box-origin-car" style={{height:'340px'}}>
                    {/* box unit */}
                    <div className="box-unit">
                        <input type="text" className='unit'  placeholder='واحد'/>
                        <input type="text" className="unit unit-border" placeholder='پلاک' />
                    </div>
                    {/* name and family input */}
                    <input type="text" className='origin-car' placeholder='نام و نام خانوادگی'/>
                    {/* select option */}
                    <select name="cars" id="select-origin-option">
                            <option value="volvo">گزینه ها</option>
                            <option value="saab">دو مقصده</option>
                            <option value="mercedes">تاخیر</option>
                            <option value="audi">رفت و برگشت مبدا</option>
                        </select>
                        {/* input phone number */}
                    <input type="text" className='origin-car' maxLength='11' onChange={phone_number} id='phone-number-motor' placeholder='شماره موبایل'/>
                    <div className="price-origin-car">
                        {/* box price */}
                            <p className='text-price-origin'>هزینه سفر</p>
                            <p className='text-price-origin' style={{color:'red'}}>:4000تومان</p>
                            <div className='box-discount-code'>
                                {/* box discount */}
                            <input type="text" style={{width:'40%',border:'1px solid rgba(184, 184, 184, 0.767)'}} placeholder='کد تخفیف'/>
                                 {/* submit discount */}
                            <input type="button" className='discount-code-submit' style={{marginRight:'13px'}} value="ثبت کد" />
                            </div>
                        </div>
                        {/* submit origin */}
                    <Link to='/loading_search_car' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
            {/* end html */}
        </div>
    );
};
export default Motor_deliveryy2;