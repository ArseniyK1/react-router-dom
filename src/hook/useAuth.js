import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

// этот хук нужен, чтобы на каждой странице/компоненте не писать одни и те же импорты
export function useAuth() {
  return useContext(AuthContext);
  // вызов этого хука приведет к тому, что мы получим данные из value, которые мы передавали в провайдер контекста
}
