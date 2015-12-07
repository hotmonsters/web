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
                          className='packery'
                          options={{
                          }}
                      >
                          {items}
                      </Packery>
                      <div className='packery-fallback'>
                          {items}
                      </div>
                  </div>
                )
              }
          })()}
          <footer>
              <Link to="details">go back</Link>
          </footer>
        </div>
      );
    }
}

export default ItemList;
