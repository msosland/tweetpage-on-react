var TweetForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = document.getElementById('new-tweet').value;
    if (!content) {
      return;
    }
    this.props.onTweetSubmit({content: content});
    document.getElementById('new-tweet').value = '';
    return;
  },

  render: function() {
    return (
      <div>
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form" onSubmit={this.handleSubmit}>
          <textarea id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet" />
        </form>
      </div>
    );
  }
});
