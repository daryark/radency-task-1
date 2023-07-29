import data from "../data/index.js";
import { regex } from "./regex.js";

function cardMarkup(data) {
	return data.map((el) => {
		let dates = el.content.match(regex);
		if (!dates) {
			dates = "";
		}
		return `<tr>
    <td>${el.name}</td>
    <td>${el.created}</td>
    <td>${el.category}</td>
    <td>${el.content}</td>
    <td>${dates}</td>
    <td>Edit</td>
    <td>Archive</td>
    <td>Delete</td>
    <tr>`;
	});
}

const container = document.querySelector("tbody");
container.innerHTML = cardMarkup(data);

export default () => {};
