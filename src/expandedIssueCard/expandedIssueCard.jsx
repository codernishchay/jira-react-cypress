import React from "react";
import { useData } from "../dataContext";
import "./expandedIssueCard.css";

export default function ExpandedIssueCard({ issue, expanded, toggle }) {
  const { project, setissuelist } = useData();

  const kary = [
    ["A", "Todo"],
    ["B", "In Progress"],
    ["C", "Done"],
    ["D", "Blocked"],
  ];
  const map1 = new Map(kary);
  const typeary = [
    ["A", "Stroy"],
    ["B", "Task"],
    ["C", "Bug"],
    ["D", "Epic"],
  ];
  const map2 = new Map(typeary);

  const handleChange = (e) => {
    setissuelist((pre) => pre.filter((ele) => ele.issueId !== issue.issueId));
    issue.status = e.target.value;
    setissuelist((pre) => [...pre, issue]);
  };

  return (
    <div className="expanded-card">
      <h1>Issue Details </h1>
      {issue && (
        <div>
          <div className="issue-card-table">
            <div className="issue-row">
              <div>
                {" "}
                Project : <h2>{project.name}</h2>
              </div>{" "}
              <div className="status-tag"> {map2.get(issue.type)}</div>
              <p> KEY : {project.key}</p>
              <div>
                {" "}
                Summary : <h2>{issue.summary}</h2>
              </div>
            </div>
            <div className="issue-row">
              <div class="dropdown">
                <div className="status-tag">{map1.get(issue.status)}</div>
                <select class="dropbtn" onChange={handleChange}>
                  <option value={""}>none</option>
                  <option value={"A"}>TO DO</option>
                  <option value={"B"}>In Progress</option>
                  <option value={"C"}>Done</option>
                  <option value={"D"}>Blocked</option>
                </select>
              </div>
              <div className="project-contributors-1">
                Lead : {project.lead} <img src="man.png"></img>{" "}
              </div>
              <div className="project-contributors-1">
                {" "}
                Assigned to : {issue.assigned_to} <img src="man.png"></img>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
      <button className="close-icon" onClick={toggle}>
        X
      </button>
    </div>
  );
}
