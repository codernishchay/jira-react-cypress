import React from "react";
import Header from "../header/header";
import { useState } from "react";
import { useData } from "../dataContext";
import CreateProjectForm from "../createProjectForm/createProjectForm";
import IssueCards from "../issue-card/issue-cards";
import IssueForm from "../issue-form/issue-form";
import "./baseComponent.css";
export default function BaseComponent() {
  const { project, isCreatingIssue } = useData();
  return (
    <div className="base-component">
      {project !== undefined && (
        <div className="issue-section">
          <Header></Header>
          <IssueCards></IssueCards>
          {isCreatingIssue && <IssueForm></IssueForm>}
        </div>
      )}
      {project === undefined && <CreateProjectForm></CreateProjectForm>}
    </div>
  );
}
