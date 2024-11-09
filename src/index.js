import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");  

  return (
    <div>
      <App searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
