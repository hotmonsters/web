import React from 'react';
import Packery_ from 'react-packery-component';
import Item from '../components/item.jsx';

var Packery = Packery_(React);

class ItemList extends React.Component {
    handleClick() {
      this.refs.packery.performLayout();
    }

    onComponentDidMount() {
      let packery = this.refs.packery;
      setTimeout((() => {
          packery.performLayout();
      }), 1000);
    }

    render() {
      let items = this.props.items.map( (item, index) =>
                      <Item key={index} monster={item} />
                  ),
        loading = this.props.loading ? <div className="loading-label">Loading...</div> : '';

      return (
        <div className='costume-ideas-list'>
          {loading}
          {(() => {
             if (!this.props.loading) {
                return (
                  <div>
                      <Packery
                          ref='packery'
                          options={{
                              isOriginLeft: false,
                              isOriginTop: false
                          }}
                      >
                          {items}
                      </Packery>
                  </div>
                )
              }
          })()}

          <button
             onClick={this.handleClick.bind(this)}
             style={{
               position: 'fixed',
               bottom: '0px',
               right: '0px',
             }}
          >
            reload
          </button>
        </div>
      );
    }
}

export default ItemList;
