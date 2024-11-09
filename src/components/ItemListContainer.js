import React, { useEffect, useState } from 'react';
import Item from './Item';
import './ItemListContainer.css'; 
const ItemListContainer = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=zapatillas`);
      const data = await response.json();
      setProducts(data.results);
    };
    fetchProducts();
  }, []);

  return (
    <div className="index">
      <h1>Productos de Zapatillas</h1>
      <div className="item-list-container">
        {products.filter(product => 
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(product => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;


