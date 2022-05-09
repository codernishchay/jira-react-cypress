import bcryptjs from "bcryptjs";
import { useForm } from "react-hook-form";
import { DataContext } from "../dataContext";
import { useContext } from "react";
import "./createProjectForm.css";

export default function CreateProjectForm() {
  const { setproject, setisCreating } = useContext(DataContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setisCreating(false);
    setproject(data);
  };

  return (
    <div className="project-form" data-tag="project-form">
      <h1>Create Project</h1>
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            data-tag="pf-name"
            {...register("name")}
            required
            placeholder="Project Name"
          />
          <input {...register("key")}  placeholder="key" />
          <textarea
            {...register("description")}
            required
            data-tag="pf-description"
            placeholder="Description"
          />
          <input data-tag="pf-lead" {...register("lead")} required placeholder="Lead" />
          <input   type="submit" data-tag="pf-submit" />
        </form>
      </div>
    </div>
  );
}
