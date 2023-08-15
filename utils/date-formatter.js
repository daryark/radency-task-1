export default function formatDate(date) {
	date = new Date(date);
	const day = String(date.getUTCDay()).padStart(2, "0");
	const month = String(date.getUTCMonth()).padStart(2, "0");
	const year = date.getUTCFullYear();

	return `${day}.${month}.${year}`;
}
