import React, {Component} from 'react';


/*
* state 要修改的对象
*
* */
class Store extends Component {

    appState = {

        title: {
            text: 'React.js 小书',
            color: 'red',
        },
        content: {
            text: 'React.js 小书内容',
            color: 'blue'
        }
    }

    static createStore(state, stateChanger) {

        const getState = () => state
        const dispatch = (action) => stateChanger(state, action)

        return {getState, dispatch}
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