import { parseSuit } from '.';
import { Types } from '..';
import { AuctionCall, NoTrumpType, PossibleCalls } from '../types';

/**
 * Checks strain of bid for NT or a suit
 * @param str Letter denoting suit or NT
 * @returns NT or Suit type
 */
function parseStrain(str: string): Types.Suit | NoTrumpType {
	return str === 'n' || str === 'N' ? Types.NoTrump : parseSuit(str);
}

/**
 * Parses a single call in an auction. It can either be a bid
 * @param bid A string of the call to be parsed.
 * @returns AuctionCall.call object or an error if it can't be parsed
 */

export function parseCall(bid: string): AuctionCall {
	if (!Number.isNaN(Number(bid[0]))) {
		return { call: { level: Number(bid[0]), suit: parseStrain(bid[1]) } };
	} else {
		const possibleCall = bid.toUpperCase();
		switch (possibleCall) {
			case 'P': {
				return { call: PossibleCalls.Pass };
			}
			case 'X': {
				return { call: PossibleCalls.Double };
			}
			case 'XX': {
				return { call: PossibleCalls.Redouble };
			}
		}
		throw new Error(`Failed to parse Call with string: ${bid}`);
	}
}
