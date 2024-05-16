import React from "react"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import ItemsPage from "./pages/Items"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import LoginPage from "./pages/Login"
import Footer from "./components/Footer"

const App = () => {
	return (
		<>
			<Header />
			<HomePage />
			<ItemsPage />
			<div className="h-1 border-t-2"></div>
			<AboutPage />
			<div className="h-1 border-t-2"></div>
			<ContactPage />
			<div className="h-1 border-t-2"></div>
			<LoginPage />
			<Footer />
		</>
	)
}

export default App
