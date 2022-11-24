import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<PrivateRoute element={<Home/>}/>}/>
        <Route path='/login' element={<AuthRoute element={<Login/>}/>}/>
        <Route path='/cart' element={<PrivateRoute element={<Cart/>}/>}/>        
        <Route path='/home' element={<Navigate to='/' replace/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
