import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const AppNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Technologies</Nav.Link>
        <Nav.Link href="#">Cities</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AppNav