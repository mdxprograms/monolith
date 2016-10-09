import React, {Component} from 'react';
import App from '../App';
import './item-view.css';

export default class ItemView extends Component {
  render() {
    return (
      <div className="item-embed">
        <h4>Will be embeded in page shortly!</h4>
        <p>
          Post <a href={this.props.location.query.url.replace("watch?v=", "embed/")}>{this.props.location.query.url.replace("watch?v=", "embed/")}</a>
        </p>
      </div>
    )
  }
}
