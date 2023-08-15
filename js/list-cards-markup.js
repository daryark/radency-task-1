import data from "../data/data.js";
import refs from "../utils/refs.js";
import { cardMarkup } from "./card-markup.js";

export function listCardsMarkup(data) {
	return data.map((el) => cardMarkup(el)).join("");
}

refs.notesTable.innerHTML = listCardsMarkup(data);
