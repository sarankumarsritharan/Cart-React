import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css"
import "./Card"
import Button from  '@material-ui/core/button';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

function Header() {
    
    return (
        <div>
        <Navbar color="light" light expand="md" className='header'>
        <NavbarBrand href="/" className='start'>Start BootStrap</NavbarBrand>
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/home/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  All Products
                </DropdownItem>
                <DropdownItem>
                  Popular Items
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  New Arrivals
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
            <Button className='shopCart'>
                <ShoppingCartIcon /> 
                <NavLink href="/cart/">Cart</NavLink>
                      
            </Button>
            </NavItem>
          </Nav>
      </Navbar>
        </div>
    )
}

export default Header