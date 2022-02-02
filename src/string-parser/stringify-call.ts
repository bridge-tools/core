import { stringifySuit } from '.';
import { Call, NoTrump, NoTrumpType, PossibleCalls, Suit } from '../types';

/**
 * Converts the strain of a bid to a string
 * @param strain Suit or NoTrump type
 * @returns String of the relevant strain
 */
function stringifyStrain(strain: Suit | NoTrumpType): string {
	return strain === NoTrump ? 'NT' : stringifySuit(strain);
}
/**
 * Makes a call object into a string
 * @param bid Either a bid or possible call
 * @returns String representation of the call
 */
export function stringifyCall(bid: Call): string {
	switch (bid) {
		case PossibleCalls.Pass: {
			return 'P';
		}
		case PossibleCalls.Double: {
			return 'X';
		}
		case PossibleCalls.Redouble: {
			return 'XX';
		}
		default: {
			return bid.level.toString() + stringifyStrain(bid.suit);
		}
	}
}
