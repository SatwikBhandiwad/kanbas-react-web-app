import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <div style={{ display: "flex", margin: 15 }}>
                <FaBars className="course-menu-icon" style={{ fontSize: 25, marginRight: 20 }} />
                <nav style={{ "--bs-breadcrumb-divider": "''", marginRight: 1200 }} aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page" style={{ "color": "red" }}>{course.number}</li>
                        <li className="breadcrumb-item active" aria-current="page" style={{ "color": "red" }}>{course.name}</li>
                    </ol>
                </nav>
                <button id="home-page-buttons" className="btn btn-light" onclick="location.href = '#'">
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
                        <Route path="Home" element={<h1>Home</h1>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<h1>Assignments</h1>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>

        </div>
    );
}
export default Courses;