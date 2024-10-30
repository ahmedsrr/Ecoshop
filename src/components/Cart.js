import React, { useState } from 'react';

const Cart = () => {
const [cart, setCart] = useState([]);
const addToCart = (product) => {
setCart([...cart, product]);
};
return (
<div>
<h2>Mon Panier</h2>
{cart.map((item, index) => (
<div key={index}>
<span>{item.name} - {item.price} €</
span>
</div>
))}
</div>
);
};
export default Cart;