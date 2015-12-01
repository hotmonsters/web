import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import Invitation from '../components/invitation.jsx';
import Details from '../components/details.jsx';
import {SectionsContainer, Section} from 'react-fullpage';
import ScrollAffordance from '../components/scrollAffordance.jsx';

class Home extends React.Component {


  render() {
    let options = {
        activeClass: 'active',
        anchors: ['invitation', 'details'],
        scrollBar: false,
        navigation: true,
        verticalAlign: true,
        delay: 500,
        arrowNavigation: true,
    };
    return (
      <SectionsContainer {...options}>
        <Section>
            <Invitation />
            <ScrollAffordance />
        </Section>
        <Section>
            <Details />
        </Section>
      </SectionsContainer>
    );
  }
}

export default Home;
