import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import './App.css';
import {Header} from './Header';
import {ItemList} from './ItemList';
import {SUBS} from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      sub: null,
      subs: SUBS,
      theme: 'paper',
      type: window.sessionStorage.getItem('type') || 'card'
    };
    this.fetchSub = this.fetchSub.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.changeListType = this.changeListType.bind(this);
    this.addSub = this.addSub.bind(this);
  }

  componentWillMount() {
    this.getSub();
    this.getTheme();
  }

  changeListType(type) {
    this.setState({type: type});
    window.sessionStorage.setItem('type', type);
  }

  getTheme() {
    let sessionTheme = window.sessionStorage.getItem('theme');
    this.setState({theme: sessionTheme || this.state.theme});
  }

  setTheme(theme) {
    this.setState({theme: theme});
    window.sessionStorage.setItem('theme', theme);
  }

  addSub(e) {
    let subVal = e.currentTarget.parentNode.children[0].value;
    const subs = this.state.subs;
    if (subVal.length) {
      subs.push({key: subVal.toLowerCase(), value: subVal});
      this.setState({subs: subs});
      this.fetchSub(subVal);
      e.currentTarget.parentNode.children[0].value = "";
    }
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
        <Header
          addSub={this.addSub}
          subList={this.state.subs}
          type={this.state.type}
          changeListType={this.changeListType}
          theme={this.state.theme}
          setTheme={this.setTheme}
          fetchSub={this.fetchSub}
          sub={this.state.sub} />

        {this.props.children ?
          this.props.children
        : <ItemList type={this.state.type} posts={this.state.posts} sub={this.state.sub} />}
      </div>
    );
  }
}

export default App;
