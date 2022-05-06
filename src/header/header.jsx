import React from "react";
import { useData } from "../dataContext";
import { useState } from "react";
import "./header.css";
import IssueForm from "../issue-form/issue-form";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const { issuelist, setsearchlist, project } = useData();

  const handleSearch = (str) => {
    setsearchlist((pre) =>
      issuelist.filter((ele) => ele.summary.includes(str))
    );
  };

  return (
    <div className="header">
      <div className="bread-cr">Projects / {project.name}</div>
      <p>{project.name}</p>

      <div className="lower-header">
        <div className="input-lower-header">
          <input onChange={(e) => handleSearch(e.target.value)}></input>{" "}
          <img src="search.png"></img>
          <div className="project-contributors">
            <img src="man.png"></img>
            {project.lead}
          </div>
        </div>

        <div>
          {expanded && <IssueForm setExpanded={setExpanded}></IssueForm>}
          <button onClick={() => setExpanded(true)}> + Create Issue </button>
        </div>
      </div>
    </div>
  );
}
