import '../../sass/page/Origin-of-car-application/style.scss';
import Mapir from '../../component/map/map';
import Header from "../../component/header/header";
import { useHistory, Link } from 'react-router-dom';
// function Origin of car destination
function Origin_of_car_destination() {
    // method history
    const history = useHistory();
    // faunction back page
  function BackPage(){
    //   method history
    history.push('/index');
    }
    function source(e){
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
    }
    function destination(e){
        let avalue=e.target.value;
        localStorage.setItem('key',avalue);
    }
    return (
        // start html
        <div>
            {/* component header */}
            <Header />
                {/* component mapir */}
            <Mapir />
            {/* submit back page */}
            <div className="submit-back-origin">
                {/* img submit back page */}
                <img
                onClick={BackPage}
                    className="img-submit-back"
                    src={process.env.PUBLIC_URL + "/download.png"}
                    alt=""
                />
            </div>
            <i class="fas fa-map-marker-alt"></i>
            <div className="box-origin-cars">
                {/* box origin car */}
                <div className="box-origin-car" style={{ height: '150px' }}>
                    <input type="text" className='origin-car' onChange={source} placeholder='مبدا' />
                    <input type="text" className='origin-car' onChange={destination} placeholder='مقصد' />
                    {/* submit next page */}
                <Link to='/Origin_of_car_record'  className='submit-origin-car'>
                    تایید
                </Link>
                </div>
            </div>
            {/* end html */}
        </div>
    );
};
export default Origin_of_car_destination;