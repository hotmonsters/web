import React from 'react';
import Footer from '../components/footer.jsx'

const App = (props) => {
    return (
      <div>
        <div className="content">
          {props.children}
        </div>
      </div>
    );
};

export default App;
