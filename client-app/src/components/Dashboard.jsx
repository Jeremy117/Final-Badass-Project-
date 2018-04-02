import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";

const URL =
  "https://api.mlab.com/api/1/databases/heroku_57qw8z8r/collections/articles?apiKey=h-OMydwAhmajzJr_hWshGs0gjrPxVKKa";

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      articles: []
    };
  }
  getRequest = () => {
    axios.get(URL).then(res => {
      this.setState({
        show: true,
        articles: res.data
      });
      // console.log(res.data);
      // console.log(response.status);
      // console.log(response.statusText);
      // console.log(response.headers);
    });
  };
  render() {
    return (
      <div>
        <div className="container2">
          <div>
            <button onClick={this.getRequest}>Get Newsfeed!</button>
            <div>
              {this.state.articles.map(article => <li>{article.title}</li>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
