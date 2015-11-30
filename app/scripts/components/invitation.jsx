import React from 'react';

class Invitation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="invitation-wrapper">
                <img className="invitation" src="/images/drunk_winkolina.jpg" />
            </div>
        )
    }
}

export default Invitation;
