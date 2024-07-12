import { input } from "@inquirer/prompts";

const answer = await input({
	message: "Enter an array of numbers or strings separated by commas:",
});

const array = answer.split(",").map((item) => {
	return item.trim();
});

const groupedArray = array.reduce((newArray, item) => {
	if (item === "") {
		return newArray;
	}
	const convertedItem = isNaN(item) ? item : parseInt(item);
	const existingGroup = newArray.find((group) => group[0] === convertedItem);

	if (existingGroup) {
		existingGroup.push(convertedItem);
	} else {
		newArray.push([convertedItem]);
	}

	return newArray;
}, []);

groupedArray.sort((a, b) => {
	const valueA = a[0];
	const valueB = b[0];
	if (typeof valueA === "number" && typeof valueB === "number") {
		return valueA - valueB;
	} else {
		return String(valueA).localeCompare(String(valueB));
	}
});

console.log(`Here's your sorted arrays in an array:`, groupedArray);
