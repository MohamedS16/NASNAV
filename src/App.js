import './styling/Nav.scss';
import { Nav } from './pages/Nav';
import { Snav } from './pages/Snav';
import { Tnav } from './pages/Tnav';
import { Fnav } from './pages/Fnav';
import Item from './pages/Item';
import { Footer } from './pages/Footer';
import { Similar } from './pages/Similar';
import Cart from './pages/Cart';
import React from 'react';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Snav />
        <Tnav />
        <Fnav />
      </header>
<Routes>
        <Route path='/' element={<Item />}>
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>

      <Similar />
      <Footer />      
    </div>
  );
}

export default App;
