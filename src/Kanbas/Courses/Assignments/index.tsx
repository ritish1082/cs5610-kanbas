import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import { HiOutlinePencilAlt } from "react-icons/hi";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ControlButtons from "./ControlButtons";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray ">
          <div className="dropdown-toggle wd-title p-3 ps-2 bg-secondary ">
            {" "}
            <BsGripVertical className="me-2 fs-3 " />
            Assignments
            <ControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row assignment-item py-3 align-items-center">
                <div className="col-md-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <HiOutlinePencilAlt className="me-2 fs-3 " color="green" />
                </div>
                <div className="col-md-9">
                  <b>
                    <a
                      className="wd-assignment-link text-decoration-none text-muted"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A1 - ENV + HTML
                    </a>
                  </b>
                  <div className="module-info text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>
                      {" "}
                      <b>Not available until May 6 at 12:00am</b>
                    </span>{" "}
                    |<br />
                    <span>
                      <b>Due</b> May 13 at 11:59pm
                    </span>{" "}
                    |<span> 100 pts</span>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row assignment-item py-3 align-items-center">
                <div className="col-md-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <HiOutlinePencilAlt className="me-2 fs-3 " color="green" />
                </div>
                <div className="col-md-9">
                  <b>
                    <a
                      className="wd-assignment-link text-decoration-none text-muted"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A2 - CSS + BOOTSTRAP
                    </a>
                  </b>
                  <div className="module-info text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>
                      {" "}
                      <b>Not available until May 6 at 12:00am</b>
                    </span>{" "}
                    |<br />
                    <span>
                      <b>Due</b> May 13 at 11:59pm
                    </span>{" "}
                    |<span> 100 pts</span>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="row assignment-item py-3 align-items-center">
                <div className="col-md-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <HiOutlinePencilAlt className="me-2 fs-3 " color="green" />
                </div>
                <div className="col-md-9">
                  <b>
                    <a
                      className="wd-assignment-link text-decoration-none text-muted"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A3 - JAVASCRIPT + REACT
                    </a>
                  </b>
                  <div className="module-info text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>
                      {" "}
                      <b>Not available until May 6 at 12:00am</b>
                    </span>{" "}
                    |<br />
                    <span>
                      <b>Due</b> May 13 at 11:59pm
                    </span>{" "}
                    |<span> 100 pts</span>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <div className="row assignment-item py-3 align-items-center">
                <div className="col-md-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <HiOutlinePencilAlt className="me-2 fs-3 " color="green" />
                </div>
                <div className="col-md-9">
                  <b>
                    <a
                      className="wd-assignment-link text-decoration-none text-muted"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A4 - EXPRESS
                    </a>
                  </b>
                  <div className="module-info text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>
                      {" "}
                      <b>Not available until May 6 at 12:00am</b>
                    </span>{" "}
                    |<br />
                    <span>
                      <b>Due</b> May 13 at 11:59pm
                    </span>{" "}
                    |<span> 100 pts</span>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              {" "}
              <div className="row assignment-item py-3 align-items-center">
                <div className="col-md-1 d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <HiOutlinePencilAlt className="me-2 fs-3 " color="green" />
                </div>
                <div className="col-md-9">
                  <b>
                    <a
                      className="wd-assignment-link text-decoration-none text-muted"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      A5 - STATE + HOOKS
                    </a>
                  </b>
                  <div className="module-info text-muted">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>
                      {" "}
                      <b>Not available until May 6 at 12:00am</b>
                    </span>{" "}
                    |<br />
                    <span>
                      <b>Due</b> May 13 at 11:59pm
                    </span>{" "}
                    |<span> 100 pts</span>
                  </div>
                </div>
                <div className="col-md-2 text-end">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>{" "}
    </div>
  );
}
