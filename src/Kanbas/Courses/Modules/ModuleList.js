import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV, FaPlus, FaCheckCircle, FaGripVertical } from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();



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
        <div>
          <h3>Add/Update Module</h3>
          <input value={module.name} className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))

            }
          />
          <br />
          <textarea className="form-control" value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
          <br />
          <button className="btn btn-success wd-home-page-buttons mb-4 me-3" style={{ "width": 60 }}
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>

          <button className="btn btn-primary wd-home-page-buttons mb-4" style={{ "width": 80 }}
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
        </div>



        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <React.Fragment key={index}>
                <li className="list-group-item list-group-item-secondary wd-module-items">
                  <FaGripVertical className="me-2" />
                  {module.name}



                  <FaEllipsisV className="icon fa-ellipsis-v wd-module-icons" />
                  <FaPlus className="fas fa-plus wd-module-icons" />
                  <FaCheckCircle className="far fa-check-circle wd-module-icons" style={{ color: "green" }} />
                  <button
                    className="btn btn-success float-end me-4 wd-home-page-buttons"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>


                  <button
                    className="btn btn-danger float-end me-4 wd-home-page-buttons"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>

                </li>
                <li className="list-group-item wd-module-items" style={{ borderRadius: 0 }}>
                  <FaGripVertical className="me-2" />
                  {module.description}
                  <FaEllipsisV className="icon fa-ellipsis-v wd-module-icons" />
                  <FaCheckCircle className="far fa-check-circle wd-module-icons" style={{ color: "green" }} />
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