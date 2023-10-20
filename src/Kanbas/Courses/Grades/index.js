import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileExport, FaFileImport } from "react-icons/fa";
import { AiFillSetting, AiFillFilter } from "react-icons/ai";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="me-5">
            <button class="btn btn-light wd-home-page-buttons mt-2 me-5 float-end" onclick="location.href = '#'">
                <AiFillSetting />
            </button>

            <button class="btn btn-light wd-home-page-buttons mt-2 me-3 float-end" onclick="location.href = '#'">
                <FaFileImport className="fas fa-file-import me-2" />
                Export
            </button>
            <button class="btn btn-light wd-home-page-buttons mt-2 me-3 float-end" onclick="location.href = '#'">
                <FaFileImport className="fas fa-file-import me-2" />
                Import
            </button>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-6"><label>Student Name</label></div>
                <div class="col-6"><label >Assignment Name</label></div>
            </div>
            <div class="row">
                <div class="col-6"><input class="form-control" type="text" id="profile-name" placeholder="Search Student" /></div>
                <div class="col-6"><input class="form-control" type="text" id="profile-name" placeholder="Search Assignment" /></div>
            </div>

            <button class="btn btn-light mt-4 me-4" onclick="location.href = '#'">
                <AiFillFilter />
                Apply Filters
            </button>
            <br />
            <br />
            <div className="table-responsive">

                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;
