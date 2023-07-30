import data from "../data/data.js";

const addNoteBtn = document.querySelector("[data-open-modal]");
const backdrop = document.querySelector("[data-modal-backdrop]");
const closeModalBtn = document.querySelector("[data-close-modal]");
const closeAndSaveModalBtn = document.querySelector("[data-close-and-save-modal]");

const titleEl = document.querySelector("[name='title']");
const categoryOptionSelectedEl = document.querySelector("option:checked");
const contentEl = document.querySelector("[name='content']");

closeModalBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
addNoteBtn.addEventListener("click", toggleModal);
closeAndSaveModalBtn.addEventListener("click", toggleModal);

function toggleModal(e) {
	e.preventDefault();
	if (e.currentTarget === closeAndSaveModalBtn) {
		data.push({
			name: titleEl.value,
			created: new Date("2024-10-12"),
			category: categoryOptionSelectedEl.textContent,
			content: contentEl.value,
		});
	}

	if (
		e.target === addNoteBtn ||
		e.target === backdrop ||
		e.currentTarget === closeModalBtn ||
		e.currentTarget === closeAndSaveModalBtn
	) {
		document.body.classList.toggle("data-open-modal");
		backdrop.classList.toggle("is-hidden");
	}
}
