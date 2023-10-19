import ModuleList from "../Modules/ModuleList";
import { FaBan, FaCheckCircle, FaFileImport, FaRegBell, FaChartBar, FaCopyright, FaExclamationCircle, FaRegCalendarAlt, FaCalendarAlt } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import './index.css';


function Home() {
    return (
        <div className="d-flex">
            <ModuleList />
            <div style={{marginRight: 10, marginLeft: 5}}>
                <h1>Course Status</h1>

                <button class="btn btn-light wd-home-page-buttons me-2" onclick="location.href = '#'">
                    <FaBan className="icon fas fa-ban me-2" />
                    Unpublish
                </button>
                <button class="btn btn-light wd-home-page-buttons me-5" style={{ backgroundColor: "green", color: "white" }} onclick="location.href = '#'">
                    <FaCheckCircle className="icon fas fa-check-circle me-2" style={{ color: "white" }} />
                    Published
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <FaFileImport className="fas fa-file-import me-2" />
                    Import Existing Content
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <FaCopyright className="me-2" />
                    Import from Commons
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <BiTargetLock className="me-2" />
                    Choose Home Page
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <FaChartBar className="me-2" />
                    View Course Stream
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <HiSpeakerphone className=" me-2" />
                    New Announcement
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <FaChartBar className="me-2" />
                    New Analytics
                </button>
                <br />
                <button class="btn btn-light wd-home-page-buttons-side mt-2" onclick="location.href = '#'">
                    <FaRegBell className="me-2" />
                    View Course Notification
                </button>
                <h5 class="mt-4">To Do</h5>
                <hr />
                <FaExclamationCircle  className="me-2" style={{color:"red", fontSize:"30px"}}/>
                <label style={{color: "red"}}>Grade A1 - ENV + HTML</label>
                <br/>
                <p class="ms-5" style={{"font-size": "0.8em"}}>100 points. Sep 18 at 11:59pm</p>
                <br/>
                <FaExclamationCircle  className="me-2" style={{color:"red", fontSize:"30px"}}/>
                <label style={{color: "red"}}>Grade A2 - CSS + Bootstrap</label>
                <br/>
                <p class="ms-5" style={{"font-size": "0.8em"}}>100 points. Oct 2 at 11:59pm</p>
                <br/>
                
                <label style={{"font-size": "1.5em", "font-weight": "500"}}>Coming Up</label>

                <FaCalendarAlt className="ms-4"/>
                <label style={{color: "red"}}>View Calendar</label>
                <hr/>
                <h5 style={{color: "red"}}><FaCalendarAlt className="me-2"/>Lecture</h5>
                <p class="ms-4" style={{"font-size": "0.8em"}}>Sep 11 at 6pm</p>
                <br/>
                <h5 style={{color: "red"}}><FaCalendarAlt className="me-2"/>Lecture</h5>
                <p class="ms-4" style={{"font-size": "0.8em"}}>Sep 11 at 6pm</p>
            </div>

        </div>
    );
}
export default Home;

