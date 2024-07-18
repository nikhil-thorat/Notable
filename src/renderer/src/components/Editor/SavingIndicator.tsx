const SavingIndicator = ({ saving }: { saving: boolean }): JSX.Element => {
	return (
		<div className="absolute bottom-0 right-0 z-10 ml-auto w-fit">
			{saving ? (
				<span className="flex items-center gap-2 p-2 text-green-300 bg-neutral-800">
					Saving
					<span className="loading loading-spinner loading-sm" />
				</span>
			) : (
				<span className="flex items-center gap-2 p-2 text-green-300 bg-neutral-800">
					Saved
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width={20}
						height={20}
						color={"currentColor"}
						fill={"none"}
					>
						<path
							d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
							stroke="currentColor"
							strokeWidth="1.5"
						/>
						<path
							d="M8 12.5L10.5 15L16 9"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
			)}
		</div>
	);
};

export default SavingIndicator;
