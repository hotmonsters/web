import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container';
import GoogleAnalytics from 'react-g-analytics';
import Footer from '../components/footer.jsx'
import config from '../config.js';
import { RouteHandler } from 'react-router';

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

class App extends React.Component {
    render() {
        var googleAnalytics;
        if (config.googleAnalytics) {
            googleAnalytics = (
                <GoogleAnalytics id={config.googleAnalytics} />
            );
        } else {
            googleAnalytics = '';
        }


        return (
            <div className="content">
              {googleAnalytics}
              {this.props.children}
            </div>
        );
    }
}

export default App;
