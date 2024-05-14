const Heading = (props) => {
	return (
		<>
			<h1 className={`font-extrabold py-6 text-7xl ${props.color}`}>
				{props.content}
			</h1>
		</>
	)
}

export default Heading