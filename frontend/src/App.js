import React, { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import ShoppingList from "./Components/ShoppingList";
import Login from "./Components/Login"
import '../src/Styles/layout.css';
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Home from "./Components/Home"
import { Route, Routes } from "react-router-dom";
import ClientRoute from "./PrivateRoutes/ClientRoute";
//import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
function App() {
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<div>
		<Banner/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/register" element={<Register/>}/>
			    <Route path="/profile" element={
            <ClientRoute>
              <Profile />
            </ClientRoute>
}/>
		       <Route path="/ShoppingList" element={<ShoppingList/>} />
              
		    </Routes>
			<Footer/>
		</div>
	)
}

export default App;
