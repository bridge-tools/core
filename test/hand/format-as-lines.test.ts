import { Hand, StringParser } from '../../src';
describe('Testing converting hand to list of strings', () => {
	it('Hand with 4 suits', () => {
		expect(
			Hand.formatHandasLines(StringParser.parseHand('KJ96.Q7.964.9874'))
		).toStrictEqual(['KJ96', 'Q7', '964', '9874']);
	});
	it('Hand with void', () => {
		const hand = StringParser.parseHand('.KQJT9.43.AJT876');
		expect(Hand.formatHandasLines(hand)).toStrictEqual([
			'',
			'KQJT9',
			'43',
			'AJT876',
		]);
	});
});
