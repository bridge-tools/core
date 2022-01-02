import { AuctionCall } from './bid';
import { BoardResult } from './board-result';
import { Trick } from './card';
import { Compass } from './compass';
import { Contract } from './contract';
import { Deal } from './deal';
import { Vulnerability } from './vulnerability';

export interface BasicBoard {
	deal: Deal;

	vulnerability: Vulnerability;
	num: number;
	dealer: Compass;
}

export interface FullBoard extends BasicBoard {
	turn: Compass;

	auction: AuctionCall[];

	contract: Contract;
	trick: Trick;
	play: Trick[];
	claimedTricks?: number;

	result: BoardResult;
}
