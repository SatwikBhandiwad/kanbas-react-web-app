import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses({ courses }) {
    const { courseId } = useParams();
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/api/courses`;
    
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    return (
        <div>
            <div style={{ display: "flex", margin: 15 }}>
                <FaBars className="course-menu-icon" style={{ fontSize: 25, marginRight: 20 }} />
                <nav style={{ "--bs-breadcrumb-divider": "''" }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page" style={{ "color": "red" }}>{course.number}</li>
                        <li className="breadcrumb-item active" aria-current="page" style={{ "color": "red" }}>{course.name}</li>
                    </ol>
                </nav>
                <button className="btn btn-light wd-home-page-buttons me-5" style={{ float: "right", marginLeft: "auto" }} onclick="location.href = '#'">
                    <FaGlasses className="fas fa-glasses" style={{ marginRight: 10 }} />
                    Student View
                </button>
            </div>
            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "100px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;