import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => (
<nav>
<Link to="/Home">Accueil</Link>
<Link to="/Produit">Produits</Link>
<Link to="/cart">Panier</Link>
<Link to="/contact">Contact</Link>
</nav>
);
export default Header;
