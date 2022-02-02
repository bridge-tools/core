import { parseCall } from '.';
import { AuctionCall } from '../types';
/**
 * Converts a contested auction string into a list of AuctionCalls
 * @param auction String of calls in auction separated by -
 * @returns List of AuctionCalls representing the auction
 */
function parseContestedAuction(auction: string): AuctionCall[] {
	const calls = auction.split('-');
	const bids = [];
	for (const call of calls) {
		bids.push(parseCall(call));
	}
	return bids;
}
/**
 * Converts an uncontested auction into a full contested auction.
 * @param auction String of calls in auction separated by -
 * @returns List of AuctionCalls representing the auction
 */
function parseUncontestedAuction(auction: string): AuctionCall[] {
	const contestedAuction = auction.replaceAll('-', '-P-');
	return parseContestedAuction(contestedAuction);
}
/**
 * Converts an auction string into a list of AuctionCalls
 * @param auction String of calls in auction separated by -
 * @param contested Check if auction is contested or uncontested
 * @returns List of AuctionCalls representing the auction
 */
export function parseAuction(auction: string, contested = true): AuctionCall[] {
	return contested
		? parseContestedAuction(auction)
		: parseUncontestedAuction(auction);
}
