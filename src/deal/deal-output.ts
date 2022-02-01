import { Deal } from '../types';
import { formatHandasLines } from '../hand';

/**
 * Calculates the required tab spacing between West and East hands to make all the suits align correctly
 * @param suitstr String of a suit
 * @returns String of tab characters to put into the deal output
 */
export function calculateWestEastTabSpacing(suitstr: string): string {
	if (suitstr.length < 2) {
		return '\t\t\t\t\t\t';
	} else if (suitstr.length > 9) {
		return '\t\t\t\t';
	} else {
		return '\t\t\t\t\t';
	}
}

/**
 * Writes a deal object as a string which can be printed.
 * @param deal Deal to be written as a string
 * @returns String object containing deal
 */
export function writeDealasString(deal: Deal): string {
	const north = formatHandasLines(deal.N).map((line) => '\t\t\t' + line);
	const south = formatHandasLines(deal.S).map((line) => '\t\t\t' + line);
	const west = formatHandasLines(deal.W);
	const east = formatHandasLines(deal.E);
	const handsWestEast = [];
	for (let i = 0; i < 4; i++) {
		handsWestEast.push(
			west[i] + calculateWestEastTabSpacing(west[i]) + east[i]
		);
	}
	const dealString = [...north, ...handsWestEast, ...south];
	return dealString.join('\n');
}
