import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({ product }) => {
  return (
    <div className="item">
      <Link to={`/item/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <div className="title">{product.title}</div>
        <div className="price">${product.price}</div>
      </Link>
    </div>
  );
};

export default Item;
