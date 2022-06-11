import { useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import "./Style/CardNumber.scss";
import ContextWork from "../../../Context/ContextWork";
import ErrorFallback from "../../../Errors/handleErrors";

const CardNumber = ({ content, classUnique, classId }) => {
  const { work, setWork } = useContext(ContextWork);
  const classCard =
    classId === 1
      ? "background-color-btn"
      : classId === 2
      ? "background-btn-secondary"
      : classId === 3
      ? "background-btn-third"
      : "background-btn-fourth";

  const handleClick = (e) => {
    if (e.target.classList.contains("background-color-btn")) {
      //Contactenar el numero anterior con el actual
      const newWork = work.work.toString() + content.toString();
      if (work.work.length < 16) {
        setWork((prevState) => {
          return {
            ...prevState,
            work: newWork,
          };
        });
      }
    }
    if (e.target.classList.contains("background-btn-secondary")) {
    }
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <button className={"Button" + " " + classUnique + " " + classCard} onClick={handleClick}>
          {content}
        </button>
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
