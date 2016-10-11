import React from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
import {SUBS, THEMES} from '../data';

export const Header = ({fetchSub, sub, setTheme, theme}) =>
  <Navbar>
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
