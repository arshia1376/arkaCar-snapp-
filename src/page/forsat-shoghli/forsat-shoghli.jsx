import '../../sass/page/forsat-shoghli/style.scss';
import Collapsible from '../../component/collapsible-forsat/collapsible';
function forsat_shoghli() {
    window.scrollTo(0, 0);
    function forsat_submit(){
        window.scrollTo(100, 1000);
    
    }
    return (
        <>
            <div className="box-forsat-shoghli">
                <header className='header-forsat'>
                    <div className="logo-forsat">
                        <img className='logo-arkatec' src={process.env.PUBLIC_URL + '/logo_arka.png'} alt="" />
                    </div>
                    <div className="social-media-forsat">
                        <img className=" network-forsat" src={process.env.PUBLIC_URL + '/telegram.png'} alt="" />
                        <img className=" network-forsat" src={process.env.PUBLIC_URL + '/twitter.png'} alt="" />
                        <img className="network-forsat" src={process.env.PUBLIC_URL + '/instagram.png'} alt="" />
                    </div>
                </header>
                <section className='img-section-forsat'>
                    <div className='box-title-section-forsat'>
                        <h1 className='title-section-forsat'>Discover yourself!</h1>
                    </div>
                    <div className="button-forsat-section">
                        <button onClick={forsat_submit} className='title-section'>View job opportunities</button>
                    </div>
                </section>
                <section>
                    <div className="box-title-lifestyle-arkatec">
                        <h2 className="title-lifestyle-arkatec">live in arkatec</h2>
                        <div className="orderline-forsat"></div>
                    </div>
                    <div className="option-forsat">
                        <div className="box-option-forsat">
                            <img className="img-option-forsat" src={process.env.PUBLIC_URL + '/option1.png'} alt="" />
                            <h3 className='title-option-live-arka'>Work to live</h3>
                        </div>
                        <div className="box-option-forsat">
                            <img className="img-option-forsat" src={process.env.PUBLIC_URL + '/option2.png'} alt="" />
                            <h3 className='title-option-live-arka'>Individual development</h3>
                        </div>
                        <div className="box-option-forsat">
                            <img className="img-option-forsat" src={process.env.PUBLIC_URL + '/option3.png'} alt="" />
                            <h3 className='title-option-live-arka'>Adventure and risk</h3>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='box-collapsible-forsat'>
                    <div className="box-title-lifestyle-arkatec">
                        <h2 className="title-lifestyle-arkatec">Career Opportunities</h2>
                        <div className="orderline-forsat"></div>
                    </div>
                        <div className="collapsible-forsat">
                            <Collapsible  title1='front-end' children='ghghghghg'/>
                            <Collapsible  title1='back-end'/>
                            <Collapsible  title1='android'/>
                            <Collapsible title1='grafic'/>
                            <Collapsible title1='ios'/>
                        </div>
                        <div className="box-title-lifestyle-arkatec">
                        <h2 className="title-lifestyle-arkatec">Your skill was not on the list?</h2>
                        <div className="orderline-forsat"></div>
                    </div>
                    <div className='box-email-forsat'>
                        <p className="text-forsat-email">
                        If you do not find the job you are looking for, send your resume to this email address for review.
                        </p>
                        <a className='email-forsat' href="">arkatecteam@gmail.com</a>
                    </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default forsat_shoghli;