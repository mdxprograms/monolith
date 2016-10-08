import React from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
import Headroom from 'react-headroom';
import {SUBS} from '../data';

export const Header = ({fetchSub, sub}) =>
  <Headroom>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Monolith</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <DropdownButton onSelect={(fetchSub)} className="menu-list" bsStyle="primary" title={sub || "Get yo reddit"} id="reddit-select">
          {SUBS.map((sub) =>
            <MenuItem key={sub.key} eventKey={sub.key}>{sub.value}</MenuItem>
          )}
        </DropdownButton>
      </Nav>
    </Navbar>
  </Headroom>
