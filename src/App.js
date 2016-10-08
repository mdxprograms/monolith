import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';
import Headroom from 'react-headroom';
import axios from 'axios';
import './App.css';

const SUBS = [
  {key: 'reactjs', value: 'React'},
  {key: 'javascript', value: 'Javascript'},
  {key: 'webdev', value: 'Webdev'},
  {key: 'jekyll', value: 'Jekyll'},
  {key: 'space', value: 'Space'},
  {key: 'npr', value: 'NPR'},
  {key: 'stocks', value: 'Stocks'},
  {key: 'dccomics', value: 'DC Comics'}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      sub: 'reactjs',
      npr: []
    };
  }

  fetchSub(sub) {
    axios.get(`//www.reddit.com/r/${sub}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        console.log(posts);
        this.setState({posts});
      });

    this.setState({sub: sub});
  }

  componentDidMount() {
    this.fetchSub(this.state.sub);
  }

  render() {
    return (
      <div className="App">
        <Headroom>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Monolith</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <DropdownButton onSelect={this.fetchSub.bind(this)} className="menu-list" bsStyle="primary" title="Reddit" id="reddit-select">
                {SUBS.map((sub) =>
                  <MenuItem key={sub.key} eventKey={sub.key}>{sub.value}</MenuItem>
                )}
              </DropdownButton>
            </Nav>
          </Navbar>
        </Headroom>
        <h1 className="text-primary">/r/{this.state.sub}</h1>
        <div className="row">
          <section className="item-collection">
            {this.state.posts.map(post =>
              <a key={post.id} className="col-sm-12 col-md-6 col-lg-4 item" target="_blank" href={post.url}>
                <h4 className="text-primary">{post.title}</h4>
                {post.thumbnail && post.thumbnail !== "default" && post.thumbnail !== "self" && post.thumbnail !== "nsfw" ?
                  <img className="col-sm-12 img-responsive" src={post.thumbnail} alt=""/>
                : <img className="col-sm-12 img-responsive" src="https://camo.githubusercontent.com/b13830f5a9baecd3d83ef5cae4d5107d25cdbfbe/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f3732313033382f313732383830352f35336532613364382d363262352d313165332d383964312d3934376632373062646430332e706e67" alt=""/>}
              </a>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
