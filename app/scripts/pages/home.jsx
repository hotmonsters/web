import React from 'react';
import ReactDOM from 'react-dom';
import Swipeable from 'react-swipeable';
import Invitation from '../components/invitation.jsx';
import ScrollAffordance from '../components/scrollAffordance.jsx';
import $ from 'jquery';
import _ from 'underscore';


class Home extends React.Component {
  constructor(props) {
      super(props);
      this.handleScroll = _.throttle(function (e) {
          var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);

          if (delta < 0) {
              this.handleScrollDown();
          }
      }, 1000).bind(this);
  }

  componentDidMount() {
      $('html').on('mousewheel DOMMouseScroll', this.handleScroll);
  }

  componentWillUnmount() {
      $('html').off('mousewheel DOMMouseScroll', this.handleScroll);
  }

  handleScrollDown() {
    this.context.history.pushState(null, 'details');
  }

  render() {
    return (
        <Swipeable className="invitation-page page" onSwipingUp={this.handleScrollDown.bind(this)}>
            <Invitation ref="invitation" />
            <ScrollAffordance onClick={this.handleScrollDown.bind(this)} />
        </Swipeable>
    );
  }
}

Home.contextTypes = {
  history: React.PropTypes.object.isRequired
};

export default Home;
