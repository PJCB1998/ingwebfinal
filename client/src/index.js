import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import createCache from '@emotion/cache';
import { CacheProvider } from "@emotion/react";



import App from './App'

import reducers from './reducers'

export const muiCache = createCache({
    'key': 'mui',
    'prepend': true,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
 
        <CacheProvider value={muiCache}>
           <Provider store={store}>    
           <App>

            </App>
            </Provider>
        </CacheProvider>
    ,
    document.getElementById('root'));