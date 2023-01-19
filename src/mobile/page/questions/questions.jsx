import '../../sass/page/questions/style.scss';
import { useHistory,Link } from 'react-router-dom';
import Header from '../../component/header/header';
import Footer from '../../component/footer/footer';
import Collapsible from '../../component/collapsible/collapsible';
function blogNews() {
    return(
        <div>
          <Header/>
<div className="box-blog">
<div className="style">
  <div className="title-questions">
    <div className="text">
      <p id='text-questions'>
      ‫ﺷﻮد‬ ‫ﻣﯽ‬ ‫ﭘﺮﺳﯿﺪه‬ ‫ﻣﺨﺎﻃﺒﺎن‬ ‫و‬ ‫ﻣﺸﺘﺮﯾﺎن‬ ‫ﺗﻮﺳﻂ‬ ‫ﮐﻪ‬ ‫ﻣﺘﺪاوﻟﯽ‬ ‫ﺳﻮاﻻت‬ ‫ﺗﻮاﻧﯿﺪ‬ ‫ﻣﯽ‬ ‫ﺑﺨﺶ‬ ‫اﯾﻦ‬ ‫در‬
‫ﻋﺰﯾﺰان‬ ‫ﺷﻤﺎ‬ ‫ﺳﻮاﻻت‬ ‫ﺑﻪ‬ ‫ﭘﺎﺳﺨﮕﻮﯾﯽ‬ ‫ﻣﻮﺟﺐ‬ ‫ﻫﺎ‬ ‫ﭘﺎﺳﺦ‬ ‫و‬ ‫ﭘﺮﺳﺶ‬ ‫اﯾﻦ‬ ‫ﻣﺸﺎﻫﺪه‬ ‫ﻧﻤﺎﺋﯿﺪ‪.‬‬ ‫ﻣﺸﺎﻫﺪه‬ ‫را‬
‫ﺳﻮاﻟﯽ‬ ‫اﺳﺖ‬ ‫ﻣﻤﮑﻦ‬ ‫ﻓﺮﻣﺎﺋﯿﺪ‪.‬‬ ‫ﻣﻄﺎﻟﻌﻪ‬ ‫را‬ ‫ﺟﻮاب‬ ‫و‬ ‫ﺳﻮال‬ ‫اﯾﻦ‬ ‫ﮐﻨﯿﻤﻬﻤﻪ‬ ‫ﻣﯽ‬ ‫ﭘﯿﺸﻨﻬﺎد‬ ‫ﺷﺪ‪.‬‬ ‫ﺧﻮاﻫﺪ‬
‫ﺑﺎﺷﯿﺪ‬ ‫داﺷﺘﻪ‬ ‫آن‬ ‫ﭘﺎﺳﺦ‬ ‫ﺑﻪ‬ ‫ﻧﯿﺎز‬ ‫اﻓﺰار‬ ‫ﻧﺮم‬ ‫ﺑﺎ‬ ‫ﮐﺎر‬ ‫درﺣﯿﻦ‬ ‫اﻣﺎ‬ ‫ﻧﺒﺎﺷﺪ‬ ‫ﻣﻬﻢ‬ ‫ﺷﻤﺎ‬ ‫ﺑﺮاي‬ ‫ﺣﺎﺿﺮ‬ ‫ﺣﺎل‬ ‫‪.‬در‬
      </p>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='svg'>
  <path fill="#f1c31b9c" d="M65.7,-20.9C72.3,-1,56,26.8,32.2,44C8.4,61.3,-22.9,67.9,-38.1,56C-53.3,44.1,-52.5,13.6,-43.5,-9.6C-34.4,-32.8,-17.2,-48.7,6.2,-50.7C29.5,-52.7,59.1,-40.8,65.7,-20.9Z" transform="translate(100 100)" />
</svg>
    </div>
    <div className="img-title-questions">
    <img className='img-questions' src={process.env.PUBLIC_URL + '12.png'}  alt="" />
    </div>
  </div>
  <div className="line-title">
    <div className="line"></div>
    <div className="text-line">
      <p>سوالات متداول</p>
    </div>
    <div className="line"></div>
  </div>
  <div className='box-questions'>
<Collapsible/>
<Collapsible/>
<Collapsible/>
<Collapsible/>
<Collapsible/>
<Collapsible/>
<Collapsible/>
<Collapsible/>
<Collapsible/>
  </div>
</div>
</div>
<Footer/>
        </div>
    );
}
export default blogNews;
