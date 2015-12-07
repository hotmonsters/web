import React from 'react';
import ItemList from '../components/itemList.jsx';
import UserStore from '../stores/userStore';
import UserActions from '../actions/userActions';
import BorderBox from '../components/border-box.jsx';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import Monster from '../components/monster.jsx';
import MonsterEditor from '../components/monster-editor.jsx';
import Guide from '../components/guide.jsx';
import Contributor from '../components/contributor.jsx';
import _ from 'underscore';
import $ from 'jquery';

class Editor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      monster: ['yN', '  GB', '  IaJEz', 'Eqpraz', 'DassC', '  GaH', '    X']
    };

    var updateContributor = _.debounce((function() {
        console.debug("updating contributor");
        UserActions.saveUser(this.state.user);
    }).bind(this), 3000);

    this.handleContributorChange = function(contributor) {
        let newUser = _.extend(this.state.user, contributor);
        this.setState({user: newUser}, updateContributor);
    }
  }

  componentDidMount() {
      this.unsubscribe = UserStore.listen(this.onStatusChange.bind(this));
      UserActions.loadUser();
  }

  handleMonsterUpdate(monster) {
      this.setState({monster: monster});
  }

  onStatusChange(state) {
      this.setState(state);
  }

  render() {
    var contributor = this.state.user ? <Contributor user={this.state.user} onChange={this.handleContributorChange.bind(this)} /> : '';

    return (
        <BorderBox className='costume-editor'>
            <header className="ribbon-header">
                <div className="ribbon-wrapper">
                    <div className="ribbon-front">
                        <div className="text">
                            edit costume
                            <Link className="add-button" to="costume-ideas">
                                <FontAwesome
                                    name='arrow-left'
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
                <div className="top-part">
                    <div className="preview">
                        <Monster lines={this.state.monster} />
                    </div>
                    <span style={{width: '20px'}} />
                    <div className="editor">
                        <MonsterEditor onMonsterUpdate={this.handleMonsterUpdate.bind(this)} lines={this.state.monster} plaintext />
                    </div>
                    <span style={{width: '20px'}} />
                    <div className="contributor">
                        {contributor}
                    </div>
                </div>
                <Guide />
            </article>
        </BorderBox>
    );
  }
}

export default Editor;
