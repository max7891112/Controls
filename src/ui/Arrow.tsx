import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

export const Arrow: React.FC<{
  className: string;
  way: string;
  tooltip: string;
}> = ({ className, way, tooltip }) => {
  return (
    <Link to={way}>
      <Tooltip title={tooltip} placement="bottom">
        <svg
          id="Layer_1"
          viewBox="0 0 100 100"
          data-name="Layer 1"
          className={className}
        >
          <path d="m99.12 47.88-26.87-26.88a3 3 0 1 0 -4.25 4.25l21.76 21.75h-86.76a3 3 0 0 0 0 6h86.76l-21.76 21.75a3 3 0 1 0 4.25 4.25l26.87-26.88a3 3 0 0 0 0-4.24z"></path>
        </svg>
      </Tooltip>
    </Link>
  );
};
