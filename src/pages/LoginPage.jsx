import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;
    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={submitHandler}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="username"
            placeholder="username"
            style={{ color: "black" }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
