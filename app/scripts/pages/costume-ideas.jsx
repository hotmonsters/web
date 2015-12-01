import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import SmallBorderBox from '../components/small-border-box.jsx';

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
        <SmallBorderBox className='costume-ideas'>
            <article>
                <main style={{width: '70%'}}>
                    <ItemList {...this.state} />
                </main>
                <aside style={{width: '30%'}}>
                    hello
                </aside>
            </article>
        </SmallBorderBox>
    );
  }
}

export default CostumeIdeas;
