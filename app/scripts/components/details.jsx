import React from 'react';
import Monster from '../components/monster.jsx';
import { Link } from 'react-router';
import SmallBorderBox from '../components/small-border-box.jsx';

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var monster = ['yN', '  GB', '  IaJEz', 'Eqpraz', 'DassC', '  GaH', '    X'];
        var lines = monster.map(function (line) { return (
            <pre className='monsters-typeface'>{line}</pre>
           ); });
        return (
            <SmallBorderBox className="details">
                <header>
                    <Monster lines={monster} />
                </header>

                <h1>HOTMONSTERS.ORG</h1>

                <footer>
                    <p>friday, december 18, 2015</p>
                    <p>monsterdelphia, monstervania</p>
                    <p style={{marginTop: '1em'}}><Link to="costume-ideas">costume ideas</Link></p>
                </footer>
            </SmallBorderBox>
        )
    }
}

export default Details;
