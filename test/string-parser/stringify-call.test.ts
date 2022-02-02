import { StringParser, Types } from '../../src';
import { PossibleCalls } from '../../src/types';

describe('Testing stringifyCall', () => {
	it('Testing pass', () => {
		expect(StringParser.stringifyCall(PossibleCalls.Pass)).toStrictEqual(
			'P'
		);
	});
	it('Testing double', () => {
		expect(StringParser.stringifyCall(PossibleCalls.Double)).toStrictEqual(
			'X'
		);
	});
	it('Testing Redouble', () => {
		expect(
			StringParser.stringifyCall(PossibleCalls.Redouble)
		).toStrictEqual('XX');
	});
	it('Testing bids', () => {
		expect(
			StringParser.stringifyCall({ level: 1, suit: Types.NoTrump })
		).toStrictEqual('1NT');
		expect(
			StringParser.stringifyCall({ level: 4, suit: Types.Suit.Spade })
		).toStrictEqual('4S');
	});
});
