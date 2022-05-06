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
    <div className="project-form" data-tag="form-container">
      <h1>Create Project</h1>
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            data-tag="name"
            {...register("name")}
            required
            placeholder="Project Name"
          />
          <input {...register("key")} required placeholder="key" />
          <input
            {...register("description")}
            required
            placeholder="Description"
          />
          <textarea {...register("lead")} required placeholder="Lead" />
          <input type="submit" data-tag="Create Project" />
        </form>
      </div>
    </div>
  );
}
