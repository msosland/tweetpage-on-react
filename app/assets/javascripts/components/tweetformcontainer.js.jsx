var TweetFormContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  handleTweetSubmit: function(tweet) {
    console.log(this.state.data);
    console.log(tweet);
    var tweets = this.state.data;
    tweets.push(tweet);
    this.setState({data: tweets}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: {tweet: tweet},
        success: function(data) {
        }.bind(this),
        error: function(xhr, status, err) {
          tweets.pop();
          this.setState({data: tweets});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },

  render: function() {
    return (
      <div>
        <TweetForm onTweetSubmit={this.handleTweetSubmit} />
      </div>
    );
  }
})