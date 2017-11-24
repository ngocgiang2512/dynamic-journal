import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={DynamicJournalContainer}/>
          <Route path='/conversations' component={ConversationsContainer}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
