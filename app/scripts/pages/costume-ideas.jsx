import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import BorderBox from '../components/border-box.jsx';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class CostumeIdeas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    this.unsubscribe = ItemStore.listen(this.onStatusChange.bind(this));
    ItemActions.loadItems();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onStatusChange(state) {
    this.setState(state);
  }

  render() {
    return (
        <BorderBox className='costume-ideas'>
            <header className='ribbon-header'>
                <div className="ribbon-wrapper">
                    <div className="ribbon-front">
                        <div className="text">
                            costume ideas
                            <Link className="add-button" to="editor">
                                <FontAwesome
                                    name='plus'
                                    />
                            </Link>
                        </div>
                    </div>
                    <div className="ribbon-edge-topleft"></div>
                    <div className="ribbon-edge-topright"></div>
                    <div className="ribbon-edge-bottomleft"></div>
                    <div className="ribbon-edge-bottomright"></div>
                    <div className="ribbon-back-left"></div>
                    <div className="ribbon-back-right"></div>
                </div>
            </header>
            <article>
                <ItemList {...this.state} />
                <footer>
                    <Link to="details">go back</Link>
                </footer>
            </article>
        </BorderBox>
    );
  }
}

export default CostumeIdeas;
