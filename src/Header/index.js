import React from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
import Headroom from 'react-headroom';
import {SUBS, THEMES} from '../data';

export const Header = ({fetchSub, sub, setTheme, theme}) =>
  <Headroom upTolerance={0} style={{
    webkitTransition: 'all .5s ease-in-out',
    mozTransition: 'all .5s ease-in-out',
    oTransition: 'all .5s ease-in-out',
    transition: 'all .5s ease-in-out'
  }}>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Monolith</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <DropdownButton onSelect={(setTheme)} className="menu-list" bsStyle="primary" title={`Theme: ${theme}`} id="reddit-theme">
          {THEMES.map((theme) =>
            <MenuItem key={theme} eventKey={theme}>{theme}</MenuItem>
          )}
        </DropdownButton>
        <DropdownButton onSelect={(fetchSub)} className="menu-list" bsStyle="primary" title={sub || "Get yo reddit"} id="reddit-select">
          {SUBS.map((sub) =>
            <MenuItem key={sub.key} eventKey={sub.key}>{sub.value}</MenuItem>
          )}
        </DropdownButton>
      </Nav>
    </Navbar>
  </Headroom>
