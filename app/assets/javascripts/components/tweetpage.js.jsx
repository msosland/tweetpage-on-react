var TweetPage = React.createClass({
  loadTweetsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
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
        <TweetList data={this.state.data} />
      </div>
    );
  }
});

// $(document).ready(function() {
//   ReactDOM.render(
//     <TweetPage url="/tweets/recent" />,
//     document.getElementById('tweets-container')
//   );

//   ReactDOM.render(
//     <HashPage url="/hashtags/popular" />,
//     document.getElementById('trends-container')
//   );
// });
