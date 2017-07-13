import React from 'react';
import Header from './components/header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <h3 className="heading">Hello World!</h3>
        </main>
      </div>
    )
  }
}

export default App;