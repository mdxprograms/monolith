import React, {Component} from 'react';
import './item-view.css';

export default class ItemView extends Component {
  render() {
    let {url} = this.props.location.query;
    if (url.includes('reddit.com')) {
      window.open(url);
    }
    return (
      <div className="item-embed">
        <iframe src={url.replace("watch?v=", "embed/")} frameborder="0"></iframe>
      </div>
    )
  }
}
