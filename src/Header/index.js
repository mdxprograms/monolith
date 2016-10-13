import React from 'react';
import {
  Button,
  DropdownButton,
  FormGroup,
  FormControl,
  MenuItem,
  Navbar,
  Nav
} from 'react-bootstrap';
import {THEMES} from '../data';

export const Header = ({addSub, subList, fetchSub, sub, setTheme, type, changeListType, theme}) =>
  <Navbar>
    <Navbar.Toggle />
    <Nav>
      <Navbar.Collapse>
        <FormGroup>
          <DropdownButton onSelect={(setTheme)} className="menu-list" bsStyle="primary" title={theme} id="reddit-theme">
            {THEMES.map((theme) =>
                <MenuItem key={theme} eventKey={theme}>{theme}</MenuItem>
            )}
          </DropdownButton>
          <DropdownButton onSelect={(fetchSub)} className="menu-list" bsStyle="primary" title={sub || "Get yo reddit"} id="reddit-select">
            {subList.map((sub) =>
                <MenuItem key={sub.key} eventKey={sub.key}>{sub.value}</MenuItem>
            )}
          </DropdownButton>
          <DropdownButton onSelect={(changeListType)} className="menu-list" bsStyle="primary" title={`${type} View`} id="reddit-select">
            <MenuItem key={'card'} eventKey={'card'}>Card View</MenuItem>
            <MenuItem key={'list'} eventKey={'list'}>List View</MenuItem>
          </DropdownButton>
          <Navbar.Form>
            <FormGroup>
              <FormControl id="add-sub-text" type="text" placeholder="Add a sub" />
              {' '}
              <Button onClick={addSub} type="submit">Submit</Button>
            </FormGroup>
          </Navbar.Form>
        </FormGroup>
      </Navbar.Collapse>
    </Nav>
  </Navbar>
