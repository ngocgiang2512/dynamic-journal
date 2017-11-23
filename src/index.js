import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import reducer from './reducers'
import DynamicJournalContainer from './Components/DynamicJournalContainer'
import ConversationsContainer from './Components/ConversationsContainer'
import './assets/style/style.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={DynamicJournalContainer}/>
      <Route path="/conversations" component={ConversationsContainer}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
