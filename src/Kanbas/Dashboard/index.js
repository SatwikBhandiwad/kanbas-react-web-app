import db from "../Database";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div class="row">
                    {courses.map((course, index) => (
                            <div className="card col-3" style={{ width: 260, margin: 30, padding: 0 }}>
                            <Link
                            key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="wd-card-style "
                            >

                                <div className="card-body" style={{padding: 0}}>
                                    <div style={{ backgroundColor: course.courseColor, height: 180}}>
                                        <FaEllipsisV className="icon fa-ellipsis-v" style={{ margin: 10, color: "#ffffff", fontSize: 30, float: "right" }} />
                                    </div>
                                    <div style={{margin: 10}}>
                                        <h5 className="card-title"> {course.name}</h5>
                                        <h6>{course.number}</h6>
                                        <p>202410_Fall 2023 Semester Full Term</p>
                                        
                                    </div>
                                </div>
                                </Link>
                            </div>
                        
                    ))}
            </div>
        </div>
    );
}

export default Dashboard;