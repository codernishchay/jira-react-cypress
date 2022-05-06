import IssueCard from "./issue-card";
import React from "react";
import "./issue-card.css";
import { useData } from "../dataContext";
import { useEffect, useState } from "react";

export default function IssueCards() {
  const [list, setlist] = useState([]);
  const [todoList, settodoList] = useState([]);
  const [doneList, setdoneList] = useState([]);
  const [inProgressList, setinProgressList] = useState([]);
  const [blockedList, setblockedList] = useState([]);
  const { issuelist, searchlist } = useData();

  useEffect(() => {
    settodoList((pre) => list.filter((ele) => ele.status === "A"));
    setdoneList((pre) => list.filter((ele) => ele.status === "C"));
    setinProgressList((pre) => list.filter((ele) => ele.status === "B"));
    setblockedList((pre) => list.filter((ele) => ele.status === "D"));
  }, [list]);

  useEffect(() => {
    if (searchlist !== undefined) {
      setlist(searchlist);
    } else {
      setlist(issuelist);
    }
  }, [searchlist, issuelist]);

  return (
    <div className="issue-cards">
      <div className="issue-cards-column">
        <p>To Do {todoList.length} issues</p>
        <div className="issue-card-section" id="ics1">
          {todoList &&
            todoList.map((issue) => {
              return <IssueCard key={issue.issueId} issue={issue} />;
            })}
        </div>
      </div>
      <div className="issue-cards-column">
        <p>In progress {inProgressList.length} issues</p>
        <div className="issue-card-section">
          {inProgressList &&
            inProgressList.map((issue) => {
              return <IssueCard key={issue.issueId} issue={issue} />;
            })}
        </div>
      </div>
      <div className="issue-cards-column">
        <p>Done {doneList.length} issues</p>
        <div className="issue-card-section">
          {doneList &&
            doneList.map((issue) => {
              return <IssueCard key={issue.issudId} issue={issue} />;
            })}
        </div>
      </div>
      <div className="issue-cards-column">
        <p>Blocked {blockedList.length} issues</p>
        <div className="issue-card-section">
          {blockedList &&
            blockedList.map((issue) => {
              return <IssueCard key={issue.issudId} issue={issue} />;
            })}
        </div>
      </div>
    </div>
  );
}
