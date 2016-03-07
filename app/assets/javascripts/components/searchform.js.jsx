var SearchForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var keyword = document.getElementById('search').value;
    if (!keyword) {
      return;
    }
    this.props.onSearchSubmit({keyword: keyword});
    document.getElementById('search').value = '';
    return;
  },

  render: function() {
    return (
      <div>
        <div id="brand">Lil Twitter API IN REACT</div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input id="search" type="text" name="query" />
        </form>
        <i className="fa fa-search"></i>
      </div>
    );
  }
});