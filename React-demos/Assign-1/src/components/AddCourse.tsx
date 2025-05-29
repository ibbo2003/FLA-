import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  const addCourse = async () => {
    const course = {
      title,
      description,
    };
    try {
      await fetch(
        "https://6835c573cd78db2058c317c8.mockapi.io/coursesapp/courses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(course),
        }
        
      );
      nav("/courses");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <h2 className="text-primary my-4"> Add course</h2>
      <div
        id="addCourseform"
        className="border border-2 rounded shadow p-4 bg-light"
      >
        <div className="my-4">
          <label htmlFor="title" className="form-label">
            Enter the Course Title :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="eg : Frontend"
            value={title}
            onChange={(event)=>setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Enter the Course Description :
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Describe your course"
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary" onClick={()=>addCourse()}>Add Course</button>
        </div>
      </div>
    </div>
  );
};
export default AddCourse;
