import React from "react";
import { useData } from "../dataContext";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="topnav" data-tag="navbar">
      <a className="active" href="#home">
        <img className="jira-title-img" src="squared-menu.png"></img>
        <img className="jira-title-img" src="jiralogo.png"></img> Jira
      </a>
    </div>
  );
}
