import React from 'react';
import {Link} from 'react-router-dom';
import './ProductTile.css';

export default function ProductTile(props){
  let {product} = props;
  return (
    <div className="prod-tile">
      <Link to={`/product/${product.id}`}><h2>{product.title}</h2></Link>
      <p>{product.description}</p>
      <h5>${product.price}</h5>
      <button >Add To Cart</button>
    </div>
  )
}