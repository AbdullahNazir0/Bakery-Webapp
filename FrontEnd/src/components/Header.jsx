const Header = () => {
	return (
		<>
			<header className="bg-red-600">
				<nav className="h-14 flex items-center justify-between bg-inherit">
					<div className="logo gap-4 px-20 text-white font-extrabold text-3xl">
						<a href="/" className="cursor-pointer">
							KBS
						</a>
					</div>
					<ul className="text-white flex items-center justify-evenly">
						<li className="px-5">
							<a
								href="/"
								className="border-b-2 border-red-600 hover:border-white hover:text-white">
								Home
							</a>
						</li>
						<li className="px-5">
							<a
								href="/items"
								className="border-b-2 border-red-600 hover:border-white hover:text-white">
								Items
							</a>
						</li>
						<li className="px-5">
							<a
								href="/about"
								className="border-b-2 border-red-600 hover:border-white hover:text-white">
								About Us
							</a>
						</li>
						<li className="px-5">
							<a
								href="/contact-us"
								className="border-b-2 border-red-600 hover:border-white hover:text-white">
								Contact Us
							</a>
						</li>
						<li className="px-5">
							<a
								href="/auth"
								className="border-b-2 border-red-600 hover:border-white hover:text-white">
								Login/Signup
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header