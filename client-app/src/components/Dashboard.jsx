import React, { Component } from "react";
import "./Dashboard.css";

const arrTeams = ["alvaro", "jennifer", "jeremy", "thomas", "jacob", "adam"];
const listArr = arrTeams.map(arrTeams => <li>{arrTeams}</li>);

class Dashboard extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-1">.col-md-1</div>
        <div class="col-md-1">.col-md-1</div>
        <div class="col-md-1">
          <div>Teams!!!</div>
          {listArr}
        </div>
      </div>
      //   <div>
      //     <div className="container2">
      //       <h1 /> Dashboard
      //     </div>
      //     <ul className="container1">
      //       <h2 />calendar
      //       <h2 />newsfeed
      //       <h2 />roster
      //     </ul>
      //     <ul className="container1">
      //       <div />calendar code
      //       <div />newsfeed code
      //       <div className="container2" />
      //       {listArr}
      //     </ul>
      //   </div>
    );
  }
}

export default Dashboard;
