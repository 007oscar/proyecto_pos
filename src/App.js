import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fondo from './Chef.jpg';
import { Navbar, NavDropdown, Nav, Table, Col, Image, Row, 
        InputGroup, FormControl, Form, Modal, Container, Button} from 'react-bootstrap'


function MyModalPay(props) {  
  const [recibido, setRecibido] = useState('')
  const [change, setChange] = useState('')

  let total = new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(props.total)
  let cambio = ''
  let dineroRecibido = 0
  function calcularCambio(seRecibe){
    console.log(seRecibe)
    console.log(props.total - Number(seRecibe))
    console.log('cambio', cambio)
    dineroRecibido = props.total - Number(seRecibe)

    setRecibido(seRecibe)
    cambio = new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(props.total - Number(seRecibe))
    setChange(cambio)
  }
  return (
    <Modal show={props.show} onHide={() => props.handleclose()}>
        <Modal.Header closeButton>
          <Modal.Title>Caja Devf</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <InputGroup size="lg" style={{ marginBottom:6}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Total</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
              className="text-info font-weight-bold text-right" onChange={()=>''} value={total }
              />
            </InputGroup>
            <InputGroup size="lg" style={{ marginBottom:6}}>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Recibido</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
              className="text-warn font-weight-bold text-right" onChange={(e)=> calcularCambio(e.target.value) } value={recibido}
              />
            </InputGroup>
            <InputGroup size="lg">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-lg">Cambio</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
              className="text-danger font-weight-bold text-right" onChange={()=>''} value={ change } />
            </InputGroup>
          </div>  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ () => props.handleclose() }>
            Cerrar
          </Button>
          <Button variant="primary" onClick={ () =>props.cobrar(props.total - dineroRecibido ) }>
            Cobrar
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

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

function Pay(props){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function cobrar(dinero){
  //   if(dinero <= 0){

  //   }
  // }

  return (
    <div>
      <Button variant="primary" size="lg" block style={{ marginTop: 50 }} onClick={handleShow}  >
        Cobrar
      </Button>
      <MyModalPay show={show} handleclose= { ()=> setShow(false) } total={props.total} estadoTicket={props.estatoTicket} />
    </div>
  )
}

function Total(props){

  let total = new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(props.total)
  let iva = new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(props.total * 0.16)
  let subtotal = new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(props.total - (props.total * 0.16))
  return(
    <div>
      <InputGroup size="lg" style={{ marginBottom:6}}>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Sub-Total</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
        className="text-info font-weight-bold text-right" onChange={()=>''} value={subtotal }
        />
      </InputGroup>
      <InputGroup size="lg" style={{ marginBottom:6}}>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">IVA</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
        className="text-warn font-weight-bold text-right" onChange={()=>''} value={iva }
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Total</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" 
        className="text-danger font-weight-bold text-right" onChange={()=>''} value={total } />
      </InputGroup>
    </div>
  )
}

function Display(props){

  const [food, setFood] = useState([])
  const [modalShow, setModalShow] = useState({ modal:false, comida:null });

  function handleSetFood(foodChoiced){
    setFood( (prev) =>(
      [...prev, foodChoiced]
    ))
    console.log('foot ---',food)
    console.log('escogio  ',foodChoiced)
  }

  function handleTicket(index){
    //desplegar aviso: desea borrar x comida?
    console.log('handle ticket 1')
    if(!modalShow.modal){
      setModalShow({modal:true, comida:food[index]})
    }else{
      
    }
  }

  function borrar(index){
    console.log('borrar rrrrrrr', index)
      //let nuevoTicket = food
      for(let i= 0; i<food.length; i++){
        if(index !== food[i].id){
          food.pop(food[i])
          break
        }
      }
      setFood(food)
      setModalShow({...modalShow, modal:false})
  }
  
  function close(){
    setModalShow({...modalShow, modal:false})
  }

  let total = 0
  for(let i= 0; i<food.length; i++) {
    total += food[i].costo
  }

  function estadoTicket(dinero){

  }
  return(
    <>
        <Container fluid={true} >
          <Row>
            <Col sm={4}>
              <Ticket handleTicket={handleTicket} borrar={borrar} food={food}/>
            </Col>
            <Col sm={8}>
              <Articles setfood = {handleSetFood} />
            </Col>
          </Row>
          <Row>
          <Col sm={4}>
              <Total total = {total}  />
            </Col>
            <Col sm={8}>
              <Pay total={total} estadoTicket ={estadoTicket} />
            </Col>
          </Row>
        </Container>
        <ModalDialogFood  show={modalShow.modal} 
        comida={modalShow.comida === null? '':modalShow.comida}  
        onHide={() => setModalShow({...modalShow, modal:false})} 
        borrar = {borrar}
        close = {close}
        />
    </>
  )
}

function Articles(props){
  const menu = [
    {
      id: 0,
      platillo: "HAMBURGUESA",
      costo: 70,
      imagen: 'img/1.jpg'
    },
    {
      id: 1,
      platillo: "SOPA DE VERDURAS",
      costo: 65,
      imagen: 'img/2.jpg'
    },
    {
      id: 2,
      platillo: "CARNE ASADA",
      costo: 80,
      imagen: 'img/3.jpg'
    },
    {
      id: 3,
      platillo: "BISTEK CON VERDURAS",
      costo: 85,
      imagen: 'img/4.jpg'
    },
    {
      id: 4,
      platillo: "ENSALADA ALL INCLUSIVE",
      costo: 210,
      imagen: 'img/5.jpg'
    },
    {
      id: 5,
      platillo: "POLLUELO ALL INCLUSIVE",
      costo: 220,
      imagen: 'img/6.jpg'
    },
    {
      id: 6,
      platillo: "ENCHILADAS",
      costo: 65,
      imagen: 'img/8.jpg'
    },
    {
      id: 7,
      platillo: "BISTEZOTE",
      costo: 90,
      imagen: 'img/9.jpg'
    },
    {
      id: 8,
      platillo: "MEXCOLANZA",
      costo: 95,
      imagen: 'img/10.jpg'
    },
    {
      id: 9,
      platillo: "WORM-BURGUER",
      costo: 100,
      imagen: 'img/11.jpg'
    },
    {
      id: 10,
      platillo: "SOPA DE CAMARON",
      costo: 120,
      imagen: 'img/12.jpg'
    },
    {
      id: 11,
      platillo: "CAMARONIZA",
      costo: 80,
      imagen: 'img/13.jpg'
    },    
  ]
  let listaMenu = []
  for(let i = 0;i <menu.length ;i+=4){
    listaMenu.push(
      <Row key={i}>
        <Col xs={6} md={3}>
          <Image src={menu[i].imagen} thumbnail onClick={()=>props.setfood(menu[i])} />
        </Col>
        <Col xs={6} md={3}>
          <Image src={menu[i+1].imagen} thumbnail onClick={()=>props.setfood(menu[i+1])} />
        </Col>
        <Col xs={6} md={3}>
          <Image src={menu[i+2].imagen} thumbnail onClick={()=>props.setfood(menu[i+2])}/>
        </Col>
        <Col xs={6} md={3}>
          <Image src={menu[i+3].imagen} thumbnail onClick={()=>props.setfood(menu[i+3])}/>
        </Col>
      </Row>
    )
  }
  console.log('menu', listaMenu)
  return (
    <Container>
      {listaMenu}
    </Container>

    )
}
function Ticket(props){
  
  const items = [...props.food].map((val, i) => (
  <tr key={i} onClick={() => props.handleTicket(i) }> 
    <td>{i + 1}</td> 
    <td>{val.platillo}</td>
    <td>1</td>     
    <td>{ new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(val.costo)}</td> 
    <td>{ new Intl.NumberFormat("mx-ES", {style: "currency", currency: "MXN"}).format(val.costo)}</td> 
  </tr>))

  console.log('props food ',props.food)
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

function ModalDialogFood(props) {
  console.log('modal comidita',props)
  return (
    <Modal  show={props.show} onHide={props.onHide} >
      <Modal.Header closeButton>
        <Modal.Title>PoS Devf</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>¿Seguro que desea eliminar la comida <strong>{props.comida.platillo}</strong> ?.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={()=> props.close() }>Cancelar</Button>
        <Button variant="primary" onClick={()=> props.borrar(props.comida.id) } >Eliminar</Button>
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
  const [isLoggedin, setIsloggedin] = useState(false)
   
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
