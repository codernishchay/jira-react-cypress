import bcryptjs from "bcryptjs";
import { useForm } from "react-hook-form";
import "./issue-form.css";
import { DataContext } from "../dataContext";
import { useContext } from "react";

export default function IssueForm({ setExpanded }) {
  const { appendIssuelist } = useContext(DataContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    var salt = bcryptjs.genSaltSync(10);
    data.issueId = bcryptjs.hashSync(data.toString(), salt);
    data.status = "A";
    appendIssuelist(data);
    setExpanded(false);
  };

  return (
    <div className="issue-form-container" data-tag="form-container">
      <h1>Create Issue</h1>
      <div className="boxx">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-text">Summary</div>

          <input
            data-tag="description"
            {...register("summary")}
            placeholder="Summary"
          />
          <div className="form-text">Description</div>

          <textarea
            data-tag="assigned_to"
            {...register("description")}
            required
            placeholder="Description"
          />
          <div className="form-text">Issue Type</div>
          <select {...register("type")} data-tag="status">
            <option value="A">Story</option>
            <option value="B">Task</option>
            <option value="C">Bug</option>
            <option value="D">Epic</option>
          </select>

          <input
            data-tag="assigned_to"
            {...register("assigned_to")}
            required
            placeholder="Assigned To"
          />
          <input type="submit" data-tag="submit" />
          <button onClick={() => setExpanded(false)}> Cancel </button>
        </form>
      </div>
    </div>
  );
}
