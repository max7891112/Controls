import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Oops, something went wrong</h1>
      <p>Try again later</p>
      <Link to="/">Go home page</Link>
    </div>
  );
};
