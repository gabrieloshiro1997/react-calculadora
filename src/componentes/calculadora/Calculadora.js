import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

import './Calculadora.css';

function Calculadora() {

	const [txtNumeros, setTxtNumeros] = useState('0');

	function adicionarNumero(numero) {
		setTxtNumeros(txtNumeros + numero)
	}

	function definirOperacao(operacao) {
		setTxtNumeros(operacao);
	}

	return (
		<Jumbotron style={{
			background: 'transparent !important',
			backgroundColor: '#007bff',
			padding: '5px',
			margin: '5px',
			width: '50%',
			height: '30%'
		}}
		>
			<Container>
				<Row>
					<Col xs="3" className="text-center">
						<Button variant="danger">C</Button>
					</Col>
					<Col xs="9">
						<Form.Control
							type="text"
							className="text-right"
							readOnly
							value={txtNumeros}
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('7')}>
							7
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('8')}>
							8
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('9')}>
							9
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning"
							onClick={() => definirOperacao('/')}>
							/
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('4')}>
							4
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('5')}>
							5
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('6')}>
							6
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning"
							onClick={() => definirOperacao('*')}>
							*
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('1')}>
							1
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('2')}>
							2
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('3')}>
							3
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning"
							onClick={() => definirOperacao('+')}>
							+
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light"
							onClick={() => adicionarNumero('0')}>
							0
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							.
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="success">
							=
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning"
							onClick={() => definirOperacao('-')}>
							-
						</Button>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

export default Calculadora;