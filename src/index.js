import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import {createStore} from 'redux'
import {Provider} from 'react-redux'


/*
* 专门负责数据的 函数
* state 被修改的对象
* action 修改的值的对象
* */
const stateChanger = (action) => {

    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break
        default:
            break
    }
}

function createTitleAction(str) {

    return{
        type:'UPDATE_TITLE_TEXT',
        text:str
    }
}


const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}

function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
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

renderApp(appState)


let store = createStore(stateChanger);

//let action = createTitleAction('555');

//console.log(createTitleAction('555'))
//store.dispatch(createTitleAction('555'))



//store.dispatch(appState,{type: 'UPDATE_TITLE_TEXT', title: 'haha'})
