import React from 'react';

class SmallBorderBox extends React.Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            children: React.PropTypes.node,
            className: React.PropTypes.string
        }
    }

    render() {
        var wrapperStyle = {
        };
        var style = {
        };

        var className = [
            this.props.className+'-wrapper',
            'small-border-box-wrapper'
        ].join(' ');

        return (
            <div className={className}>
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default SmallBorderBox;
