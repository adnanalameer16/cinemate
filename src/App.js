import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import Register from './components/Register.js'
import { useState } from 'react';

function App() {
  const [isLogin,setIsLogin]=useState(true)
  return (
    <div className="text-center">
      { isLogin ? (<Login setIsLogin={setIsLogin} />) : (<Register setIsLogin={setIsLogin} />) }
    </div>
  );
}

export default App;
