import React, { Component } from 'react';
import ComponentRegisterDriver from '../register-driver/input-level1';


class registerDriver extends Component {
    
    render() {
        // var step=1;
        // let component;
        // if (step==0) {
        //     component=<ComponentRegisterDriver/>
        // }else{
        //     component= <Inputlevel2/>
        // }
        return (
            <div>
               <ComponentRegisterDriver/>
               
            </div>
        );
    }
}

export default registerDriver;