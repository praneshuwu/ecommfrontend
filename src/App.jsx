import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';

import Register from './pages/Register';
import Cart from './pages/Cart';
import './app.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Success from './pages/Success';
import { useSelector } from 'react-redux';



const dotenv = require('dotenv');

dotenv.config();


const App = () => {
  const user = useSelector((state)=>state.user?.token);
  
  console.log(user)
  function LoginRoute({ children }) {
    return user ? <Navigate to='/' /> : children;
  }

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route
          path='/login'
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        ></Route>
        <Route
          path='/register'
          element={
            <LoginRoute>
              <Register />
            </LoginRoute>
          }
        ></Route>
        <Route success path='/success' element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
