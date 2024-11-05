import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { cid } = useParams(); 
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  // Check if the user is enrolled in the course with the given ID
  const isEnrolled = enrollments.some(
    (enrollment: any) => enrollment.user === currentUser?._id && enrollment.course === cid
  );

  if (!isEnrolled) {
    // Redirect to an "Access Denied" page or login if not enrolled
    return <Navigate to="/Kanbas/Dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
