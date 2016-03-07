var Hashtag = React.createClass({
  render: function() {
    return (
      <div>
        <li>{this.props.children}</li>
      </div>
    );
  }
});