import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ThemeSwitch extends Component{

    // static PropTypes = {
    //     themeColor: PropTypes.string,
    //     onSwitchColor: PropTypes.func
    // }

    handleSwitchColor (color) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.handleSwitchColor.bind(this,'red')}>Red</button>
                <button onClick={this.handleSwitchColor.bind(this,'blue')}>Blue</button>
            </div>
        )
    }
}

export default ThemeSwitch;