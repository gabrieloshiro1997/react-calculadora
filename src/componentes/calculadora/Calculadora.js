import React from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';

import './Calculadora.css';

function Calculadora() {
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
						/>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light">
							7
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							8
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							9
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning">
							/
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light">
							4
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							5
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							6
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning">
							*
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light">
							1
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							2
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="light">
							3
						</Button>
					</Col>
					<Col xs="3">
						<Button variant="warning">
							+
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs="3">
						<Button variant="light">
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
						<Button variant="warning">
							+
						</Button>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	)
}

export default Calculadora;