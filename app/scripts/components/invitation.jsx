import React from 'react';

class Invitation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="invitation-wrapper">
                <div className="invitation">
                    <h1>hotmonsters hot diggity!</h1>
                    <p>come see the hottest monsters who know how to party</p>
                    <img src="/images/drunk_winkolina.jpg" />
                </div>
            </div>
        )
    }
}

export default Invitation;
