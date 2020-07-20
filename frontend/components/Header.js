import Link from 'next/link';
import { APP_NAME } from '../config';

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href='/'>
               <NavLink className="navBrand">{APP_NAME}</NavLink>   
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">blogs</NavLink>
            </NavItem>
            <NavItem>
               <Link href='/signin'><NavLink>Signin</NavLink></Link>   
            </NavItem>
            <NavItem>
               <Link href='/signup'><NavLink>Signup</NavLink></Link>   
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                artists
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Card</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;