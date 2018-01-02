//import React from 'react';
import './index.css';


import {createStore} from 'redux'

const cautionAction = {
    type: 'caution',
    text: 'caution text'

};

const goAction = {
    type: 'go',
    text: 'go text'
};

const stopAction = {
    type: 'stop',
    text: 'stop text'
}


function renderApp(action) {
    renderTitle(goAction.text)
    renderContent(goAction.text)
}

function renderTitle(title) {
    let titleDom = document.getElementById('title');
    titleDom.innerHTML = title.text
    titleDom.style.color = title.color
}

function renderContent(content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

var createGoAction = (text) => {
    return {
        type: 'go',
        text: text
    }
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'go':
            state = action.text
            break;
        case 'stop':
            state = action.text
        case 'caution':
            state = action.text
            break;
        default :
            return state = ''
            break
    }
    let titleDom = document.getElementById('title');
    titleDom.innerHTML = state
    return state;
}

let store = createStore(reducer);
store.dispatch(createGoAction('55555'))
store.subscribe(()=>{
    console.log('change======sub')
})

