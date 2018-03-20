import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Settings from "./Settings";

// var menuDropDownList = ["Login", "Settings"];
// const listMenu = menuDropDownList.map(menuDropDownList => (
//   <div>{menuDropDownList}</div>
// ));

const Menu = () => (
    <div class="dropdown">
        <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        >
            Dropdown button
    </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
                Action
      </a>
            <a class="dropdown-item" href="#">
                Another action
      </a>
            <a class="dropdown-item" href="#">
                Something else here
      </a>
        </div>
    </div>
);
export default Menu;