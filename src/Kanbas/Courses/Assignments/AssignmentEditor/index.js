import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaCheckCircle, FaCalendar } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, setAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        if (assignmentId === "createAssignment") {
            dispatch(setAssignment(assignment))
            dispatch(addAssignment(assignment));
        }
        else {
            dispatch(updateAssignment(assignment));
        }
    };
    return (
        <div className="me-5">
            <button className="btn btn-light wd-home-page-buttons float-end me-5" onclick="location.href = '#'">
                <FaEllipsisV style={{ "font-size": "25px" }} />
            </button>
            <span className="float-end me-4 mt-2">
                <FaCheckCircle class="me-2" />
                Published
            </span>
            <br />
            <br />
            <br />
            <div class="mb-4">
                <label for="assignment-name" class="form-label">
                    Assignment Name</label>
                <input type="text" class="form-control" id="assignment-name"
                    onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                    value={assignment.title} />
            </div>
            <div class="mb-4">

                <textarea class="form-control" id="textarea1" rows="3"
                    onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, description: e.target.value }))}
                    value={assignment.description}>
                </textarea>
            </div>

            <div class="row mb-4">
                <div class="ms-4 col-3">
                    <label for="points" class="float-end form-label mt-2">
                        Points
                    </label>
                </div>
                <div class=" col-4">
                    <input type="text" class="form-control" id="points" 
                    onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, points: e.target.value }))}
                    value={assignment.points} />
                </div>
            </div>



            <div class="row mb-4">
                <div class="ms-4 col-3">
                    <label for="assign" class="float-end form-label mt-2">
                        Assign
                    </label>
                </div>
                <div class="col-4" style={{ "border": "1px solid #dedede" }}>
                    <label style={{ "font-weight": "550" }} for="assignto" class="form-label mt-2">
                        Assign to
                    </label>
                    <input type="text" class="form-control mb-1" id="assignto" value="Everyone" />
                    <label style={{ "font-weight": "550" }} for="duedate" class="form-label mt-2">
                        Due
                    </label>
                    <div class="input-group mb-3">
                        <input type="date" className="form-control mb-1" id="duedate"
                            onChange={(e) =>
                                dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
                            value={assignment.dueDate} />

                    </div>

                    <div class="row">
                        <div class="col">
                            <label style={{ "font-weight": "550" }} for="availableFromDate" class="form-label mt-2">
                                Available from
                            </label>
                        </div>
                        <div class="col">
                            <label style={{ "font-weight": "550" }} for="availableUntilDate" class="form-label mt-2">
                                Until
                            </label>
                        </div>
                    </div>

                    <div class="row mb-2">
                        <div class="col">
                            <input type="date" className="form-control mb-1" id="availableFromDate"
                                onChange={(e) =>
                                    dispatch(setAssignment({ ...assignment, availableFrom: e.target.value }))}
                                value={assignment.availableFrom} />

                        </div>
                        <div class="col">
                            <input type="date" className="form-control mb-1" id="availableUntilDate"
                                onChange={(e) =>
                                    dispatch(setAssignment({ ...assignment, availableUntil: e.target.value }))}
                                value={assignment.availableUntil} />
                        </div>
                    </div>

                </div>
            </div>


            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
                Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
                <button onClick={handleSave} className="btn btn-success float-end me-2">
                    Save
                </button>
            </Link>
        </div>
    );
}


export default AssignmentEditor;

