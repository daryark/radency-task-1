import data from "../data/data.js";
import refs from "../utils/refs.js";

const { noteCategoryOptions, sumTable } = refs;

function summaryRowMarkup(category) {
	const { name, archive, active } = category;
	console.log("category", category);

	return `<tr>
  <td class="pl-8 pr-2 inline-block" data-${name.toLowerCase().split(" ").join("-")}>${name}</td>
  <td class="text-center">${active}</td>
  <td class="text-center">${archive}</td>
  </tr>
  `;
}

export function sumTableMarkup() {
	const byCategoryStats = [];

	data.forEach((el) => {
		const { category, archive } = el;
		const active = archive ? 0 : 1;

		if (!byCategoryStats.find((i) => i.name === category)) {
			byCategoryStats.push({ name: category, active: 0, archive: 0 });
		}
		byCategoryStats.map((i) => {
			if (i.name === category) {
				i.active += active;
				i.archive += 1 - active;
			}
		});
	});
	console.log(byCategoryStats);

	return byCategoryStats.reduce((acc, i) => acc + summaryRowMarkup(i), ``);
}

sumTable.insertAdjacentHTML("afterbegin", sumTableMarkup());
