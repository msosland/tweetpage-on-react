var Hashtag = React.createClass({
  render: function() {
    console.log(this);
    return (
      <div>
        <li>{this.props.children}</li>
      </div>
    );
  }
});