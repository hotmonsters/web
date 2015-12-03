import React from 'react';
import Monster from '../components/monster.jsx';
import { Link } from 'react-router';
import BorderBox from '../components/border-box.jsx';

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
            <div className="fixed-aspect-ratio-container">
                <div className="fixed-aspect-ratio">
                    <BorderBox className="details">
                        <header>
                            <Monster lines={monster} />
                        </header>

                        <h1>HOTMONSTERS.ORG</h1>

                        <footer>
                            <p>friday, december 18, 2015</p>
                            <p>monsterdelphia, monstervania</p>
                            <p style={{marginTop: '1em'}}><Link to="costume-ideas">costume ideas</Link></p>
                        </footer>
                    </BorderBox>
                </div>
            </div>
        )
    }
}

export default Details;
