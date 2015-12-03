import React from 'react';

class Monster extends React.Component {
    constructor (props) {
        super(props);
        this.propTypes = {
            lines: React.PropTypes.arrayOf(React.PropTypes.string),
            className: React.PropTypes.string
        };
    }

    render() {
        var style = {
            fontFamily: 'monsters',
            letterSpacing: '-1px',
            lineHeight: '100%',
            margin: '0px',
            textAlign: 'left'
        };

        var lines = this.props.lines.map(function (line) {
            return (
                <pre style={style}>{line}</pre>
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
