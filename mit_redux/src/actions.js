// Action
export const UPDATE_WERT1 = 'UPDATE_WERT1';
export const RESET_WERT1 = 'RESET_WERT1';

export const UPDATE_WERT2 = 'UPDATE_WERT2';
export const RESET_WERT2 = 'RESET_WERT2';

export const UPDATE_ERGEBNIS = 'UPDATE_ERGEBNIS';
export const RESET_ERGEBNIS = 'RESET_ERGEBNIS';

// Action creator
export function updateWert1(wert1) {
	return {
		type: UPDATE_WERT1,
		wert1,
	};
}

export function resetWert1() {
	return {
		type: RESET_WERT1,
	};
}

// Action creator
export function updateWert2(wert2) {
	return {
		type: UPDATE_WERT2,
		wert2,
	};
}

export function resetWert2() {
	return {
		type: RESET_WERT2,
	};
}

// Action creator
export function updateErgebnis(ergebnis) {
	return {
		type: UPDATE_ERGEBNIS,
		ergebnis,
	};
}

export function resetErgebnis() {
	return {
		type: RESET_ERGEBNIS,
	};
}

