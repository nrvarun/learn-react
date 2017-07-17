
import React from 'react';
import Avatar from './components/avatar';
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
          <Avatar url="https://static.comicvine.com/uploads/scale_small/11/113509/4693444-6164752601-ben_a.jpg" />
        </main>
      </div>
    )
  }
}

export default App;