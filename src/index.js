import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import NavBar from './components/nav_bar'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { fetchCocktails } from './actions'
import { createStore } from 'redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('container')
)
