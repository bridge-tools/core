import { stringifyCall } from '.';
import { AuctionCall } from '../types';
/**
 * Converts a list of calls in a contested auction to a string separated by -
 * @param auction List of calls in auction
 * @returns String representation of auction
 */
function stringifyContestedAuction(auction: AuctionCall[]): string {
	const stringAuction = auction.map((call) => stringifyCall(call));
	return stringAuction.join('-');
}
/**
 * Converts a list of calls in an uncontested auction to a string separated by - with all passes inserted
 * @param auction List of calls in auction
 * @returns String representation of auction
 */
function stringifyUncontestedAuction(auction: AuctionCall[]): string {
	const stringUnconstedAuction = stringifyContestedAuction(auction);
	return stringUnconstedAuction.replaceAll('-', '-P-');
}
/**
 * Converts a list of calls in an auction to a string separated by -
 * @param auction List of calls in auction
 * @param contested Check if auction is contested or uncontested
 * @returns String representation of auction
 */
export function stringifyAuction(
	auction: AuctionCall[],
	contested = true
): string {
	return contested
		? stringifyContestedAuction(auction)
		: stringifyUncontestedAuction(auction);
}
