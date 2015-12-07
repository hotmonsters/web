import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container';
import GoogleAnalytics from 'react-g-analytics';
import Footer from '../components/footer.jsx'
import config from '../config.js';

class RouteCSSTransitionGroup extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      previousPathname: null
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.location.pathname !== this.context.location.pathname) {
      this.setState({ previousPathname: this.context.location.pathname })
    }
  }

  render() {
    var children = this.props.children;
    var props = this.props;
    let { previousPathname } = this.state;
    return (
      <ReactCSSTransitionGroup {...props}>
        <StaticContainer
          key={previousPathname || this.context.location.pathname}
          shouldUpdate={true}
        >
          {children}
        </StaticContainer>
      </ReactCSSTransitionGroup>
    )
  }

  componentDidUpdate() {
    if (this.state.previousPathname) {
      this.setState({ previousPathname: null })
    }
  }
}

RouteCSSTransitionGroup.contextTypes = {
    location: React.PropTypes.object
}

const App = (props) => {
    var googleAnalytics;
    if (config.googleAnalytics) {
        googleAnalytics = (
            <GoogleAnalytics id={config.googleAnalytics} />
        );
    } else {
        googleAnalytics = '';
    }
    return (
            /*
        <RouteCSSTransitionGroup
          component="div" transitionName="example" className="content"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >*/
        <div className="content">
          {googleAnalytics}
          {props.children}
        </div>
    );
};

export default App;
