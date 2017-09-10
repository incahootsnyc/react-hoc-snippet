import React from 'react';

/*
* A List Item component
*/

class ListItem extends React.Component {

  render () {
    const {
      name
    } = this.props;

    return (
      <div>
        <span>{name}</span>
      </div>
    );
  }
}

export default ListItem;