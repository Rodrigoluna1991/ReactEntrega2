import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './index.css';  

const App = ({ searchQuery, setSearchQuery }) => {
  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} />
      
      <Routes>
        <Route path="/" element={<ItemListContainer searchQuery={searchQuery} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer searchQuery={searchQuery} />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;

