import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [id]); 

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.price}</p>
      <p>{product.condition}</p>
    </div>
  );
};

export default ItemDetailContainer;






