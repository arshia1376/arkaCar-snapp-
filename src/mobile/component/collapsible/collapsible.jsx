import '../../sass/page/collapsible/style.scss';
import React, { Component, useState } from 'react';
const Collapsible = (props) => {
    
    const [open,setOpen] = useState(false);
    // this.togglePanel = this.togglePanel.bind(this);
    // this.setState({open: !this.state.open})
    function togglePanel() {
        setOpen(!open)
    }
    return (
    <div>
        <div onClick={togglePanel} className="header1">
            سوالات متداول
            {props.title}</div>
        {open ? (
            <div className="content1">
                می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                {props.children}
            </div>
        ) : null}
    </div>);

}
export default Collapsible;