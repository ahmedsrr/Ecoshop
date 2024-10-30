import React from 'react';
const Produit = ({ product }) => (
<div>
<h2>{product.title}</h2>
<p>{product.description}</p>
<span>{product.price} €</span>
</div>
);
export default Produit;