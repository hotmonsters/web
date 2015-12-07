import React from 'react';

class MonsterEditor extends React.Component {
    handleChange(event, index) {
        let newLines = this.props.lines;
        newLines[index] = event.target.value;
        this.props.onMonsterUpdate(newLines);
    }

    removeRow() {
        this.props.onMonsterUpdate(this.props.lines.slice(0, -1));
    }

    addRow() {
        this.props.onMonsterUpdate(this.props.lines.concat(['']))
    }

    render() {
        let makeHandleChange = function(index) {
            return function(event) {
                this.handleChange(event, index);
            }.bind(this);
        }.bind(this);

        let inputSize = Math.max.apply(
                null,
                this.props.lines.map(line => line.length)
        );

        var className = '';
        if (this.props.plaintext) {
            className = 'plaintext';
        }

        let lines = this.props.lines.map(function(line, index) {
            return (
                <input
                    className={className}
                    size={inputSize}
                    ref={index}
                    onChange={makeHandleChange(index)}
                    key={index}
                    value={line}
                    />
            );
        });
        return (
            <div className='monster-editor'>
                <button onClick={this.removeRow.bind(this)}>-</button>
                <button onClick={this.addRow.bind(this)}>+</button>
                {lines}
            </div>
        );
    }
}

export default MonsterEditor;
