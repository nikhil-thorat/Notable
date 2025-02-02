import { RootState } from "@renderer/store";
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OpenNotes from "../OpenNotes";
import { getExtensions } from "./EditorExtensions";
import CustomBubbleMenu from "./Menus/CustomBubbleMenu";
import CustomFloatingMenu from "./Menus/CustomFloatingMenu";
import SavingIndicator from "./SavingIndicator";

const Editor = (): JSX.Element => {
	const { currentNote } = useSelector((state: RootState) => state.notes);
	const [editorContent, setEditorContent] = useState<string | null>(null);
	const [saving, setSaving] = useState<boolean>(false);

	const editor = useEditor({
		extensions: getExtensions(),
		content: "",
		autofocus: true,
		editorProps: {
			attributes: {
				class: "outline-none prose prose-2xl prose-neutral text-white",
			},
		},
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			setEditorContent(html);
		},
	});

	useEffect(() => {
		if (!currentNote || !editorContent) return;

		setSaving(true);
		const saveNote = setTimeout(async () => {
			const updatedNote = await window.api.writeNote(currentNote?.name, editorContent);
			setEditorContent(updatedNote.content);
			setSaving(false);
		}, 1000);

		return (): void => {
			clearTimeout(saveNote);
		};
	}, [editorContent]);

	useEffect(() => {
		editor?.commands.setContent(currentNote?.content || "");
	}, [currentNote]);

	if (!editor || !currentNote) return <OpenNotes />;

	return (
		<section className="w-full p-4 overflow-y-scroll h-fit max-h-[92dvh] space-y-4">
			<EditorContent editor={editor}>
				<span>
					<FloatingMenu editor={editor}>
						<CustomFloatingMenu editor={editor} />
					</FloatingMenu>
				</span>
				<BubbleMenu editor={editor}>
					<CustomBubbleMenu editor={editor} />
				</BubbleMenu>
			</EditorContent>
			<SavingIndicator saving={saving} />
		</section>
	);
};

export default Editor;
