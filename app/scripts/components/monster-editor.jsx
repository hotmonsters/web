import React from 'react';

class MonsterEditor extends React.Component {
    handleChange(event, index) {
        let newLines = this.props.lines;
        newLines[index] = event.target.value;
        this.props.onMonsterUpdate(newLines);
    }
    render() {
        console.debug(this.props);
        let makeHandleChange = function(index) {
            return function(event) {
                this.handleChange(event, index);
            }.bind(this);
        }.bind(this);

        let lines = this.props.lines.map(function(line, index) {
            return (
                <input
                    ref={index}
                    onChange={makeHandleChange(index)}
                    key={index}
                    value={line}
                    />
            );
        });
        return (
            <div className='monster-editor'>
                {lines}
            </div>
        );
    }
}

export default MonsterEditor;
