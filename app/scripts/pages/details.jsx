import React from 'react';
import Swipeable from 'react-swipeable';
import DetailsComponent from '../components/details.jsx';
import ScrollAffordance from '../components/scrollAffordance.jsx';
import $ from 'jquery';
import _ from 'underscore';

class Details extends React.Component {
  constructor (props) {
      super(props);
      this.handleScroll = _.throttle(function (e) {
          var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);

          if (delta > 0) {
              this.handleScrollUp();
          }
      }, 1000).bind(this);
  }

  handleScrollUp() {
    this.context.history.pushState(null, '');
  }

  componentDidMount() {
      $('html').on('mousewheel DOMMouseScroll', this.handleScroll);
  }

  componentWillUnmount() {
      $('html').off('mousewheel DOMMouseScroll', this.handleScroll);
  }

  render() {
    return (
        <Swipeable className="details-page page" onSwipingDown={this.handleScrollUp.bind(this)}>
            <ScrollAffordance direction="up" onClick={this.handleScrollUp.bind(this)} />
            <DetailsComponent />
        </Swipeable>
    );
  }
}

Details.contextTypes = {
  history: React.PropTypes.object.isRequired
};

export default Details;
