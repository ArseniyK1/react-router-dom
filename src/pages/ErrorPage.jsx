import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error("ERROR = ", error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
      <Link to="/">
        <button>Go home!</button>
      </Link>
    </div>
  );
}
