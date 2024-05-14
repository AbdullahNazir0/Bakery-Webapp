const SubHeading = (props) => {
	return (
		<>
			<h3 className={`py-6 ${props.size} ${props.color} leading-tight font-semibold`}>
				{props.content}
			</h3>
		</>
	)
}

export default SubHeading