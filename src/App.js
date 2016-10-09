import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Header} from './Header';
import {ItemList} from './ItemList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      sub: null
    };
    this.fetchSub = this.fetchSub.bind(this);
  }

  fetchSub(sub) {
    this.props.history.push("/");
    axios.get(`//www.reddit.com/r/${sub}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
      });

    this.setState({sub: sub});
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div className="App">
        <Header fetchSub={this.fetchSub} sub={this.state.sub}/>
        {this.props.children ?
          this.props.children
        : <ItemList posts={this.state.posts} sub={this.state.sub} />}
      </div>
    );
  }
}

export default App;
