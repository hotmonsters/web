import React from 'react';
import BorderBox from '../components/border-box.jsx';

class Invitation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BorderBox thickBorder className='invitation'>
                <img src="/images/drunk_winkolina.jpg" />
            </BorderBox>
        )
    }
}

export default Invitation;
