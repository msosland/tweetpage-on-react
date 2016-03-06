var HashList = React.createClass({
  render: function() {
    var hashNodes = this.props.data.map(function(hashtag) {
      return (
        <Hashtag>
          {hashtag.name}
        </Hashtag>
      );
    });
    return (
      <div className="hashtags">
        {hashNodes}
      </div>
    );
  }
});