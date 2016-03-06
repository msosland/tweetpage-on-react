

var TweetList = React.createClass({
  render: function() {
    var tweetNodes = this.props.data.map(function(tweet) {
      return (
        <Tweet key={tweet.id}>
          {tweet.content}
          {tweet.username}
          {tweet.handle}
          {tweet.avatar_url}
          {tweet.created_at}
        </Tweet>
      );
    });
    return (
      <div className="timeline">
        <h2>Timeline</h2>
        <div className="tweets">
          {tweetNodes}
        </div>
      </div>
    );
  }
});