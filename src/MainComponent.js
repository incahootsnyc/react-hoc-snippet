import React from 'react';
import { ListContainer, listData } from './list';

class MainComponent extends React.Component {

  render () {
    return (
      <div>
        <ListContainer data={listData} />
      </div>
    );
  }
  
}

export default MainComponent;