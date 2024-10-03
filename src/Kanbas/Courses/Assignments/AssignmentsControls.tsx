import { FaPlus } from "react-icons/fa"; // Importing the plus and search icons

export default function ModulesControls() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="search-bar">
          <input
            className="form-control flex-grow-1 d-inline "
            type="search"
            placeholder="Search..."
          />
        </div>

        <div>
          <button id="wd-group-btn" className="btn btn-lg btn-secondary me-2">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </button>
          <button id="wd-group-btn" className="btn btn-lg btn-danger me-2">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
          </button>
        </div>
      </div>
    </div>
  );
}
