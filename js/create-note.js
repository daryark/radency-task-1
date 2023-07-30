import data from "../data/data.js";

const saveBtn = document.querySelector(".save-btn");
console.log(saveBtn);
saveBtn.addEventListener("click", addNote);

console.log("hello");
function addNote(e) {
	// e.preventDefault;

	data.push({
		name: "new task",
		created: new Date("10-10-2025"),
		category: "Task",
		content: "blablabla",
	});
	console.log(data);
	setTimeout(() => {
		window.location.href = "./index.html";
	}, 2000);
	console.log(e.target.innerText);
}
