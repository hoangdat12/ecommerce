import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { PrivateRoute } from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';

import { Home } from './pages/Home/Home'
import {Detail} from './pages/Detail/Detail'
import {Cart} from './pages/Cart/Cart'
import {Login} from './pages/Login/Login'
import {Category} from './pages/Category/Category'
import {Checkout} from './pages/Checkout/Checkout'

function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/category" element={<Category />} />
                <Route path="/detail" element={<Detail />} />
              </Route>
              <Route path="/person/:login" element={<Login />} />
            </Routes>  
          </AuthProvider>
        </Router>   
    </div>
  );
}

export default App;
