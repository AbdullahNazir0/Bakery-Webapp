import React from "react"

const Section = (props) => {
	return (
		<>
			<section
				className={`${props.backgroundColor} px-14 py-24 h-screen flex-col justify-center items-center`}>
				<h1 className={`font-extrabold py-6 text-7xl ${props.textColor}`}>
					{props.headingContent}
				</h1>
				<h3
					className={`py-6 ${props.subHeadingSize} ${props.textColor} leading-tight font-semibold`}>
					{props.subHeadingContent}
				</h3>
			</section>
		</>
	)
}

export default Section
