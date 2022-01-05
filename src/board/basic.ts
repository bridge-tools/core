import { Compass, Vulnerability, boardVul } from '../types';
import { positiveModulo } from '../utils/mod';
import { invert } from '../utils/object';

const COMPASS_TO_NUMBER: Record<Compass, number> = {
	[Compass.North]: 0,
	[Compass.East]: 1,
	[Compass.South]: 2,
	[Compass.West]: 3,
};
const NUMBER_TO_COMPASS = invert(COMPASS_TO_NUMBER);

/**
 * Rotate the specified compass direction by the number of steps
 */
export function rotateClockwise(initial: Compass, steps: number): Compass {
	const initialNumber = COMPASS_TO_NUMBER[initial];
	const newNumber = positiveModulo(initialNumber + steps, 4);
	return NUMBER_TO_COMPASS[newNumber];
}
export function rotateAnticlockwise(initial: Compass, steps: number): Compass {
	return rotateClockwise(initial, -steps);
}

/**
 * Check if this is N/S or E/W
 */
export function isNorthSouth(direction: Compass): boolean {
	return direction === Compass.North || direction === Compass.South;
}

/**
 * Check if a given direction is vulnerable on a board
 */
export function isDirectionVulnerable(
	direction: Compass,
	vulnerability: Vulnerability
): boolean {
	if (isNorthSouth(direction)) {
		return (
			vulnerability === Vulnerability.VNv ||
			vulnerability === Vulnerability.VV
		);
	}

	return (
		vulnerability === Vulnerability.NvV ||
		vulnerability === Vulnerability.VV
	);
}
/**
 * Swaps favourable and adverse vulnerability as needed by compass direction
 * @param vulnerability NvV or VNv vulnerability
 * @returns Swapped vulnerability
 */
function swapFavourableAdverseVulnerability(
	vulnerability: Vulnerability
): Vulnerability {
	if (vulnerability === Vulnerability.NvV) {
		return Vulnerability.VNv;
	} else if (vulnerability === Vulnerability.VNv) {
		return Vulnerability.NvV;
	}
}
/**
 * Calculates the vulnerability of the board from NS perspective
 * @param boardNumber Number of board
 * @returns Vulnerability of player on the specified board
 */
export function calculateBoardVulnerability(
	boardNumber: number
): Vulnerability {
	const board = boardNumber % 16;
	return boardVul[board];
}
/**
 * Checks if player is vulnerable or not on the board
 * @param boardNumber Number of board
 * @param direction Position of player
 * @returns Boolean whether player is vulnerable or not
 */
export function isPlayerVulnerable(
	boardNumber: number,
	direction: Compass
): boolean {
	const vul = calculateBoardVulnerability(boardNumber);
	return isDirectionVulnerable(direction, vul);
}
