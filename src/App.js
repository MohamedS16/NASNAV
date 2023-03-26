import './styling/Nav.scss';
import { Nav } from './pages/Nav';
import { Snav } from './pages/Snav';
import { Tnav } from './pages/Tnav';
import { Fnav } from './pages/Fnav';
import Item from './pages/Item';
import { Footer } from './pages/Footer';
import Cart from './pages/Cart';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
const LazySmimilar = React.lazy(()=>import('./pages/Similar'))

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
        <Route path='/NASNAV' element={<Item />}>
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
      <React.Suspense fallback='Loading..'>
      <LazySmimilar />
      </React.Suspense>
      <Footer />      
    </div>
  );
}

export default App;
