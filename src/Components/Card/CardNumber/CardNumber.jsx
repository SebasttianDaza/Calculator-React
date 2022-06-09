import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import "./Style/CardNumber.scss";
import ErrorFallback from "../../../Errors/handleErrors";

const CardNumber = ({ content }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className="Button">{content}</button>
      </ErrorBoundary>
    </>
  );
};

CardNumber.propTypes = {
  content: PropTypes.string.isRequired,
};

export default CardNumber;
