import { createStore, combineReducers } from 'redux';

import {
	UPDATE_WERT1,
	RESET_WERT1,
	UPDATE_WERT2,
	RESET_WERT2,
	UPDATE_ERGEBNIS,
	RESET_ERGEBNIS,
} from './actions';

// state = 'Wert1?' ist eine ES6 Vorbelegung von State, die relevant ist für den ersten Aufruf, wenn noch kein Wert vorhanden ist
function wert1Reducer(state = 'Wert1?', action) {
	switch (action.type) {
		case UPDATE_WERT1:
			return action.wert1;
		case RESET_WERT1:
			return '';
		default:
			// wenn der Action-Type nicht verarbeitet wird (weil er z.B. nicht relevant ist) wird einfach der aktuelle state zurückgegeben
			return state;
	}
}

function wert2Reducer(state = 'Wert2?', action) {
	switch (action.type) {
		case UPDATE_WERT2:
			return action.wert2;
		case RESET_WERT2:
			return '';
		default:
			return state;
	}
}

function ergebnisReducer(state = 'Ergebnis?', action) {
	switch (action.type) {
		case UPDATE_ERGEBNIS:
			return action.ergebnis;
		case RESET_ERGEBNIS:
			return '';
		default:
			return state;
	}
}

const store = createStore(
	combineReducers({
		wert1: wert1Reducer,
		wert2: wert2Reducer,
		ergebnis: ergebnisReducer,
	})
);

export default store;
