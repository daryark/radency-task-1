import refs from "../utils/refs.js";
import { addNote } from "./add-note.js";
import { editNote } from "./edit-note.js";

const { noteContent, noteCategoryOptions, noteTitle, noteForm, closeAndSaveModalBtn } = refs;

export function saveNoteHandler(e) {
	e.preventDefault();

	if (e.target.hasAttribute("note-id")) {
		console.log("edit");
		editNote();

		closeAndSaveModalBtn.removeAttribute("note-id");

		noteTitle.value = "";
		noteContent.value = "";
		noteCategoryOptions[0].selected = true;
	} else {
		console.log("add");
		addNote();
	}
}
