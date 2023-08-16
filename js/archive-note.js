import data from "../data/data.js";
import refs from "../utils/refs.js";
import { sumTableMarkup } from "./summary-table.js";
import { listen } from "./toggle-modal.js";

const { notesTable } = refs;

listen(notesTable, archiveNoteHandler);

function archiveNoteHandler(e) {
	console.log("go to archive");
	if (e.target.classList.contains("fa-folder")) {
		const id = Number(e.target.closest("[data-row]").id);
		data.map((el) => {
			if (el.id === id) {
				el.archive = !el.archive;
				document.getElementById(`${id}`).remove();
			}
		});

		//make only in one <td> change, when note goes to archive
	}
}
