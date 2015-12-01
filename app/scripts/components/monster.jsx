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

        return (
          <div className={this.props.className + ' no-select'}>
            <div>
                {lines}
            </div>
          </div>
        );
    }
}

export default Monster;
