export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <div>
        <button type="submit" id="wd-collapse">
          Collase All
        </button>
        <button type="submit" id="wd-view-progress">
          View Progress
        </button>
        <button type="submit" id="wd-publish-all">
          Publish All
        </button>
        <button type="submit" id="wd-module">
          + Module
        </button>
      </div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">HTML</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Semantics</li>
                <li className="wd-content-item">Creating HTML Pages</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">CSS & Bootstrap</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Basics</li>
                <li className="wd-content-item">Bootstrap in HTML</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
