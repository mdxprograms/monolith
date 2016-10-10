import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import './App.css';
import {Header} from './Header';
import {ItemList} from './ItemList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      sub: null,
      theme: 'paper'
    };
    this.fetchSub = this.fetchSub.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }

  componentWillMount() {
    this.getSub();
    this.getTheme();
  }

  getTheme() {
    let sessionTheme = window.sessionStorage.getItem('theme');
    this.setState({theme: sessionTheme || this.state.theme});
  }

  setTheme(theme) {
    this.setState({theme: theme});
    window.sessionStorage.setItem('theme', theme);
  }

  getSub() {
    let sessionSub = window.sessionStorage.getItem('sub');
    if (sessionSub) {
      this.fetchSub(sessionSub);
    }
  }

  fetchSub(sub) {
    browserHistory.push("/");
    axios.get(`//www.reddit.com/r/${sub}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({posts});
      });

    this.setState({sub: sub});
    window.sessionStorage.setItem('sub', sub);
    document.body.scrollTop = 0;
  }

  render() {
    let themeLink = document.getElementById('theme');
    themeLink.href = `https://bootswatch.com/${this.state.theme}/bootstrap.min.css`

    return (
      <div className="App">
        <Header theme={this.state.theme} setTheme={this.setTheme} fetchSub={this.fetchSub} sub={this.state.sub}/>
        {this.props.children ?
          this.props.children
        : <ItemList posts={this.state.posts} sub={this.state.sub} />}
      </div>
    );
  }
}

export default App;
