import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

// обертка которая позволяет нам узнать откуда мы пришли благодаря state и проверка на то, попадаем ли мы на приватную страницу или нет
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
