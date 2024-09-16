export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <table>
        <tr>
          <td align="right" valign="top">
            <textarea id="wd-description">
              The assignment is available online Submit a link to the landing page of
            </textarea>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-groups">Assignment Group</label>
          </td>
          <td>
            <select id="wd-points">
              <option value="1">ASSIGNMENTS</option>
              <option value="2">LABS</option>
            </select>
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="1">PERCENTAGES</option>
              <option value="2">MARKS</option>
            </select>
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="1">ONLINE</option>
              <option value="2">OFFLINE</option>
            </select>
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="">Online Entry Options</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="wd-text-entry" />
          </td>
          <td>
            <label htmlFor="wd-text-entry">Text entry</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              id="wd-website-url"
              name="wd-website-url"
              value="wd-website-url"
            />
          </td>
          <td>
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              id="wd-media-recordings"
              name="wd-media-recordings"
              value="wd-media-recordings"
            />
          </td>
          <td>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              id="wd-student-annotation"
              name="wd-student-annotation"
              value="wd-student-annotation"
            />
          </td>
          <td>
            <label htmlFor="wd-student-annotation">Student Annotations</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <input
              type="checkbox"
              id="wd-file-upload"
              name="wd-file-upload"
              value="wd-file-upload"
            />
          </td>
          <td>
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input type="text" id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label>
          </td>
          <td>
            <input type="date" id="wd-due-date" value="2024-09-19" />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <input type="date" id="wd-available-from" value="2024-09-19" />
          </td>
        </tr>
        <br />

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input type="date" id="wd-available-until" value="2024-09-25" />
          </td>
        </tr>
        <tr></tr>
      </table>

      <hr />
      <table>
        <tr>
          <td align="right" valign="top">
            <button type="submit">Cancel</button>
            <button type="submit">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
