import React from 'react';
import ListItem from './ListItem';

/**
* A List Component container.
*/
class ListContainer extends React.Component {

  render() {
    const listItems = this.props.data.map(item => (
      <ListItem {...item} />
    ));
    return (
      <div>{listItems}</div>
    );
  }

}

export default ListContainer;