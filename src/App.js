import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <NavLink to="/" exact>
          <Navbar.Brand>Olav Omtveit</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" exact className="nav-link">
              Home
            </NavLink>
            <NavLink to="/my-portfolio" className="nav-link">
              Portfolio
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact-me" className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/my-portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact-me" component={Contact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
