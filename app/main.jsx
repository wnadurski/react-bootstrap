import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import { logger } from 'redux-logger'

import "./styles/main.scss"

const Test = (props) => {
    return <h1>Hello Worlds </h1>
}

const middleware = [
    logger,
]

const store = createStore(
    combineReducers({
    }),
    applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Test}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)