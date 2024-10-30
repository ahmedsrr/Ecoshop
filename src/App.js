import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Produit';
import Cart from './components/Cart';
import Contact from './components/Contact';
const App = () => (
<Router>
<Header />
<Routes>
<Route path="/home" exact element={<Home />} />
<Route path="/products"
component={Product} />
<Route path="/cart" element={<Cart />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Router>
);
export default App;