import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Animals from "./pages/Animals";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import Vets from "./pages/Vets";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <main>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Lil’ Beasts Animal Shelter</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/animals">Animals</Nav.Link>
                <Nav.Link href="/vets">Vets</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Route path="/" exact component={Home} />
        <Route path="/animals" exact component={Animals} />
        <Route path="/vets" exact component={Vets} />
        <Footer />
      </main>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
