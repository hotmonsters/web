import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import StaticContainer from 'react-static-container';
import Footer from '../components/footer.jsx'

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
    return (
        <RouteCSSTransitionGroup
          component="div" transitionName="example" className="content"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}
        >
          {props.children}
        </RouteCSSTransitionGroup>
    );
};

export default App;
