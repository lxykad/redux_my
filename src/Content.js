import React, { Component } from 'react';
import { connect } from 'react-redux'

import ThemeSwitch from './ThemeSwitch'

class Content extends Component{

   handSwitchColor(color){
        alert(color)
   }

    render(){
        return(
            <div>
                <div>content</div>
                <ThemeSwitch onSwitchColor={this.handSwitchColor.bind(this)}/>
            </div>
        )
    }
}

export default Content;