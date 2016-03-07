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

  handleSearchSubmit: function(keyword) {
    console.log(keyword.keyword);
    this.setState({data: allTweets}, function() {
      $.ajax({
        url: "/tweets/search/" + keyword.keyword,
        dataType: 'json',
        type: 'GET',
        success: function(data) {
          console.log(data);
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          tweets.pop();
          this.setState({data: keyword});
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
  },

  render: function() {
    return (
      <div>
        <header id="top-nav">
          <SearchForm onSearchSubmit={this.handleSearchSubmit} />
        </header>
        <section className="container">
          <section id="tweet-box">
            <TweetForm onTweetSubmit={this.handleTweetSubmit} />
          </section>
          <section id="trends-container">
            <HashPage url="/hashtags/popular" />
          </section>
          <section id="tweets-container">
            <TweetList data={this.state.data} />
          </section>
        </section>
      </div>
    );
  }
});

