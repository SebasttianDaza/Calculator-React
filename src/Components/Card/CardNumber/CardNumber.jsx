import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import "./Style/CardNumber.scss";
import ErrorFallback from "../../../Errors/handleErrors";

const CardNumber = ({ content, classUnique }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className={"Button" + " " + classUnique}>
          {
            //lowercase the content
            content.toLowerCase()
          }
        </button>
      </ErrorBoundary>
    </>
  );
};

CardNumber.propTypes = {
  content: PropTypes.string.isRequired,
  classUnique: PropTypes.string,
};

export default CardNumber;
