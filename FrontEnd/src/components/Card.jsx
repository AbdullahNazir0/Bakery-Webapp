import React from "react"

const Card = (props) => {
	return (
		<>
			<div className="cursor-pointer card h-60 w-1/6 border-2 border-red-600 m-12 overflow-hidden">
				<div className="h-1/2 image flex justify-center items-center overflow-hidden">
					<img className="object-cover" src="../../public/item.jpg" alt="" />
				</div>
				<div className=" h-1/2 content flex-col justify-center items-center p-5 border-t-2 bg-red-600 text-white">
					<h5 className="text-2xl font-semibold">{props.name}</h5>
					<p className="truncate">{props.description}</p>
					<p className="font-bold">{props.price}</p>
				</div>
			</div>
		</>
	)
}

export default Card
