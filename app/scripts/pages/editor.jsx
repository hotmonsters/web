import React from 'react';
import ItemList from '../components/itemList.jsx';
import ItemStore from '../stores/itemStore';
import ItemActions from '../actions/itemActions';
import SmallBorderBox from '../components/small-border-box.jsx';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import Monster from '../components/monster.jsx';
import MonsterEditor from '../components/monster-editor.jsx';

class Editor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      monster: ['yN', '  GB', '  IaJEz', 'Eqpraz', 'DassC', '  GaH', '    X']
    };
  }

  handleMonsterUpdate(monster) {
      this.setState({monster: monster});
  }

  render() {
    return (
        <SmallBorderBox className='costume-editor'>
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
                <div className="preview">
                    <Monster lines={this.state.monster} />
                </div>
                <div className="editor">
                    <MonsterEditor onMonsterUpdate={this.handleMonsterUpdate.bind(this)} lines={this.state.monster} />
                </div>
            </article>
        </SmallBorderBox>
    );
  }
}

export default Editor;
