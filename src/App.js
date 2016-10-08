import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  MenuItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      sub: 'react'
    };
  }

  fetchSub(sub) {
    axios.get(`http://www.reddit.com/r/${sub}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
      });

    this.setState({sub});
  }

  componentDidMount() {
    this.fetchSub('reactjs');
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Monolith</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <DropdownButton onChange={this.fetchSub.bind(this)} className="menu-list" bsStyle="primary" eventKey={1} title="Reddit" id="reddit-select">
              <MenuItem eventKey={1.1}>Reactjs</MenuItem>
              <MenuItem eventKey={1.2}>Javascript</MenuItem>
              <MenuItem eventKey={1.3}>Stocks</MenuItem>
              <MenuItem eventKey={1.4}>Webdev</MenuItem>
            </DropdownButton>
          </Nav>
        </Navbar>
        <h1>Reddit Feed</h1>
        <Grid className="row">
          <Row className="show-grid">
            {this.state.posts.map(post =>
              <Col key={post.id} sm={6} md={3}>
                {post.preview ?
                  <img src={post.preview.images[0].source.url} alt=""/>
                : null}
                <a target="_blank" href={post.url}>{post.title}</a>
              </Col>
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
