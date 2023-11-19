import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Home/Banner";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Banner />
			<About />
			<Portfolio />
		</>
	);
};

export default HomePage;
