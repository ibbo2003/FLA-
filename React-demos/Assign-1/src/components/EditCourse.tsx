import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`https://6835c573cd78db2058c317c8.mockapi.io/coursesapp/courses/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [id]);

  const editCourse = async () => {
    try {
      await fetch(`https://6835c573cd78db2058c317c8.mockapi.io/coursesapp/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      nav("/courses");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">Edit Course</h2>
      <div
        id="editCourseForm"
        className="border border-2 rounded shadow p-4 bg-light"
      >
        <div className="my-4">
          <label htmlFor="title" className="form-label">
            Course Title:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Frontend"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Course Description:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Describe your course"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary" onClick={editCourse}>
            Update Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;
