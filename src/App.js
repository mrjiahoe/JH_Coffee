import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products/Products.js";
import { productData } from "./components/Products/data";
import Feature from "./components/Feature/Feature.js";
import Footer from "./components/Footer/Footer.js";
import Hero2 from "./components/Hero/Hero2";
import Navbar from "./components/Navbar/Navbar";
import { SliderData } from "./Data/SliderData";
import Sidebar2 from "./components/Sidebar/Sidebar2";
import { GlobalStyles } from "./GlobalStyles";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Router>
			<GlobalStyles />
			<Navbar toggle={toggle} />
			<Hero2 slides={SliderData} />
			<Sidebar2 isOpen={isOpen} toggle={toggle} />

			<Hero />
			<Feature />
			<Products heading="Drink Item" data={productData} />
			<Footer />
		</Router>
	);
}

export default App;
