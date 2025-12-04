import { Navigate, useLocation } from "react-router-dom";
import FrameToChield from "../componentes_dashboard/frame/FrameToChild";
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

  return <FrameToChield />;
};

export default DashboardUserPage;
