import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="mt-5">
      <h1 className="text-center">Profile</h1>
      <div className="mb-3">
        <input id="wd-username" placeholder="username" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-password" placeholder="password" type="password" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-firstname" placeholder="First Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-lastname" placeholder="Last Name" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-dob" placeholder="2000-01-01" type="date" className="form-control" />
      </div>
      <div className="mb-3">
        <input id="wd-email" placeholder="alice@wonderland" type="email" className="form-control" />
      </div>
      <div className="mb-3">
        <select id="wd-role" className="form-select">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
