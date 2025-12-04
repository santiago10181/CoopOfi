import { Navigate, useLocation } from "react-router-dom";
import DashboardUser from "../componentes_dashboard/dashboard_user/layout/DashboardUser";
import { useAuth } from "../PrivateRoutes/AuthContext";

const DashboardUserPage = () => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return (
      <Navigate
        to="/CoopOfi/login/"
        state={{ from: location }}
        replace
      />
    );
  }

  return <DashboardUser />;
};

export default DashboardUserPage;
