import React from 'react';

const App = props => ({
  render() {
    return (
      <div className="App">
        <p>App</p>
        <main>{props.children}</main>
      </div>
    );
  }
});

export default App;
