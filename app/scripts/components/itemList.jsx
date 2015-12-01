import React from 'react';
import Monster from '../components/monster.jsx';

const ItemList = (props) => {
    let items = props.items.map( (item, index) =>
                    <Monster className='item' key={index} lines={item} />
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
