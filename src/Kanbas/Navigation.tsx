import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <div
        id="wd-kanbas-navigation"
        style={{ width: 120 }}
        className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
      >
        <a
          id="wd-neu-link"
          target="_blank"
          href="https://www.northeastern.edu/"
          className="list-group-item bg-black border-0 text-center"
          rel="noreferrer"
        >
          <img src="/images/NEU.png" width="75px" alt="NEU" />
        </a><br />

        <NavLink
          to="/Kanbas/Account"
          id="wd-account-link"
          className="list-group-item text-center border-0"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "black",
            color: isActive ? "red" : "white",
          })}
        >
          <FaRegCircleUser className="fs-1 text-secondary" />
          Account{" "}
        </NavLink>
        <NavLink
          to="/Kanbas/Dashboard"
          id="wd-dashboard-link"
          className="list-group-item text-center border-0"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "black",
            color: isActive ? "red" : "white",
          })}
        >
          <AiOutlineDashboard className="fs-1 text-danger" />
          Dashboard{" "}
        </NavLink>
        <NavLink
          to="/Kanbas/Courses"
          id="wd-course-link"
          className="list-group-item text-center border-0"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "black",
            color: isActive ? "red" : "white",
          })}
        >
          <LiaBookSolid className="fs-1 text-danger" />
          Courses{" "}
        </NavLink>
        <NavLink
          to="/Kanbas/Calendar"
          id="wd-calendar-link"
          className="list-group-item text-center border-0"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "black",
            color: isActive ? "red" : "white",
          })}
        >
          <IoCalendarOutline className="fs-1 text-danger" />
          Calendar{" "}
        </NavLink>

        <NavLink
          to="/Kanbas/Inbox"
          id="wd-inbox-link"
          className="list-group-item text-center border-0"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "black",
            color: isActive ? "red" : "white",
          })}
        >
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox{" "}
        </NavLink>

        <NavLink
          to="/#/Labs"
          id="wd-inbox-link"
          className="list-group-item text-center border-0"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "white" : "black",
            color: isActive ? "red" : "white",
          })}
        >
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          Labs{" "}
        </NavLink>
      </div>
    </div>
  );
}
