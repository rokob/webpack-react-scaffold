import React from 'react';
import styles from 'css/styles'

export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    let likesCount = this.state.likesCount + 1;
    this.setState({likesCount});
  }

  render() {
    let whoAmI = this.props.foo ? this.props.foo : 'me';
    return (
        <div>
          Likes: <span className="is-danger">{this.state.likesCount}</span>
          <div><button className="button is-primary" onClick={this.onLike}>Like {whoAmI}</button></div>
        </div>
    );
  }
}
