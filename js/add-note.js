import data from "../data/data.js";
import refs from "../utils/refs.js";
import { cardMarkup } from "./card-markup.js";

const { notesTable, noteContent, noteCategoryOptions, noteTitle, noteForm } = refs;

export function addNote() {
	try {
		const note = {
			id: idGenerate(),
			name: noteTitle.value,
			created: Date.now(),
			category: noteCategoryOptions.selectedOptions[0].textContent,
			content: noteContent.value,
		};
		data.push(note);
		notesTable.insertAdjacentHTML("beforeend", cardMarkup(data[data.length - 1]));
	} catch (error) {
		console.error(error);
	} finally {
		noteForm.reset();
	}
}

function idGenerate() {
	const id = Math.floor(Math.random() * 100001);

	if (data.find((el) => el.id === id)) {
		idGenerate();
	} else {
		return id;
	}
}
