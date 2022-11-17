import { Outlet, Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

interface Props {
  isAuthRequired: boolean;
  redirectUrl: string;
}

const RequireAuth = ({ isAuthRequired, redirectUrl }: Props) => {
  const cookies = new Cookies();
  const token = cookies.get("access_token");

  if (isAuthRequired && !token) {
    alert("토큰이 만료되었습니다.");
    return <Navigate to={redirectUrl} replace />;
  }
  if (!isAuthRequired && !!token) {
    alert("이미 로그인 되었습니다.");
    return <Navigate to={redirectUrl} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
