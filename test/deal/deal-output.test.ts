import { StringParser } from '../../src';
import { writeDealasString } from '../../src/deal';

const north = StringParser.parseHand('KJ96.Q7.964.9874');
const west = StringParser.parseHand('T5.AJT8.KJT87.65');
const east = StringParser.parseHand('743.K532.53.AKQ3');
const south = StringParser.parseHand('AQ82.964.AQ2.JT2');

const deal = { N: north, E: east, S: south, W: west };

const handNorth =
	'\t\t\t' +
	'KJ96' +
	'\n\t\t\t' +
	'Q7' +
	'\n\t\t\t' +
	'964' +
	'\n\t\t\t' +
	'9874' +
	'\n';
const handsWestEast =
	'T5' +
	'\t\t\t\t\t' +
	'743' +
	'\n' +
	'AJT8' +
	'\t\t\t\t\t' +
	'K532' +
	'\n' +
	'KJT87' +
	'\t\t\t\t\t' +
	'53' +
	'\n' +
	'65' +
	'\t\t\t\t\t' +
	'AKQ3' +
	'\n';
const handSouth =
	'\t\t\t' +
	'AQ82' +
	'\n\t\t\t' +
	'964' +
	'\n\t\t\t' +
	'AQ2' +
	'\n\t\t\t' +
	'JT2';

describe('Testing converting deal to string', () => {
	it('Test deal string output', () => {
		const dealString = handNorth + handsWestEast + handSouth;
		expect(writeDealasString(deal)).toStrictEqual(dealString);
	});
});
