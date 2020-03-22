import React from "react";
import HeroArea from "../../components/hero-area/HeroArea";
import Products from "../../components/products/Products";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
	return (
		<div className="home-page-wrapper">
			<HeroArea />
			<Products />
			<Services />
			<Footer />
		</div>
	);
};

export default HomePage;
