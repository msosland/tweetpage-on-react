var LikeButton = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'You like!' : 'Like Me!';
    return (
      <p onClick={this.handleClick}>
        {text}
      </p>
    );
  }
});
