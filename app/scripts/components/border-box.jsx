import React from 'react';
import classNames from 'classnames';

class BorderBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var wrapperStyle = {
        };
        var style = {
        };

        var cx = [
            this.props.className+'-wrapper',
            'border-box-wrapper',
            {
                'thick': this.props.thickBorder,
            }
        ];

        return (
            <div className={classNames(cx)}>
                <div className={this.props.className}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default BorderBox;
