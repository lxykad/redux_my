import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Store from './store/Store'

/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

/*
* state 被修改的对象
* stateChanger 描述数据变化的函数
* */
function createStore(state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)

    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach(listener => listener())
    }
    return {getState, dispatch, subscribe}
}

/*
* 专门负责数据的 函数
* state 被修改的对象
* action 修改的值的对象
* */
function stateChanger(state, action) {

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


let store = createStore(appState, stateChanger);
store.subscribe(()=>renderApp(store.getState()))


store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '修改后的title'})

// 把新的数据渲染到页面上
//renderApp(store.getState())
