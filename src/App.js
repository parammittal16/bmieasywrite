import React, { Component } from 'react';
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
          { this.props.isAuthenticated ? <SignedInLink /> : null}
          </Collapse>
      </Navbar>
      </div>
      </BrowserRouter>);
  }
}

export default App;