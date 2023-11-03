import db from "../Database";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <br/>
            <h4>Add/Update Course</h4>
            <input value={course.name} className="form-control mb-3" style={{width: '30%'}}
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control mb-3" style={{width: '30%'}}
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control mb-3" type="date" style={{width: '30%'}}
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date" style={{width: '30%'}}
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <button onClick={addNewCourse} className="btn btn-success mt-3">
                Add
            </button>

            <button onClick={updateCourse} className="btn btn-primary ms-3 mt-3" >
                Update
            </button>
            <div class="row">
                {courses.map((course, index) => (
                    <div className="card col-3" style={{ width: 260, margin: 30, padding: 0 }}>
                        <Link
                            key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="wd-card-style "
                        >

                            <div className="card-body" style={{ padding: 0 }}>
                                <div style={{ backgroundColor: course.courseColor, height: 180 }}>
                                    <FaEllipsisV className="icon fa-ellipsis-v" style={{ margin: 10, color: "#ffffff", fontSize: 30, float: "right" }} />
                                </div>
                                <div style={{ margin: 10 }}>
                                    <h5 className="card-title"> {course.name}</h5>
                                    <h6>{course.number}</h6>
                                    <p>202410_Fall 2023 Semester Full Term</p>

                                    <button
                                        className="btn btn-danger mt-2 mb-2 float-end"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>

                                    <button
                                        className="btn btn-warning me-3 mt-2 mb-2 float-end"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>





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