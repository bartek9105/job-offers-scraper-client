import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const AppNav = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Stackoverflow job offers</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#technologies">Technologies</Nav.Link>
        <Nav.Link href="#cities">Cities</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default AppNav