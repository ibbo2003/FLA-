// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import UserList from "./components/UserList";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import CoursesList from "./components/CoursesList";
import AddCourse from "./components/AddCourse";
import EditCourse from "./components/EditCourse";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill bg-dark">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<UserList />} />
            <Route path = '/recipe' element={<RecipeList/>}/>
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/courses" element={<CoursesList/>}/>
            <Route path='/add-course' element={<AddCourse/>}/>
            <Route path="/edit-course/:id" element={<EditCourse />} />
            <Route path="/todolist" element={<ToDoList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
