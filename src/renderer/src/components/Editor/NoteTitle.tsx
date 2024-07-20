import { RootState } from "@renderer/store";
import { toggleNoteInfoModal } from "@renderer/store/modalsSlice";
import { formatNoteName } from "@renderer/utils";
import { useDispatch, useSelector } from "react-redux";

const NoteTitle = (): JSX.Element => {
	const { currentNote } = useSelector((state: RootState) => state.notes);
	const dispatch = useDispatch();

	return (
		<div className="w-full border-b-2 border-neutral-700 h-[8dvh] flex gap-4 items-center px-4">
			<h1 className="text-3xl font-bold outline-none lg:text-5xl">
				{formatNoteName(currentNote?.name || "")}
			</h1>
			<button
				onClick={() => dispatch(toggleNoteInfoModal())}
				className="rounded-none btn btn-sm btn-square text-neutral-700 btn-ghost hover:bg-neutral-800 no-animation"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width={24}
					height={24}
					color={"currentColor"}
					fill={"none"}
				>
					<path
						d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
						stroke="currentColor"
						strokeWidth="1.5"
					/>
					<path
						d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M11.992 8H12.001"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default NoteTitle;
