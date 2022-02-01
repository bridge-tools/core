import { Deal, Suit } from '../types';
import { filterbySuit } from '../hand';
import { stringifyRanks } from '../string-parser';

/**
 * @param deal Deal to be written as a string
 * @returns String object containing deal
 */
export function writeDealasString(deal: Deal): string {
	const north = deal.N;
	const south = deal.S;
	const west = deal.W;
	const east = deal.E;
	/* Defining each suit in each hand as its own string */
	const spadesNorth = stringifyRanks(
		filterbySuit(north, Suit.Spade).map((card) => card.rank)
	);
	const heartsNorth = stringifyRanks(
		filterbySuit(north, Suit.Heart).map((card) => card.rank)
	);
	const diamondsNorth = stringifyRanks(
		filterbySuit(north, Suit.Diamond).map((card) => card.rank)
	);
	const clubsNorth = stringifyRanks(
		filterbySuit(north, Suit.Club).map((card) => card.rank)
	);
	const spadesWest = stringifyRanks(
		filterbySuit(west, Suit.Spade).map((card) => card.rank)
	);
	const heartsWest = stringifyRanks(
		filterbySuit(west, Suit.Heart).map((card) => card.rank)
	);
	const diamondsWest = stringifyRanks(
		filterbySuit(west, Suit.Diamond).map((card) => card.rank)
	);
	const clubsWest = stringifyRanks(
		filterbySuit(west, Suit.Club).map((card) => card.rank)
	);
	const spadesEast = stringifyRanks(
		filterbySuit(east, Suit.Spade).map((card) => card.rank)
	);
	const heartsEast = stringifyRanks(
		filterbySuit(east, Suit.Heart).map((card) => card.rank)
	);
	const diamondsEast = stringifyRanks(
		filterbySuit(east, Suit.Diamond).map((card) => card.rank)
	);
	const clubsEast = stringifyRanks(
		filterbySuit(east, Suit.Club).map((card) => card.rank)
	);
	const spadesSouth = stringifyRanks(
		filterbySuit(south, Suit.Spade).map((card) => card.rank)
	);
	const heartsSouth = stringifyRanks(
		filterbySuit(south, Suit.Heart).map((card) => card.rank)
	);
	const diamondsSouth = stringifyRanks(
		filterbySuit(south, Suit.Diamond).map((card) => card.rank)
	);
	const clubsSouth = stringifyRanks(
		filterbySuit(south, Suit.Club).map((card) => card.rank)
	);
	/* Concatenate strings together before making deal string*/
	const handNorth =
		spadesNorth +
		'\n\t\t\t' +
		heartsNorth +
		'\n\t\t\t' +
		diamondsNorth +
		'\n\t\t\t' +
		clubsNorth +
		'\n';
	const handsWestEast =
		spadesWest +
		'\t\t\t\t\t' +
		spadesEast +
		'\n' +
		heartsWest +
		'\t\t\t\t\t' +
		heartsEast +
		'\n' +
		diamondsWest +
		'\t\t\t\t\t' +
		diamondsEast +
		'\n' +
		clubsWest +
		'\t\t\t\t\t' +
		clubsEast +
		'\n\t\t\t';
	const handSouth =
		spadesSouth +
		'\n\t\t\t' +
		heartsSouth +
		'\n\t\t\t' +
		diamondsSouth +
		'\n\t\t\t' +
		clubsSouth;
	const dealString = '\t\t\t' + handNorth + handsWestEast + handSouth;
	return dealString;
}
