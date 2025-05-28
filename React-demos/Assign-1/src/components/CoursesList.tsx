import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


interface Course {
  title: string;
  description: string;
  id: number;
}

const CoursesList = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://6835c573cd78db2058c317c8.mockapi.io/coursesapp/courses");
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

   async function deleteCourse(id: number) {
      await fetch(`https://6835c573cd78db2058c317c8.mockapi.io/coursesapp/courses/${id}`, {method : "DELETE"})
      fetchCourses();
  }

  return (
    <div className="container mt-4 text-light bg-light p-4 rounded">
      <h1 className="mb-4 text-dark">Courses</h1>
       <Link to={`/add-course`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Course
      </Link>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope='col'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>
                   <Link
                  to={`/edit-course/${course.id}`}
                  className="btn btn-warning me-3 ms-2"
                >
                  <i className="bi-pencil-square me-2"></i>Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCourse(course.id)}
                >
                  <i className="bi-trash me-2"></i> Delete
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesList;
