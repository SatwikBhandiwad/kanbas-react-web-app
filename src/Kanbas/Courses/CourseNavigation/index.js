import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links =  ["Home", "Modules", "Piazza", "ZoomMeetings", "Assignments", "Quizzes", "Grades", "People",
  "PanoptoVideo", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
  "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="wd-course-navigation list-group" style={{ width: 150, borderRadius: 0 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;