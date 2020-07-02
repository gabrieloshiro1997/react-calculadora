import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from '../componentes/calculadora/Calculadora';

it('Deve renderizar o componente sem erros', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Calculadora />, div);
	ReactDOM.unmountComponentAtNode(div);
});