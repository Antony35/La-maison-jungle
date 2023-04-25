import Banner       from './Banner'
import Cart         from './Cart'
import ShoppingList from './ShoppingList';
import Footer       from './Footer';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <React.StrictMode>
      <header>
        <Banner />
      </header>
      <main className='lmj-body'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.StrictMode>
  );
}

export default App;
