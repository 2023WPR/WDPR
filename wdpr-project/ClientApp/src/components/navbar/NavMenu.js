import React, { Component, useContext } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import '../navbar/NavMenu.css';
import AuthContext from '../RequireAuth'; // Adjust the path

export class NavMenu extends Component {
  static displayName = NavMenu.name;
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  // ...

render() {
  const { userAuth, setAuth } = this.context || {}; // Use this.context instead of AuthContext()
  const active = ({ isActive }) => { return isActive ? {  } : {} }
  const isUserAuthEmpty = !userAuth || Object.keys(userAuth).length === 0;

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light
        style={{ backgroundColor: '#2B50EC' }}
      >
        <NavbarBrand tag={Link} to="/">
          <Image src={require('../navbar/logo.png')} className="logo" alt="Logo of Stiching Accessebility" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            {!isUserAuthEmpty ? (
              <>
               <NavItem>
              <NavLink href="/" className="logout" onClick={() => setAuth({})}>
                Log uit
              </NavLink>
              </NavItem>
              <NavItem>

              <NavLink href="/" className="personalData" onClick={() => setAuth({})}>
                Mijn Gegevens
              </NavLink>
              </NavItem>
              </>
            ) : (
              <>
              <NavItem>
              <NavLink href="/login" className="login">
                Login
              </NavLink>
              </NavItem>
              <NavItem>

              <NavLink href="/register/select" className="register">
              Register
              </NavLink>
              </NavItem>
              </>
            )}
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
}

// ...

}
