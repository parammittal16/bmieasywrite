import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "mdbreact";

class App extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => { 
      this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
      <BrowserRouter basename="/bmieasywrite">
      <div className="App">
      <Navbar color="indigo" dark expand="md">
          <NavbarBrand>
            <strong className="white-text">BookmanIndia</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
          </Collapse>
      </Navbar>
      </div>
      </BrowserRouter>);
  }
}

export default App;