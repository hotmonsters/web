import React from 'react';

class Contributor extends React.Component {

    handleNameChange(event) {
        if (this.props.onChange) {
            this.props.onChange({name: event.target.value});
        }
    }

    render() {
        return (
            <div>
                <input
                    ref="contributorName"
                    value={this.props.user.name}
                    onChange={this.handleNameChange.bind(this)}
                />
            </div>
        );
    }
}


export default Contributor;
