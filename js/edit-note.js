import data from "../data/data.js";
import refs from "../utils/refs.js";
import { datesList } from "./card-markup.js";
import { toggleModal } from "./toggle-modal.js";

const { notesTable, closeAndSaveModalBtn, noteTitle, noteContent, noteCategoryOptions } = refs;

notesTable.addEventListener("click", openEditModal);
// fa-pencil
// fa-folder
// fa-trash

export function openEditModal(e) {
	console.dir(e.target);

	if (e.target.classList.contains("fa-pencil")) {
		toggleModal(e);

		//finds closest parent with needed selector
		const id = Number(e.target.closest("[data-row]").id);

		const findEl = data.find((el) => el.id === id);

		closeAndSaveModalBtn.setAttribute("note-id", id); //so to know it's save edited card, not new.

		noteTitle.textContent = findEl.name;
		noteContent.textContent = findEl.content;

		for (let i = 0; i < noteCategoryOptions.length; i += 1) {
			if (noteCategoryOptions[i].textContent === findEl.category) {
				noteCategoryOptions[i].selected = true;
			}
		}
	}
}

export function editNote() {
	try {
		const currId = Number(closeAndSaveModalBtn.getAttribute("note-id"));
		data.map((el) => {
			//el in database of data (data.js file)
			if (el.id === currId) {
				el.name = noteTitle.value;
				el.category = noteCategoryOptions.selectedOptions[0].textContent;
				el.content = noteContent.value;

				notesTable.querySelectorAll("[data-row]").forEach((tr) => {
					if (Number(tr.id) === currId) {
						tr.querySelector("[data-name]").textContent = noteTitle.value;
						tr.querySelector("[data-category]").textContent =
							noteCategoryOptions.selectedOptions[0].textContent;

						tr.querySelector("[data-content]").textContent = noteContent.value;
						tr.querySelector("[data-dates]").textContent = datesList(noteContent.value);
					}
				});
			}
			// return el;
		});
	} catch (error) {
		console.error(error);
	}
}
