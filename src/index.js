import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DynamicJournalContainer from './Components/DynamicJournalContainer'
import './assets/style/style.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <DynamicJournalContainer {...store.getState()} />
  </Provider>,
  document.getElementById('root')
)
