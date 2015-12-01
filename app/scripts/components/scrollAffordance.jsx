import React from 'react';
import FontAwesome from 'react-fontawesome';

class ScrollAffordance extends React.Component {
  render() {
      var style = {
          color: '#999',
          width: '100%',
          textAlign: 'center',
          height: '0px',
          verticalAlign: 'bottom'
      }
      return (
          <FontAwesome
            name='angle-double-down'
            size='2x'
            style={style}
            />
      );
  }

}

export default ScrollAffordance
