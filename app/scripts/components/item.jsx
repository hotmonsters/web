import React from 'react';
import classNames from 'classnames';
import Monster from '../components/monster.jsx';

class Item extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            hover: false
        };

    }

    handleMouseEnter() {
        this.setState({hover: true});
    }

    handleMouseLeave() {
        this.setState({hover: false});
    }

    render() {
        let cx = [
            'item',
            {
                hover: this.state.hover
            }
        ];

        var overlay;
        if (this.state.hover && this.props.monster.contributor) {
            var contribText = '???';
            if (this.props.monster.contributor.name) {
                contribText = this.props.monster.contributor.name;
            }

            if (this.props.monster.contributor.age) {
                contribText = contribText + ', age ' + this.props.monster.contributor.age;
            }


            overlay = (
                <aside>
                    <em>contributed by:</em>
                    <br />
                    <strong>
                        {contribText}
                    </strong>
                </aside>
            );
        } else {
            overlay = '';
        }

        return (
            <div className={classNames(cx)}
              onMouseEnter={this.handleMouseEnter.bind(this)}
              onMouseLeave={this.handleMouseLeave.bind(this)}>
                <Monster lines={this.props.monster.lines} />
                {overlay}
            </div>
        )

    }
}

export default Item;
