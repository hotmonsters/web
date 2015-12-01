import React from 'react';

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var monster = [
'',
'yN',
'  GB',
'  IaJEz',
'Eqpraz',
'DassC',
'  GaH',
'    X',
''
]
        var lines = monster.map(function (line) { return (
            <pre className='monsters-typeface'>{line}</pre>
           ); });
        return (
            <div className="details-wrapper">
                <div className="details">
                    <header>
                    <h1>HOTMONSTERS.ORG</h1>
                    </header>
                    <div>
                    {lines}
                    </div>
                    <footer>
                    <p>friday, december 18, 2015</p>
                    <p>monsterdelphia, monstervania</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Details;
