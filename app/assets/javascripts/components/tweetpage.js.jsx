

var TweetPage = React.createClass({
  loadCommentsFromServer: function() {
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
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },

  render: function() {
    console.log(this.state.data);
    return (
      <div>
        <TweetList data={this.state.data} />
      </div>
    );
  }
});

$(document).ready(function() {
  ReactDOM.render(
    <TweetPage url="/tweets/recent" />,
    document.getElementById('tweets-container')
  );
});
