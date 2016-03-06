var TweetFormContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },


  render: function() {
    return (
      <div>
        <TweetForm onTweetSubmit={this.handleTweetSubmit} />
      </div>
    );
  }
})