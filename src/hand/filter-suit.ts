import { Card, Hand, Suit } from '../types';

export function filterbySuit(hand: Hand, suit: Suit): Card[] {
	return hand.filter((card) => card.suit === suit);
}
