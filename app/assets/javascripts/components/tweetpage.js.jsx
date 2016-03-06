var allTweets;

var TweetPage = React.createClass({
  loadTweetsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
        allTweets = this.state.data;
        console.log(this.state.data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleTweetSubmit: function(tweet) {
    this.setState({data: allTweets}, function() {
      $.ajax({
        url: "/tweets",
        dataType: 'json',
        type: 'POST',
        data: {tweet: tweet},
        success: function(data) {
          allTweets.unshift(data);
          this.setState({data: allTweets});
        }.bind(this),
        error: function(xhr, status, err) {
          tweets.pop();
          this.setState({data: tweets});
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },


  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadTweetsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    return (
      <div>
        <section id="tweet-box">
          <TweetForm onTweetSubmit={this.handleTweetSubmit} />
        </section>
        <section id="tweets-container">
          <TweetList data={this.state.data} />
        </section>
      </div>
    );
  }
});


//   ReactDOM.render(
//     <HashPage url="/hashtags/popular" />,
//     document.getElementById('trends-container')
//   );
// });

$(document).on("page:change", function() {
  var $content = $("#content");
  if ($content.length > 0) {
    React.renderComponent(
      <CommentBox url="comments.json" pollInterval={2000} />,
      document.getElementById('content')
    );
  }
})
