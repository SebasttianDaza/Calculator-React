import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import "./Style/CardNumber.scss";
import ErrorFallback from "../../../Errors/handleErrors";

const CardNumber = ({ content, classUnique, classId }) => {
  const classCard =
    classId === 1
      ? "background-color-btn"
      : classId === 2
      ? "background-btn-secondary"
      : classId === 3
      ? "background-btn-third"
      : "background-btn-fourth";

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className={"Button" + " " + classUnique + " " + classCard}>{content}</button>
      </ErrorBoundary>
    </>
  );
};

CardNumber.propTypes = {
  content: PropTypes.string.isRequired,
  classUnique: PropTypes.string,
  classId: PropTypes.number,
};

export default CardNumber;
