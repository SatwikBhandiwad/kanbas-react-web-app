import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="wd-flex-grow-1" style={{marginRight: 20}}>
      <div style={{"float": "right"}}>
        <button className="btn btn-light" onclick="location.href = '#'">
          Collapse All
        </button>
        <button className="btn btn-light" onclick="location.href = '#'">
          View Progress
        </button>
        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaCheckCircle className="far fa-check-circle" />
          Dropdown button
        </button>
        <button class="btn btn-light wd-home-page-buttons" onclick="location.href = '#'" style={{ "color": "white", "background-color": "red" }}>
          <FaPlus className="fas fa-plus" style={{color: "white"}} />
          Module
        </button>
        <button className="btn btn-light" onclick="location.href = '#'">
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
              <li className="list-group-item list-group-item-secondary" style={{borderRadius: 0}}>
                <h3>{module.name}</h3>
              </li>
              <li className="list-group-item" style={{borderRadius: 0}}>
                {module.description}
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