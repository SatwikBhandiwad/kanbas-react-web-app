import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { FaEllipsisV, FaPlus, FaCheckCircle, FaSortDown, FaGripVertical, FaEdit } from "react-icons/fa";
import {
    addAssignment, deleteAssignment,
    updateAssignment, setAssignment
} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    const displayEditor = () => {
        dispatch(setAssignment(assignment))
        navigate(`/Kanbas/Courses/${courseId}/Assignments/createAssignment`)
    };

    return (
        <div style={{ marginRight: 200 }}>

            <input style={{ "width": "auto", "display": "inline-block" }} className="form-control" type="text" placeholder="Search for assignments" />
            <button className="btn btn-light wd-home-page-buttons" style={{ float: "right" }} onclick="location.href = '#'">
                <FaEllipsisV className="icon fa-ellipsis-v" style={{ "font-size": 25 }} />
            </button>
            <button className="btn btn-light wd-home-page-buttons me-2" onClick={displayEditor} style={{ float: "right", "color": "white", "background-color": "red" }}>
                <FaPlus className="fas fa-plus me-2" style={{ color: "white" }} />
                Assignment
            </button>
            <button className="btn btn-light wd-home-page-buttons me-2" style={{ float: "right" }} onclick="location.href = '#'">
                <FaPlus className="fas fa-plus me-2" />
                Group
            </button>
            <br />
            <br />
            <br />

            <div className="list-group me-5" style={{ borderRadius: 0 }}>
                <li className="list-group-item list-group-item-secondary wd-module-items ">
                    <FaGripVertical className="me-2" />
                    <FaSortDown className="me-2" />
                    <span >
                        ASSIGNMENTS

                    </span>


                    <FaEllipsisV className="icon fa-ellipsis-v wd-module-icons" />
                    <FaPlus className="fas fa-plus wd-module-icons" />
                    <label className="float-end wd-assignments-total me-5">
                        40% of total
                    </label>
                </li>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        onClick={() => {
                            dispatch(setAssignment(assignment));
                        }}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item wd-assignment-border">
                        <FaGripVertical className="me-4" />
                        <FaEdit className="me-4" />
                        <label className="wd-assignment-title"> {assignment.title} </label>
                        <p className="ms-5 ps-5">
                            <label style={{ color: "red" }}> Multiple Modules </label> | Due: {assignment.dueDate} | {assignment.points} pts
                            <FaEllipsisV className="float-end me-3" />
                            <FaCheckCircle className="float-end me-3" />

                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;

