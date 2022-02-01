import { filterbySuit } from '../hand';
import { stringifyRanks } from '../string-parser';
import { Hand, Suit } from '../types';
/**
 * Converts a hand to a list of strings orderd by suit
 * @param hand Hand to convert into list
 * @returns List of suit holdings in the hand ordered by suit
 */
export function formatHandasLines(hand: Hand): string[] {
	const stringHand = [];
	const spades = stringifyRanks(
		filterbySuit(hand, Suit.Spade).map((card) => card.rank)
	);
	const hearts = stringifyRanks(
		filterbySuit(hand, Suit.Heart).map((card) => card.rank)
	);
	const diamonds = stringifyRanks(
		filterbySuit(hand, Suit.Diamond).map((card) => card.rank)
	);
	const clubs = stringifyRanks(
		filterbySuit(hand, Suit.Club).map((card) => card.rank)
	);
	stringHand.push(spades, hearts, diamonds, clubs);
	return stringHand;
}
