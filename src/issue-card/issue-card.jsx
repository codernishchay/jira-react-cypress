import React, { useState } from "react";
import { useData } from "../dataContext";
import ExpandedIssueCard from "../expandedIssueCard/expandedIssueCard";
import "./issue-card.css";
export default function IssueCard({ issue }) {
  const [expanded, setexpanded] = useState(false);
  const kary = [
    ["A", "Story"],
    ["B", "Task"],
    ["C", "Bug"],
    ["D", "Epic"],
  ];
  const map1 = new Map(kary);
  const toggleExpanded = () => {
    setexpanded((pre) => !pre);
  };

  return (
    <div>
      {expanded && (
        <ExpandedIssueCard
          issue={issue}
          expanded={expanded}
          toggle={toggleExpanded}
        ></ExpandedIssueCard>
      )}
      {issue !== undefined && (
        <div className="card-container" data-tag="card-container">
          <div onClick={toggleExpanded} className="issue-card">
            <div data-tag="issue-description">{issue.summary}</div>
            <div className="status-name" data-tag="assigned-to">
              <img src="man.png"></img> {issue.assigned_to}
            </div>
          </div>
          <p className="issue-type-chip">{map1.get(issue.type)}</p>
        </div>
      )}
    </div>
  );
}
