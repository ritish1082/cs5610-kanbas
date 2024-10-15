import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid,aid } = useParams();
  const assignment = assignments.find((assignment) => assignment._id === aid);

  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" className="form-control mb-4" value={assignment?.title} />
      <label htmlFor="wd-description">
        <h4>Description</h4>
      </label>
      <textarea
        id="wd-description"
        className="form-control mb-4"
        style={{ height: "200px" }} // Adjust the height as needed
        defaultValue={`The assignment is available online. 
Submit a link to the landing page of your Web application running on Netlify. 
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
      />

      {/* Fields aligned in two columns */}
      <div className="row mb-4">
        <div className="col-lg-4 text-lg-end">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-lg-8">
          <input id="wd-points" className="form-control mb-3" defaultValue={100} />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-4 text-lg-end">
          <label htmlFor="wd-groups" className="form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-lg-8">
          <select id="wd-groups" className="form-select mb-3">
            <option value="1">ASSIGNMENTS</option>
            <option value="2">LABS</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-4 text-lg-end">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-lg-8">
          <select id="wd-display-grade-as" className="form-select mb-3">
            <option value="1">PERCENTAGES</option>
            <option value="2">MARKS</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-4 text-lg-end">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="col-lg-8 border border-1 p-2 rounded">
          <select id="wd-submission-type" className="form-select mb-4">
            <option value="1">ONLINE</option>
            <option value="2">OFFLINE</option>
          </select>
          <p>
            <b>Online Entry Options</b>
          </p>
          <div className="form-check">
            <input type="checkbox" id="wd-text-entry" className="form-check-input" />
            <label htmlFor="wd-text-entry" className="form-check-label">
              Text entry
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-website-url" className="form-check-input" />
            <label htmlFor="wd-website-url" className="form-check-label">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
            <label htmlFor="wd-media-recordings" className="form-check-label">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
            <label htmlFor="wd-student-annotation" className="form-check-label">
              Student Annotations
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" id="wd-file-upload" className="form-check-input" />
            <label htmlFor="wd-file-upload" className="form-check-label">
              File Upload
            </label>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-lg-4 text-lg-end">Assign</div>
        <div className="col-lg-8 border border-2 p-2 rounded">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign to
          </label>
          <input
            type="text"
            id="wd-assign-to"
            className="form-control mb-4"
            defaultValue="Everyone"
          />
          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control mb-4"
            defaultValue="2024-09-19"
          />
          <label htmlFor="wd-available-from" className="form-label">
            Available from
          </label>
          <input
            type="date"
            id="wd-available-from"
            className="form-control mb-4"
            defaultValue="2024-09-19"
          />
          <label htmlFor="wd-available-until" className="form-label">
            Available until
          </label>
          <input
            type="date"
            id="wd-available-until"
            className="form-control mb-4"
            defaultValue="2024-09-19"
          />
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button type="button" className="btn btn-secondary me-2">
            Cancel
          </button>
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button type="submit" className="btn btn-danger">
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}
