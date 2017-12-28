import React, {Component} from 'react';


/*
* state 要修改的对象
*
* */
class Store extends Component {

    static createStore(state, stateChanger) {

        const dispatch = (action) => stateChanger(state, action)
        return {state, dispatch}
    }


    stateChanger(state, action) {

        switch (action.type) {
            case 'UPDATE_TITLE_TEXT':
                state.title.text = action.text
                break
            case 'UPDATE_TITLE_COLOR':
                state.title.color = action.color
                break
            default:
                break
        }
    }

}

export default Store;