import React from 'react';
import Packery_ from 'react-packery-component';
import Item from '../components/item.jsx';
import Loader from 'halogen/MoonLoader';
import { Link } from 'react-router';

var Packery = Packery_(React);

class ItemList extends React.Component {
    handleClick() {
      this.refs.packery.performLayout();
    }

    componentWillReceiveProps(nextProps) {
      if (this.props.loading && !nextProps.loading) {
          setTimeout((() => {
              let packery = this.refs.packery;
              packery.performLayout();
          }).bind(this), 1000);
      }
    }

    render() {
        console.debug(this.props);
      let items = this.props.items.map( (item, index) =>
                      <Item key={index} monster={item} />
                  ),
        loading = this.props.loading ?
                    <Loader color="#53195f" />
                  : '';

      let classNames = [
          'costume-ideas-list'
          ];

      if (this.props.loading) {
          classNames.push('loading');
      }

      return (
        <div className={classNames.join(' ')}>
          {loading}
          {(() => {
             if (!this.props.loading) {
                return (
                  <div className="block">
                      <Packery
                          ref='packery'
                          options={{
                          }}
                      >
                          {items}
                      </Packery>
                  </div>
                )
              }
          })()}
          <footer>
              <Link to="details">go back</Link>
          </footer>

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
