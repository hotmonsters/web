import React from 'react';
import ItemList from '../components/itemList.jsx';
import UserStore from '../stores/userStore';
import UserActions from '../actions/userActions';
import BorderBox from '../components/border-box.jsx';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import Monster from '../components/monster.jsx';
import Loader from 'halogen/MoonLoader';
import SavingLoader from 'halogen/PulseLoader';

import MonsterEditor from '../components/monster-editor.jsx';
import Guide from '../components/guide.jsx';
import Contributor from '../components/contributor.jsx';
import _ from 'underscore';
import $ from 'jquery';

class Editor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      monster: {
        lines: []
      },
      loading: true,
      loadingMonster: true,
      monsterSaved: true,
      saving: false,
      savingMonster: false,
    };

    this.handleContributorChange = function(contributor) {
        let newUser = _.extend(this.state.user, contributor);
        this.setState({user: newUser});
    }
  }

  handleSave() {
      UserActions.saveUser(this.state.user);
      UserActions.saveMonster(this.state.monster);
  }

  componentDidMount() {
      this.unsubscribe = UserStore.listen(this.onStatusChange.bind(this));
      UserActions.loadUser();
      UserActions.loadMonster();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleMonsterUpdate(lines) {
      this.setState({monsterSaved: false, monster: {lines: lines}});
  }

  onStatusChange(state) {
      this.setState(state);
  }

  render() {
    var contributor = this.state.user ? <Contributor user={this.state.user} onChange={this.handleContributorChange.bind(this)} /> : '';
    var content;

    if (this.state.loading || this.state.loadingMonster) {
        content = (
            <article className="loading">
                <Loader color="#53195f" />
                <p><em>loading monster parts</em></p>
            </article>
        );
    } else {
        var savingSpinner = (this.state.savingMonster || this.state.saving) ?
            <SavingLoader color="#333" size="6px" /> : '';

        var editor = (
            <MonsterEditor onMonsterUpdate={this.handleMonsterUpdate.bind(this)} lines={this.state.monster.lines} plaintext />
        );


        if (this.state.error && this.state.error.responseJSON['lines']) {
            editor = (
                <MonsterEditor
                    onMonsterUpdate={this.handleMonsterUpdate.bind(this)}
                    lines={this.state.monster.lines}
                    plaintext
                    hasError
                />
            )
        }

        var saveText = 'save';
        if (this.state.monsterSaved) {
            saveText = 'saved!';
        }

        content = (
            <article>
                <div className="top-part">
                    <div className="preview">
                        <Monster lines={this.state.monster.lines} />
                    </div>
                    <span style={{width: '20px'}} />
                    <div className="editor">
                        {editor}
                    </div>
                    <span style={{width: '20px'}} />
                </div>
                <div className="contributor">
                    {contributor}
                    <button
                        className="save btn"
                        onClick={this.handleSave.bind(this)}
                    >
                        {saveText}
                        <span style={{display: 'inline-block'}}>
                            {savingSpinner}
                        </span>
                    </button>
                </div>
                <Guide />
            </article>
        );
    }
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
            {content}
        </BorderBox>
    );
  }
}

export default Editor;
