import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import Invitation from '../components/invitation.jsx';
import Details from '../components/details.jsx';
import {SectionsContainer, Section} from 'react-fullpage';

class Home extends React.Component {

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
    let options = {
        activeClass: 'active',
        anchors: ['invitation', 'details'],
        scrollBar: false,
        navigation: true,
        verticalAlign: true,
        delay: 500,
    };
    return (
      <SectionsContainer {...options}>
        <Section>
            <Invitation />
        </Section>
        <Section>
            <Details />
        </Section>
      </SectionsContainer>
    );
  }
}

export default Home;
