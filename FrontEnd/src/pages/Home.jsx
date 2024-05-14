import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"

const HomePage = () => {
	return (
		<>
			<div className="bg-red-600 px-14 py-24 h-screen flex-col justify-center items-center">
				<Heading color="text-gray-100" content="Kashmir Bakers and Sweets" />
				<SubHeading
					color="text-gray-100"
					size="text-6xl"
					content="Your one-stop bakery for all your cravings, right in the heart of town!"
				/>
			</div>
		</>
	)
}

export default HomePage
