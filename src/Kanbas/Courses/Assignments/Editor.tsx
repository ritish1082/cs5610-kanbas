import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment } from "./reducer";
import { useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  console.log(assignments);

  const assignment = assignments.find((assignment: any) => assignment._id === aid);

  console.log(currentUser);

  const disabled = currentUser.role !== "FACULTY";

  const [formData, setFormData] = useState({
    name: assignment?.title,
    course: cid,
    description: assignment?.description,
    points: assignment?.points,
    dueDate: assignment?.dueDate,
    availableFrom: assignment?.availableFrom,
    availableUntil: assignment?.availableUntil,
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("In editor data", formData);

    dispatch(
      addAssignment({
        title: formData.name,
        description: formData.description,
        point: formData.points,
        dueDate: formData.dueDate,
        availableFrom: formData.availableFrom,
        availableUntil: formData.availableUntil,
        course: formData.course,
      })
    );

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3>Assignment Name</h3>
        </label>
        <input
          id="name"
          className="form-control mb-4"
          value={formData.name}
          defaultValue={"Assignment name "}
          onChange={handleChange}
          disabled={disabled}
        />
        <label htmlFor="description">
          <h4>Description</h4>
        </label>
        <textarea
          id="description"
          className="form-control mb-4"
          style={{ height: "200px" }}
          value={formData.description}
          defaultValue={`The assignment is available online. 
Submit a link to the landing page of your Web application running on Netlify. 
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.`}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-lg-8">
            <input
              id="points"
              type="number"
              className="form-control mb-3"
              value={formData.points}
              defaultValue={100}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="dueDate" className="form-label">
              Due Date
            </label>
          </div>
          <div className="col-lg-8">
            <input
              type="date"
              id="dueDate"
              className="form-control mb-4"
              value={formData.dueDate}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="availableFrom" className="form-label">
              Available From
            </label>
          </div>
          <div className="col-lg-8">
            <input
              type="date"
              id="availableFrom"
              className="form-control mb-4"
              value={formData.availableFrom}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-4 text-lg-end">
            <label htmlFor="availableUntil" className="form-label">
              Available Until
            </label>
          </div>
          <div className="col-lg-8">
            <input
              type="date"
              id="availableUntil"
              className="form-control mb-4"
              value={formData.availableUntil}
              onChange={handleChange}
              disabled={disabled}
            />
          </div>
        </div>
        {disabled ? (
          <></>
        ) : (
          <div className="d-flex justify-content-end">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
              <button type="button" className="btn btn-secondary me-2">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn btn-warning" disabled={disabled}>
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
