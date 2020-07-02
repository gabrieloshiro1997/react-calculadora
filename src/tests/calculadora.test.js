import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculadora from '../componentes/calculadora/Calculadora';

describe('Calculadora0', () => {

	it('Deve renderizar o componente sem erros', () => {
		
		const div = document.createElement('div');
		
		ReactDOM.render(<Calculadora />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('Deve limpar o campo de números', () => {
		
		const { getByTestId, getByText } = render(<Calculadora />);
		
		fireEvent.click(getByText('2'));
		fireEvent.click(getByText('C'));
		expect(getByTestId('txtNumeros')).toHaveValue('0');
	});

	it('Deve somar 2 + 3 e obter 5', () => {
		
		const { getByTestId, getByText } = render(<Calculadora />);

		fireEvent.click(getByText('2'));
		fireEvent.click(getByText('+'));
		fireEvent.click(getByText('3'));
		fireEvent.click(getByText('='));

		expect(getByTestId('txtNumeros')).toHaveValue('5');
	});

	it('Deve subtrair 5 - 3 e obter 2', () => {
		const { getByTestId, getByText } = render(<Calculadora />);

		fireEvent.click(getByText('5'));
		fireEvent.click(getByText('-'));
		fireEvent.click(getByText('3'));
		fireEvent.click(getByText('='));

		expect(getByTestId('txtNumeros')).toHaveValue('2');
	});

	it('Deve dividir 6 / 3 e obter 2', () => {
		const { getByTestId, getByText } = render(<Calculadora />);

		fireEvent.click(getByText('6'));
		fireEvent.click(getByText('/'));
		fireEvent.click(getByText('3'));
		fireEvent.click(getByText('='));

		expect(getByTestId('txtNumeros')).toHaveValue('2');
	});

	it('Deve multiplicar 3 * 2 e obter 6', () => {
		const { getByTestId, getByText } = render(<Calculadora />);

		fireEvent.click(getByText('3'));
		fireEvent.click(getByText('*'));
		fireEvent.click(getByText('2'));
		fireEvent.click(getByText('='));

		expect(getByTestId('txtNumeros')).toHaveValue('6');
	});

	it('Deve somar 2.5 + 3 e obter 5.5', () => {
		const { getByTestId, getByText } = render(<Calculadora />);

		fireEvent.click(getByText('2'));
		fireEvent.click(getByText('.'));
		fireEvent.click(getByText('5'));
		fireEvent.click(getByText('+'));
		fireEvent.click(getByText('3'));
		fireEvent.click(getByText('='));

		expect(getByTestId('txtNumeros')).toHaveValue('5.5');
	});
})