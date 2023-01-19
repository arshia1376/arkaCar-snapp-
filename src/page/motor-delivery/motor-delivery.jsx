import '../../sass/page/motor-delivery/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
// function motor delivery
function Motor_deliveryy() {
    // function phone number
    function phone_number(){
        // arraye number
        let regex=/^[0-9]*$/
        let code=document.getElementById('phone-number-motor').value.split(',');
        // for checked number
        for (let i = 0; i < code.length; i++) {
            const element = code[i];
            if (regex.test(element)) {
                return true
            }else{
                // remove error value number
                code.pop()
                document.getElementById('phone-number-motor').value=code.toString();
            }
        }
        }
        // method history
    const history = useHistory();
    // function back page
    function BackPage(){
        // history push page
      history.push('/index');
      }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
              {/* component mapir */}
            <Mapir />
            {/* submit back origin */}
            <div className="submit-back-origin">
                {/* img submit back */}
            <img
             onClick={BackPage}
                className="img-submit-back"
                src={process.env.PUBLIC_URL + "/download.png"}
                alt=""
              />
            </div>
            {/* box input origin car */}
            <div className="box-origin-cars">
                <div className="box-origin-car" style={{height:'185px'}}>
                <input type="text" className='origin-car' placeholder='مبدا' />
                   {/* box input origin car */}
                    <input type="text" className='origin-car' placeholder='مقصد' />
                    {/* submit next page */}
                    <Link to='/Motor_deliveryy2' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
            {/* end html */}
        </div>
    );
};
export default Motor_deliveryy;