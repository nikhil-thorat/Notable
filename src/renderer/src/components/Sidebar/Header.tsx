const Header = (): JSX.Element => {
	return (
		<div className="flex items-center gap-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width={24}
				height={24}
				color={"currentColor"}
				fill={"none"}
			>
				<path
					d="M17 2V4M12 2V4M7 2V4"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.5 13V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V13C20.5 15.8284 20.5 17.2426 19.6213 18.1213C18.7426 19 17.3284 19 14.5 19H9.5C6.67157 19 5.25736 19 4.37868 18.1213C3.5 17.2426 3.5 15.8284 3.5 13Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M3.5 16V9C3.5 6.17157 3.5 4.75736 4.37868 3.87868C5.25736 3 6.67157 3 9.5 3H14.5C17.3284 3 18.7426 3 19.6213 3.87868C20.5 4.75736 20.5 6.17157 20.5 9V16C20.5 18.8284 20.5 20.2426 19.6213 21.1213C18.7426 22 17.3284 22 14.5 22H9.5C6.67157 22 5.25736 22 4.37868 21.1213C3.5 20.2426 3.5 18.8284 3.5 16Z"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M8 15H12M8 10H16"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
			</svg>
			<h1 className="text-2xl font-medium text-white">Notable</h1>
		</div>
	);
};

export default Header;
