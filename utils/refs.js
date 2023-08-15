const refs = {
	notesTable: document.querySelector("[data-main-table]"),
	noteForm: document.querySelector("form"),
	noteTitle: document.querySelector("[name='title']"),
	noteCategoryOptions: document.querySelector("[name='category']"),
	noteContent: document.querySelector("[name='content']"),
	//modal refs
	addNoteBtn: document.querySelector("[data-open-modal]"),
	backdrop: document.querySelector("[data-modal-backdrop]"),
	XBtn: document.querySelector("[data-close-modal]"),
	closeAndSaveModalBtn: document.querySelector("[data-close-and-save-modal]"),
};

export default refs;
