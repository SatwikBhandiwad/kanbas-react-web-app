import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiSolidHelpCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaCopyright, FaInbox } from "react-icons/fa";
import { BsFillCalendar2WeekFill, BsClockHistory, BsFillPlayBtnFill } from "react-icons/bs";
import NuLogo from "../../images/NU-logo.png"
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio","Commons", "Help"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <FaInbox className="wd-icon" />,
        History: <BsClockHistory className="wd-icon" />,
        Studio: <BsFillPlayBtnFill className="wd-icon" />,
        Commons: <FaCopyright className="wd-icon" />,
        Help: <BiSolidHelpCircle className="wd-icon" />,
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation col-1" style={{ width: 85, padding: 0 }}>
            <img src={NuLogo} style={{ maxWidth: 100, margin: 10, height: 'auto' }}/>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    {linkToIconMap[link]}
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;