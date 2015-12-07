import React from 'react';

class Contributor extends React.Component {

    handleNameChange(event) {
        if (this.props.onChange) {
            this.props.onChange({name: event.target.value});
        }
    }

    handleAgeChange(event) {
        if (this.props.onChange) {
            this.props.onChange({age: event.target.value});
        }
    }

    render() {
        return (
            <div>
                <p>you:</p>
                <p>
                <input
                    placeholder="name"
                    value={this.props.user.name}
                    onChange={this.handleNameChange.bind(this)}
                />
                </p>
                <p>
                <input
                    placeholder="age"
                    value={this.props.user.age}
                    onChange={this.handleAgeChange.bind(this)}
                />
                </p>
            </div>
        );
    }
}


export default Contributor;
