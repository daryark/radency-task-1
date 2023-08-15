import { openEditModal } from "./edit-note.js";
import { saveNoteHandler } from "./save-note-in-modal.js";
import refs from "../utils/refs.js";

const {
	addNoteBtn,
	backdrop,
	notesTable,
	closeAndSaveModalBtn,
	XBtn,
	noteForm,
	noteTitle,
	noteContent,
} = refs;

listen(addNoteBtn);
listen(backdrop);
listen(closeAndSaveModalBtn, saveNoteHandler);

export function listen(el, fn = toggleModal) {
	el.addEventListener("click", fn);
}

export function toggleModal(e) {
	if (
		//don't close modal if somewhere clicked, not targeted btns
		document.body.classList.contains("[data-open-modal]") &&
		e.target !== backdrop &&
		e.target !== closeAndSaveModalBtn &&
		e.target !== XBtn
	)
		return;

	if (
		document.body.classList.contains("[data-open-modal]") &&
		e.target !== closeAndSaveModalBtn &&
		(noteContent.value || noteTitle.value)
	) {
		if (window.confirm("Data won't be saved if you close! Continue?")) {
			noteForm.reset();
		} else {
			return;
		}
	}
	document.body.classList.toggle("[data-open-modal]");
	backdrop.classList.toggle("is-hidden");
}
