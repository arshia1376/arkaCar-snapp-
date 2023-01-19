import '../../sass/page/collapsible/style.scss';
import React, { Component, useState } from 'react';
import { useHistory,Link } from 'react-router-dom';
// component collapsible
const Collapsible = ({title1,children1}) => {
    // state open and close
    const [open,setOpen] = useState(false);
    const history = useHistory();
// function togglepanel open and close
    function togglePanel() {
        setOpen(!open)
    }
    function next_resome(){
        history.push('/Resome_page')
    }
    return (
        // start html
    <div>
        {/* title question */}
        <div onClick={togglePanel} className="header1 header-collapsible">
          
            {title1}</div>
            {/* text collapsible text question */}
        {open ? (
            <div className="content1" style={{display:"flex",width:'100%',alignItems:'center',justifyContent:'space-around',direction:'ltr'}}>
              <p style={{width:"70%",direction:'ltr'}}>  Arrives and how the fonts and measurements are intended. Since designers are generally not the authors of the text and do not have the duty to respect the copyright of the texts and at the same time their work is somewhat dependent on the text, they use fake content to lay out their graphic page to complete the design and pagination stage. .
                {children1}</p>
                <button onClick={next_resome} style={{height:'40px',border:"none",backgroundColor:'#22a8d1',padding:'3px',borderRadius:'3px',color:'white'}} className='submit-resome'>sending resume</button>
            </div>
        ) : null}
    </div>);
    // end html

}
export default Collapsible;