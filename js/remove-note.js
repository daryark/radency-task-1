import { listen } from "./toggle-modal.js";
import refs from "../utils/refs.js";

const { notesTable } = refs;

listen(notesTable, removeNoteHandler);

function removeNoteHandler(e) {
	if (e.target.classList.contains("fa-trash")) {
		if (window.confirm("Confirm delete?")) {
			document.getElementById(`${e.target.closest("[data-row]").id}`).remove();
		} else {
			return;
		}
	}
}
