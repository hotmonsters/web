import React from 'react';
import Item from '../components/item.jsx';

const ItemList = (props) => {
    let items = props.items.map( (item, index) =>
                    <Item key={index} monster={item} />
                ),
      loading = props.loading ? <div className="loading-label">Loading...</div> : '';

    return (
      <div className='costume-ideas-list'>
        {loading}
        {items}
      </div>
    );
};

ItemList.propTypes = {
  loading : React.PropTypes.bool,
  items : React.PropTypes.array
}

export default ItemList;
