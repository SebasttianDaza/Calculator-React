import { ErrorBoundary } from "react-error-boundary";
import PropTypes from "prop-types";

import "./Style/CardNumber.scss";
import useWorkGlobal from "../../../Hooks/useWorkGlobal";
import ErrorFallback from "../../../Errors/handleErrors";

const CardNumber = ({ content, classUnique, classId }) => {
  const [work, setWork] = useWorkGlobal();
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
      writeNumber(e);
    }
    if (e.target.classList.contains("background-btn-secondary")) {
      getOperator(e.target.innerText.toString());
    }
    if (e.target.classList.contains("background-btn-third")) {
      removeOperation();
    }
    if (e.target.classList.contains("background-btn-fourth")) {
      getResult();
    }
  };

  const writeNumber = (e) => {
    let newWork;
    if (work.isOperator === "") {
      if (work.isWork.length < 16) {
        newWork = work.isWork.toString() + e.target.innerText.toString();
        setWork((prevState) => {
          return {
            ...prevState,
            isWork: newWork,
          };
        });
      }
    } else {
      if (work.isAfterWork.length < 16) {
        newWork = work.isAfterWork.toString() + e.target.innerText.toString();
        setWork((prevState) => {
          return {
            ...prevState,
            isAfterWork: newWork,
          };
        });
      }
    }
  };

  const getOperator = (operators) => {
    if (work.isOperator !== operators) {
      setWork((prevState) => {
        return {
          ...prevState,
          isOperator: operators,
        };
      });
    }
  };

  const removeOperation = () => {
    //Poner state en cero
    setWork((prevState) => {
      return {
        ...prevState,
        isWork: "",
        isOperator: "",
        isAfterWork: "",
        isResult: "",
      };
    });
  };

  const getResult = () => {
    console.log("Response");
    if (work.isWork !== "" && work.isAfterWork !== "" && work.isOperator !== "") {
      console.log("Response");
      let result;
      switch (work.isOperator) {
        case "+":
          result = parseInt(work.isWork) + parseInt(work.isAfterWork);
          break;
        case "-":
          result = parseInt(work.isWork) - parseInt(work.isAfterWork);
          break;
        case "x":
          result = parseInt(work.isWork) * parseInt(work.isAfterWork);
          break;
        case "/":
          result = parseInt(work.isWork) / parseInt(work.isAfterWork);
          break;
        default:
          result = "";
          break;
      }
      console.log(result);
      setWork((prevState) => {
        return {
          ...prevState,
          isResult: result,
        };
      });
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
  content: PropTypes.any,
  classUnique: PropTypes.string,
  classId: PropTypes.number,
};

export default CardNumber;
