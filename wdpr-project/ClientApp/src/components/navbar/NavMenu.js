import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { Link, Navigate } from 'react-router-dom';
import '../navbar/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;
  
  constructor(props) {
    
    super(props);
<<<<<<< HEAD
    this.uitloggen = this.uitloggen.bind(this);
    this.redirect = this.redirect.bind(this);
=======
    this.signOut = this.uitloggen.bind(this);
>>>>>>> origin/main
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      toegang: localStorage.getItem("toegang"),
      collapsed: true,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    // Check if the user is logged in when the component mounts
    this.checkLoginStatus();
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  checkLoginStatus() {
    try {
      let token = localStorage.getItem('token');  
      const isLoggedIn = token != null;
      
      this.setState({
        isLoggedIn,
      });
    } catch {
      this.setState({
        isLoggedIn: false,
      });
    }
  }
  uitloggen() {
    localStorage.removeItem("token");
    this.setState({
      toegang: localStorage.getItem("toegang"),
    });
    window.location.reload();
  }

<<<<<<< HEAD
   redirect()  {
    const userRole = localStorage.getItem("role");
    console.log(userRole)
    if (userRole) {
      switch (userRole) {
        case 'Expert':
          this.props.history.push('/expertHome');
          break;
        case 'Business':
          this.props.history.push('/businessHome');
          break;
        case 'Admin':
          this.props.history.push('/adminHome');
          break;
        default:
          this.props.history.push('/');
      }
  }}
=======
>>>>>>> origin/main
  render() {
    const { isLoggedIn } = this.state;

    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light style={{ backgroundColor: '#2B50EC' }}>
          <NavbarBrand tag={Link} to="/">
            <Image src={require('../navbar/logo.png')} className="logo" alt="Logo of Stichting Accessibility" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              {isLoggedIn ? (
                <>
                  <NavItem>
                  <NavLink tag={Link} id='signOut' className="text-light"  to="/" onClick={this.uitloggen}>
                      Logout
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/myprofile">
                      Mijn gegevens
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-light" to="/register/select">
                      Registreer
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
}
