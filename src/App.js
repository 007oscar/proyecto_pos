import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fondo from './Chef.jpg';
import { Navbar, NavDropdown, Nav, Table, Col, Image, Row, 
        InputGroup, FormControl, Form, Modal, Container, Button} from 'react-bootstrap'


function MydModalWithGrid({show, onHide, datos}) {  
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  // const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    event.preventDefault();
    event.stopPropagation();
    datos(email, pass)
   // setValidated(true);
    // TODO revisar la validacion para que señale en el formulario antes de enviar
    // //onClick={()=>datos(email, pass) }  <--- va el boton submit ...... pequeño cambio
  };

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Identificarse
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <Container>
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={ e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              No compartas tu email y contraseña.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={pass} onChange={ e => setPass(e.target.value)}  />
          </Form.Group>
          <Form.Group controlId="formRecordar">
            <Form.Check type="checkbox" label="Recordar" />
          </Form.Group>
          <Button variant="primary" type="submit"  >  
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

function Pay(){
  return (
    <div>
      <Button variant="primary" size="lg" block style={{ marginTop: 50 }}>
        Cobrar
      </Button>
 
    </div>
  )
}

function Total(){

  return(
    <div>
      <InputGroup size="lg" style={{ marginBottom:6}}>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Sub-Total</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <InputGroup size="lg" style={{ marginBottom:6}}>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">IVA</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Total</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
    </div>
  )
}

function Display(){
  return(
    <>
        <Container fluid={true} >
          <Row>
            <Col sm={4}>
              <Ticket />
            </Col>
            <Col sm={8}>
              <Articles />
            </Col>
          </Row>
          <Row>
          <Col sm={4}>
              <Total />
            </Col>
            <Col sm={8}>
              <Pay />
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
  
  const items = [...Array(15)].map((val, i) => (
  <tr key={i}> 
    <td>${i}</td> 
    <td>Chicharrones</td>    
    <td>1</td>     
    <td>$50.00</td> 
    <td>$50.00</td> 
  </tr>))

  
  return(
  
    <>
      <Container style={{'maxHeight': 'calc(100vh - 300px)', 'overflowY': 'auto'}}>
        <Table striped bordered hover size="sm"  >
          <thead >
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

function ModalDialog(props) {
  console.log(props)
  return (
    <Modal  show={props.show} onHide={()=>props.status('cancelar')} >
      <Modal.Header closeButton>
        <Modal.Title>PoS Devf</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>¿Seguro que desea cerrar sesión?.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=> props.status('cancelar')}>Cancelar</Button>
        <Button variant="primary" onClick={()=>props.status('salir')} >Desconectarse</Button>
      </Modal.Footer>
    </Modal>
  );
}


function NavBar(props) {
 
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><strong>PoS</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { props.login ? <Nav.Link href=""  onClick={() => props.setModalShow('logout')}>Logout</Nav.Link>:
        <Nav.Link href="" onClick={() => props.setModalShow('login')} >Login</Nav.Link>}
        
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
  const [modalShowLoggout, setModalShowLoggout] = useState(false);
  const [compras, setCompras] = useState([])
  const [isLoggedin, setIsloggedin] = useState(false)
  
  const menu = [
    {
      id: 0,
      platillo: "HAMBURGUESA",
      costo: 70,
    },
    {
      id: 1,
      platillo: "SOPA DE VERDURAS",
      costo: 65,
    },
    {
      id: 2,
      platillo: "CARNE ASADA",
      costo: 80,
    },
    {
      id: 3,
      platillo: "BISTEK CON VERDURAS",
      costo: 85,
    },
    {
      id: 4,
      platillo: "ENSALADA ALL INCLUSIVE",
      costo: 210,
    },
    {
      id: 5,
      platillo: "POLLUELO ALL INCLUSIVE",
      costo: 220,
    },
    {
      id: 6,
      platillo: "ENCHILADAS",
      costo: 65,
    },
    {
      id: 7,
      platillo: "BISTEZOTE",
      costo: 90,
    },
    {
      id: 8,
      platillo: "MEXCOLANZA",
      costo: 95,
    },
    {
      id: 9,
      platillo: "WORM-BURGUER",
      costo: 100,
    },
    {
      id: 10,
      platillo: "SOPA DE CAMARON",
      costo: 120,
    },
    {
      id: 11,
      platillo: "CAMARONIZA",
      costo: 80,
    },    
  ]
   
  function handleLogin(email, pass){
    if(email === 'oscaralberto@gmail.com' && pass === '123456'){
      setIsloggedin(true)
      setModalShow(false)

    }else{
      setIsloggedin(false)
    }
  }

  function status(isLoggout){
    if (isLoggout) setIsloggedin(false)
  }
  function showModal(modal){
    console.log('is logout ',modal)
    modal === 'login' ? setModalShow(true) : setModalShowLoggout(true)
  }

  function statusLogout(status){
    console.log('status log out ',status)
    if(status === 'cancelar'){
      setModalShowLoggout(false)
    }else{
      setModalShowLoggout(false); setIsloggedin(false)}
    }
    console.log('modal ', modalShowLoggout)
    
  return (
      <>
          
          <NavBar setModalShow={showModal} login={isLoggedin} status={status} />
          <MydModalWithGrid show={modalShow} datos={handleLogin} onHide={() => setModalShow(false)} />
          
          {/* <MyVerticallyCenteredModal
          show={modalShowLoggout}
          onHide={() => {setModalShowLoggout(false); setIsloggedin(false)} }
        /> */}
          { isLoggedin ? <Display /> : <Image src="img/p1.png" className="rounded mx-auto d-block" />}

          <ModalDialog  show={modalShowLoggout} status={statusLogout}  onHide={() => setModalShowLoggout(false)} />

          {/* { isLoggedin && <Display />} */}

      </>
      );
    }
    
    export default App;
