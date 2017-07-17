import React from 'react';
import Header from './components/header';
import FriendsContainer from './components/friendsContainer';

class App extends React.Component {
  componentDidMount(){
    console.log('Well it did mount');
    let numArr = [1,12,23];
    let newArr = numArr.map( (num) => num + 10 );
    console.log(newArr);
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <FriendsContainer />
        </main>
      </div>
    )
  }
}

export default App;