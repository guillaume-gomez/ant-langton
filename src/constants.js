export const CellWidth = 50;
export const ElapsedTime = 1000;
export const AntsColor = [
	"brown",
	"red",
	"yellow",
	"grey" 
];

export function convertToNumberColor(color) {
	if(!AntsColor.includes(color)) {
		return 0;
	}
	return AntsColor.indexOf(color);
}