import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export default class Taschenrechner extends React.Component {

	plus(wert1,wert2,updateErgebnis) {
		let summe = Number(wert1()) + Number(wert2());

		let gleichung = wert1() + ' + ' + wert2() + ' = ' + summe;

        updateErgebnis(gleichung);
	}

	minus(wert1,wert2,updateErgebnis) {

		let differenz = Number(wert1()) - Number(wert2());

		let gleichung = wert1() + ' - ' + wert2() + ' = ' + differenz;

        updateErgebnis(gleichung);
    }

	render() {
        const { wert1, updateWert1, resetWert1, wert2, updateWert2, resetWert2, ergebnis, updateErgebnis, resetErgebnis } = this.props;

        return (
			<div>
				Wert1:{'  '}
				<input
					onChange={event => {
                        updateWert1(event.target.value);
                        resetErgebnis();
					}}
					value={wert1}
				/>
				{'  '}
				= {wert1}
				<br />
				<br />
				Wert2:{'  '}
				<input
					onChange={event => {
                        updateWert2(event.target.value);
                        resetErgebnis();
					}}
					value={wert2}
				/>
				{'  '}
				= {wert2}
				<br />
				<br />
				<button onClick={() => plus(wert1,wert2,updateErgebnis)}>+</button>
				{'  '}
				<button onClick={() => minus(wert1,wert2,updateErgebnis)}>-</button>
				<br />
				<p>Ergebnis: {'  ' + ergebnis()}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        wert1: state.wert1,
        wert2: state.wert2,
        ergebnis: state.ergebnis
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Taschenrechner);
