import React from 'react';

var style2 = {
    float: "right"
};

class TwitterStream extends React.Component {
    state = {
        twits: [],
    }

    componentDidMount() {
        fetch("http://localhost:5000/tweets")
            .then(results => results.json())
            .then(data => {
                console.log("Client Side "+data);
                this.setState({ twits: data });
            });
        // this.setState({ scoreboard1: json });
    }

    renderTwitter() {
        return this.state.twits.map(tweet => {
          return (
            <div>
              <span>
                <b>{tweet.name} </b> <span>{tweet.userid}</span>
              </span>
              <span style={style2}>{tweet.created_at}</span>
              <p>{tweet.text} </p>
              <hr />
            </div>
          );
        });
      }

    render() {
        return (
            <div>
                {this.renderTwitter()}
            </div>
        );
    }
}

export default TwitterStream;
