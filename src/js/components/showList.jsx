import React from 'react';
import propTypes from 'prop-types';

class ShowList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {
              this.props.names.map(function(friend, index){
                return <li key={index}> {
                            friend
                        } </li>;
          })}
        </ul>
      </div>
    )
  }
}

ShowList.propTypes = {
    names: propTypes.array.isRequired
};


export default ShowList;