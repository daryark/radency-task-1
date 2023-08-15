import formatDate from "../utils/date-formatter.js";
import { regex } from "../utils/regex.js";

export function cardMarkup(el) {
	const dates = datesList(el.content);

	return `<tr class="align-text-top even:bg-slate-100 " id=${el.id} data-row >
      <td class="pt-2 pr-2 pb-6 pl-6 last-of-type: rounded-bl-md" data-name>${el.name}</td>
      <td class="p-2 pb-6border-l-2">${formatDate(el.created)}</td>
      <td class="p-2 pb-6 border-l-2" data-category>${el.category}</td>
    <td class="p-2 pb-6 border-l-2" data-content>${el.content}</td>
    <td class="p-2 pb-6 border-l-2" data-dates>${dates}</td>
    <!-- Icon buttons -->
    <td class="p-2 pb-6 border-l-2 text-slate-700"><i class="fa-solid fa-pencil hover:text-yellow-500 ease-in-out duration-300"></i></td>
    <td class="p-2 pb-6 text-slate-700"><i class="fa-solid fa-folder hover:text-yellow-500 ease-in-out duration-300"></i></td>
    <td class="p-2 pb-6 text-slate-700 last-of-type: rounded-br-md"><i class="fa-solid fa-trash hover:text-yellow-500 ease-in-out duration-300"></i></td>
    </tr>
    `;
}

export function datesList(content) {
	let dates = content?.match(regex);
	return !dates ? "" : dates.join(", ");
}
