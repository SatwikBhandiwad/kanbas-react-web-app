import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="wd-flex-grow-1" style={{ marginRight: 20 }}>
      <div style={{ "float": "right" }}>
        <button className="btn btn-light wd-home-page-buttons me-2" onclick="location.href = '#'">
          Collapse All
        </button>
        <button className="btn btn-light wd-home-page-buttons me-2" onclick="location.href = '#'">
          View Progress
        </button>
        <button className="btn btn-light wd-home-page-buttons dropdown-toggle me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaCheckCircle className="far fa-check-circle me-1" />
          Dropdown button
        </button>
        <button class="btn btn-light wd-home-page-buttons me-2" onclick="location.href = '#'" style={{ "color": "white", "background-color": "red" }}>
          <FaPlus className="fas fa-plus" style={{ color: "white" }} />
          Module
        </button>
        <button className="btn btn-light wd-home-page-buttons" onclick="location.href = '#'">
          <FaEllipsisV className="icon fa-ellipsis-v" style={{ "font-size": 25 }} />
        </button>

      </div>
      <br />
      <br />
      <hr />
      <ul className="list-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <React.Fragment key={index}>
                <li className="list-group-item list-group-item-secondary wd-module-items">
                  {module.name}
                  
                  <FaEllipsisV className="icon fa-ellipsis-v wd-module-icons"/>
                  <FaPlus className="fas fa-plus wd-module-icons" />
                  <FaCheckCircle className="far fa-check-circle wd-module-icons" style={{color: "green"}} />
                </li>
                <li className="list-group-item wd-module-items" style={{ borderRadius: 0 }}>
                  {module.description}
                  <FaEllipsisV className="icon fa-ellipsis-v wd-module-icons"/>    
                  <FaCheckCircle className="far fa-check-circle wd-module-icons" style={{color: "green"}} />
                </li>
                <br />
                <br />
              </React.Fragment>

            ))
        }
      </ul>
    </div>



  );
}
export default ModuleList;