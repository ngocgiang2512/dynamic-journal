import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import reducer from './reducers'
import MainContainer from './Components/MainContainer'
import './assets/style/style.css'
import injectTapEventPlugin from 'react-tap-event-plugin'

import test1 from './Components/test1'
import test2 from './Components/test2'
import Main from './Components/Main'
import App from './Components/App'

injectTapEventPlugin();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <MainContainer>
      <Router>
        <div>
           <h2>Welcome to React Router Tutorial</h2>
           <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/test2'}>Login</Link></li>
           </ul>
           <hr />
           
           <Switch>
              <Route exact path='/' component={test1} />
              <Route exact path='/test2' component={test2} />
           </Switch>
        </div>
      </Router>
    </MainContainer>
  </Provider>,
  document.getElementById('root')
)
