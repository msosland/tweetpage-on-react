var HashPage = React.createClass({
  loadHashtagsFromServer: function() {
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
    this.loadHashtagsFromServer();
  },

  render: function() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Trends</h1>
        <HashList data={this.state.data} />
      </div>
    );
  }
});