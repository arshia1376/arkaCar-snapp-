import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from "react-router-dom";
// funtion origin of car record
function Origin_of_car_record() {
    // method history
    const history = useHistory();
    // function back page
    function BackPage(){
      history.push('/index');
      }
      function source(e){
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
    }
    function time(e){
        let avalue=e.target.value;
        if (avalue=='volvo') {
            
        }
        else{
            localStorage.setItem('time',avalue);
        }
    }
    function destination(e){
        let avalue=e.target.value;
        localStorage.setItem('key1',avalue);
    }
    function destination2(e){
        let avalue=e.target.value;
        localStorage.setItem('key2',avalue);
    }
    function description(e){
        let avalue=e.target.value;
        localStorage.setItem('key3',avalue);
    }
      function changeSelect(e){
let value=e.target.value;
if (value=='saab') {
    let maghsad2=document.getElementById('maghsad2');
    maghsad2.style.display='block';
}
if (value=='mercedes') {
    let maghsad2=document.getElementsByClassName('select-origin-option-time')[0];
    maghsad2.style.display='block';
}
if(value=='volvo'){
    let maghsad2=document.getElementById('maghsad2');
    maghsad2.style.display='none';
    let maghsad3=document.getElementsByClassName('select-origin-option-time')[0];
    maghsad3.style.display='none';
}
if (value=='volvo') {
            
}
else{
    localStorage.setItem('changeSelect',value);
}
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
            {/* box origin car */}
            <div className="box-origin-cars">
                <div className="box-origin-car-select" style={{height:'fit-content'}}>
                    {/* input */}
                <input type="text" className='origin-car' onChange={source} placeholder='مبدا' />
                    <input type="text" className='origin-car' onChange={destination} placeholder='مقصد' />
                    <input type="text" className='origin-car' id='maghsad2' onChange={destination2} style={{display:'none'}} placeholder='مقصد دوم' />
                    {/* input information */}
                    <input type="text" className='origin-car' onChange={description} placeholder='توضیحات'/>
                    {/* selector option */}
                    <select name="cars" id="select-origin-option" onChange={time} className='select-origin-option-time' style={{display:'none'}} >
                            <option value="volvo">تاخیر</option>
                            <option value="saab" >5دقیقه</option>
                            <option value="mercedes">10دقیقه</option>
                            <option value="audi">15دقیقه</option>
                            <option value="volvo">20دقیقه</option>
                            <option value="volvo">30دقیقه</option>
                        </select>
                    <select name="cars" id="select-origin-option" onChange={changeSelect}>
                            <option value="volvo">گزینه ها</option>
                            <option value="saab" >دو مقصده</option>
                            <option value="mercedes">تاخیر</option>
                            <option value="audi">رفت و برگشت مبدا</option>
                        </select>
                        {/* box price */}
                        <div className="price-origin-car">
                            <p className='text-price-origin'>هزینه سفر</p>
                            <p className='text-price-origin' style={{color:'red'}}>:4000تومان</p>
                            <div className='box-discount-code'>
                                {/* box discount code */}
                            <input type="text" style={{width:'40%',border:'1px solid rgba(184, 184, 184, 0.767)'}} placeholder='کد تخفیف'/>
                            <input type="button" className='discount-code-submit' style={{marginRight:'13px'}} value="ثبت کد" />
                            </div>
                        </div>
                        {/* submit next page */}
                    <Link to='/loading_search_car' className='submit-origin-car'>ثبت</Link>
                </div>
            </div>
            {/* end html */}
        </div>
    );
};
export default Origin_of_car_record;