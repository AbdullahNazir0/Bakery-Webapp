import React, { useState, useEffect } from "react"
import Card from "../components/Card"

const ItemsPage = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch("http://localhost:3000/items")
				const data = await response.json()
				console.log("Data from API:", data)
				setItems(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchItems()
	}, [])

	return (
		<>
			<h1 className="font-extrabold px-20 pt-20 pb-12 text-7xl text-red-600">
				Items
			</h1>
			<div className="min-h-screen flex justify-evenly items-center flex-wrap overflow-hidden">
				{items ? (
					items.map((item) => <Card key={item._id} {...item} />)
				) : (
					<h2>No Items Found</h2>
				)}
			</div>
		</>
	)
}

export default ItemsPage
