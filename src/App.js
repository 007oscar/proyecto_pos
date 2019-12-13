import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavDropdown, Nav, Table, Col, Image, Row, Form, Modal, Container, Button} from 'react-bootstrap'


function MydModalWithGrid({show, onHide}) {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Using Grid in Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Display(){
  return(
    <>
       
        <Container fluid={true}>
          <Row>
            <Col sm={3}>
              <Ticket />
            </Col>
            <Col sm={9}>
              <Articles />
            </Col>
          </Row>
        </Container>
    </>
  )
}

function Articles(){
  return (
    <Container>
      <Row>
        <Col xs={6} md={3}>
          <Image src="img/1.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/2.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/3.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/4.jpg" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Image src="img/5.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/6.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/8.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/9.jpg" thumbnail />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Image src="img/10.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/11.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/12.jpg" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="img/13.jpg" thumbnail />
        </Col>
      </Row>
    </Container>

    )
}
function Ticket(){
  
  const items = [...Array(20)].map((val, i) => (<tr> <td>${i}</td> <td>Chicharrones</td>    <td>1</td>     <td>$50.00</td> <td>$50.00</td> </tr>))

  
  return(
  
    <>
      <Container style={{'max-height': 'calc(100vh - 210px)', 'overflow-y': 'auto'}}>
        <Table striped bordered hover size="sm"  >
          <thead fixed>
            <tr>
              <th>#</th>
              <th>Articulo</th>
              <th>Cantidad</th>
              <th>P. U.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, i)=>(item))

            }
          </tbody>
        </Table>
        </Container>
  </>
  )
}

function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><strong>PoS</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="" onClick={() => props.setModalShow(true)} >Login</Nav.Link>
        <NavDropdown title="Configuración" id="basic-nav-dropdown">
          <NavDropdown.Item href="#usuarios">Usuarios</NavDropdown.Item>
          <NavDropdown.Item href="#articulos">Articulos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#sistema">Sistema</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
      )
    }
    

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
      <>
        <NavBar setModalShow={setModalShow} />
        <Display />
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
      );
    }
    
    export default App;
