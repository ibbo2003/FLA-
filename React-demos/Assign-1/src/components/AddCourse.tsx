import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const nav = useNavigate();

  const addCourse = async () => {
    let isValid = true;
    setDescriptionError("");

    if (title.trim() === "") {
      setTitleError("Title is required");
      alert('title is required');
      isValid = false;
    }

    if (description.trim() === "") {
      setDescriptionError("Description is required");
      isValid = false;
    }

    if (!isValid) {
      return; 
    }

    const course = { title, description };

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
      console.log("Error adding course:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>
      <div className="border border-2 rounded shadow p-4 bg-light">
        <div className="mb-3">
          <label className="form-label">Enter the Course Title:</label>
          <input
            type="text"
            className={`form-control ${titleError ? "is-invalid" : ""}`}
            placeholder="e.g., Frontend"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {titleError && <div className="text-danger mt-1">{titleError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Enter the Course Description:</label>
          <input
            type="text"
            className={`form-control ${descriptionError ? "is-invalid" : ""}`}
            placeholder="Describe your course"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {descriptionError && (
            <div className="text-danger mt-1">{descriptionError}</div>
          )}
        </div>

        <button className="btn btn-primary mt-4" onClick={addCourse}>
          Add Course
        </button>
      </div>
    </div>
  );
};

export default AddCourse;
