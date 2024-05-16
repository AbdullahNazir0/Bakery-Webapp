import React from "react"

const LoginPage = () => {
	return (
		<>
			<section className="h-screen bg-white">
				<h1 className="px-14 py-12 text-red-600 text-7xl font-extrabold text-left">
					Login
				</h1>
				<div className="mt-8 h-60 container text-gray-100 flex flex-col justify-center items-center">
					<form
						action="#"
						method="get"
						className="w-96 p-20 bg-red-600 gap-5 flex flex-col justify-between items-center rounded-lg">
						<div className="username-div gap-2 flex flex-col justify-center items-start">
							<label htmlFor="username">Username:</label>
							<input
								className="rounded bg-gray-100 text-black"
								type="text"
								id="username"
								placeholder="username"
								required
							/>
						</div>
						<div className="password-div gap-2 flex flex-col justify-center items-start">
							<label htmlFor="password">Password:</label>
							<input
								className="rounded bg-gray-100 text-black"
								type="password"
								id="password"
								placeholder="password"
								required
							/>
						</div>
						<button
							type="submit"
							className="h-8 w-16 bg-gray-100 text-red-600 font-bold rounded-md">
							Login
						</button>
					</form>
				</div>
			</section>
		</>
	)
}

export default LoginPage
