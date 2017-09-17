import React from 'react';
import axios from 'axios';
import config from '../config';

const withRatings = (Component) => {
  class RatedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.getRatings = this.getRatings.bind(this);
      this.clearState = this.clearState.bind(this);

      this.state = {
        itemsToQuery: [],
        timeout: null
      };
    }

    clearState() {
      clearTimeout(this.state.timeout);
      this.state.timeout = null;
      this.setState({ itemsToQuery: [] });
    }

    getRatings(itemId) {
      this.state.itemsToQuery.push(itemId);
      clearTimeout(this.state.timeout);

      this.state.timeout = setTimeout(() => {
        axios.get(config.localServer + '/api/ratings/' + this.state.itemsToQuery.join(','))
          .then((response) => {
            // set response to pass down to children
          })
          .catch(error => console.error(error));

        this.clearState();
      }, 100);
    }

    render() {
      return (<Component {...this.props} getRatings={this.getRatings} />);
    }
  }

  return RatedComponent;
};

export default withRatings;
