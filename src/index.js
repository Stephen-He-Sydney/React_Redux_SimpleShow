import 'babel-polyfill' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './Redux/Reducers/RootReducer';
import { Provider } from 'react-redux'
import App from './Components/App'

const store = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? createStore(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
    : createStore(RootReducer, applyMiddleware(thunk));

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Route
                    path='/'
                    render={props => <App {...props} />}
                />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
