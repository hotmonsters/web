import React from 'react';
import FontAwesome from 'react-fontawesome';

class ScrollAffordance extends React.Component {
  render() {
      var direction = this.props.direction;
      if (!direction) {
          direction = 'down';
      }

      var style = {
          color: '#999',
          width: '100%',
          textAlign: 'center',
      }
      return (
          <div
              className='scroll-affordance'
              onClick={this.props.onClick}
          >
            <FontAwesome
              name={'angle-double-'+direction}
              size='2x'
              style={style}
              />
          </div>
      );
  }

}

export default ScrollAffordance
