import ItemList from './components/ItemList';
import Admin from './components/Admin';
import React, { useState, createContext, useEffect } from 'react';
import Basket from './components/Basket';
import { Checkout } from './components/Checkout';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Login from './components/Login';
import AddItem from './components/AddItem';
import EditItems from './components/EditItem';

export const BasketContext = createContext()
export const SetBasketContext = createContext()

function App() {

  const [basket, setBasket] = useState([])
  const [loginText, setLoginText] = useState("Login")

  useEffect(() => {
    const url = window.location.href
    if(url.includes("token=")) {
      const token = url.substring(url.indexOf("token=") + 6)
      localStorage.setItem("JWT_TOKEN", token)
    }
    if(localStorage.getItem('JWT_TOKEN')) {
      setLoginText("Logout")
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("JWT_TOKEN")
  }

  return (

      <div className="App">
        <BasketContext.Provider value={basket}>
          <SetBasketContext.Provider value={setBasket}>
    
              <BrowserRouter>
              <div id="header">
                <Link to="/"> <div>Home</div> </Link>
                <div>Categories</div>
                <div>Contact</div>
                <Link to="/basket"> <div>Basket</div> </Link>
                {localStorage.getItem("JWT_TOKEN") != undefined ? <a href="/" onClick={logout}>{loginText}</a> : <Link to="/login"> <div>{loginText}</div> </Link>}
              </div>
              
              <Routes>
                <Route path="/" exact element={<ItemList/>} />
                <Route path="/basket" element={<Basket/>} />
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/admin/add-item" element={<AddItem/>}/>
                <Route path="/admin/edit-item/:id" element={<EditItems/>}/>
                <Route path="*" element={<div style={{maring: "auto", fontSize: "3em", color: "red", width: "100%", textAlign: "center"}}>404</div>}/>
                
              </Routes>
            </BrowserRouter>

          </SetBasketContext.Provider>
        </BasketContext.Provider>
      </div>
  );
}

export default App;
