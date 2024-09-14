import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <>
      <h1>dfghjkl;</h1>
      <table id="wd-home">
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <CourseStatus />
          </td>
        </tr>
      </table>
    </>
  );
}
