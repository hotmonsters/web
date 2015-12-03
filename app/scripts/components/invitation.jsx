import React from 'react';
import BorderBox from '../components/border-box.jsx';

class Invitation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fixed-aspect-ratio-container">
                <div className="fixed-aspect-ratio">
                    <BorderBox thickBorder className='invitation'>
                    </BorderBox>
                </div>
            </div>
        )
    }
}

export default Invitation;
