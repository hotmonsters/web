import React from 'react';

class Monster extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        var style = {
            fontFamily: 'monsters',
            letterSpacing: '-1px',
            lineHeight: '100%',
            margin: '0px',
            textAlign: 'left'
        };

        var lines = this.props.lines.map(function (line, index) {
            return (
                <pre key={index} style={style}>{line}</pre>
            );
        });

        var classNames = ['monster', 'no-select'];
        if (this.props.className) {
          classNames.push(this.props.className);
        }

        return (
          <div className={classNames.join(' ')}>
            <div>
                {lines}
            </div>
          </div>
        );
    }
}

export default Monster;
