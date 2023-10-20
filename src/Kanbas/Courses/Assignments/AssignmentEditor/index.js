import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaEllipsisV, FaCheckCircle, FaCalendar } from "react-icons/fa";
import "./index.css";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
                <input type="text" class="form-control" id="assignment-name" value={assignment.title} />
            </div>
            <div class="mb-4">

                <textarea class="form-control" id="textarea1" rows="3">This is the assignment descriptionThis is the assignment descriptionThis is the assignment description
                </textarea>
            </div>

            <div class="row mb-4">
                <div class="ms-4 col-3">
                    <label for="points" class="float-end form-label mt-2">
                        Points
                    </label>
                </div>
                <div class=" col-4">
                    <input type="number" min="0" max="100" step="1" class="form-control" id="points" value={assignment.points} />
                </div>
            </div>
            <div class="row mb-4">
                <div class="ms-4 col-3">
                    <label for="as-group" class="float-end form-label mt-2">
                        Assignment Group
                    </label>
                </div>
                <div class="col-4">
                    <select id="as-group" class="form-select">
                        <option selected>ASSIGNMENTS</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>

            <div class="row mb-4">
                <div class="ms-4 col-3">
                    <label for="assign" class="float-end form-label mt-2">
                        Group Assignment
                    </label>
                </div>
                <div class="col-4" style={{ "border": "1px solid #dedede", "border-radius": "0" }}>
                    <input type="checkbox" for="gp-as" />
                    <label class="form-label ms-2" id="gp-as">
                        This is a Group Assignment
                    </label>
                </div>

            </div>

            <div class="row mb-4">
                            <div class="ms-4 col-3">
                                <label for="assign" class="float-end form-label mt-2">
                                    Assign
                                </label>
                            </div>  
                            <div class="col-4" style={{"border": "1px solid #dedede"}}>
                                <label style={{"font-weight": "550"}} for="assignto" class="form-label mt-2">
                                    Assign to
                                </label>
                                <input type="text" class="form-control mb-1" id="assignto" value="Everyone"/>
                                <label style={{"font-weight": "550"}} for="duedate" class="form-label mt-2">
                                    Due
                                </label>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control mb-1" id="duedate" value={assignment.dueDate}/>
                                    <span class="input-group-text"><FaCalendar/></span>
                                    
                                </div>
                                <span class="input-group-text" > + Add </span>
                            </div>
                        </div>


            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
                Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-success float-end me-2">
                Save
            </button>
        </div>
    );
}


export default AssignmentEditor;

