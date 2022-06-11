import { useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";

import "./Style/screen.scss";
import ContextWork from "../../../Context/ContextWork";
import ErrorFallback from "../../../Errors/handleErrors";

const Screen = ({}) => {
  const { work, setWork } = useContext(ContextWork);
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <article className="Screen-main">
          <div className="Screen-before">{work.work}</div>
          <div className="Screen-current">{work.result}</div>
        </article>
      </ErrorBoundary>
    </>
  );
};

export default Screen;
