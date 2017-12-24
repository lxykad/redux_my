import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

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

function renderApp(appState){
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(title){
    let titleDom = document.getElementById('title');
    titleDom.innerHTML = title.text
    titleDom.style.color = title.color
}

function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

/*
* 专门负责数据的 function
* */
function dispatch (action) {
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

renderApp(appState)