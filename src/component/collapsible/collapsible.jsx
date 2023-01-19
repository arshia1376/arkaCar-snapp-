import '../../sass/page/collapsible/style.scss';
import React, { Component, useState } from 'react';
// component collapsible
const Collapsible = ({title,children}) => {
    // state open and close
    const [open,setOpen] = useState(false);
// function togglepanel open and close
    function togglePanel() {
        setOpen(!open)
    }
    return (
        // start html
    <div>
        {/* title question */}
        <div onClick={togglePanel} className="header1" style={{marginTop:'20px'}}>
   
            {title}</div>
            {/* text collapsible text question */}
        {open ? (
            <div className="content1">
                می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                {children}
            </div>
        ) : null}
    </div>);
    // end html

}
export default Collapsible;