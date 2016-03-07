var Tweet = React.createClass({
  render: function() {
    return (
      <div className="tweet">
        <div className="tweet">
          <img className="avatar" src={this.props.children[3]}/>
          <div className="tweet-content">
            <p>
              <span className="full-name">{this.props.children[1]}</span>
              <span className="username">{this.props.children[2]}</span>
              <span className="timestamp">{"  " + Math.floor((new Date() - Date.parse(this.props.children[4])) / 1000 / 3600) + "h"}</span>
            </p>
            <p>{this.props.children[0]}</p>
          </div>
          <div className="likeButton"><LikeButton /></div>
        </div>
      </div>
    );
  }
});
