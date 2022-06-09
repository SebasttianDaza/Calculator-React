import { ErrorBoundary } from "react-error-boundary";

import "./Style/screen.scss";
import ErrorFallback from "../../../Errors/handleErrors";

const Screen = ({}) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <article className="Screen-main">
          <div className="Screen-before">5 + 3 =</div>
          <div className="Screen-current">8</div>
        </article>
      </ErrorBoundary>
    </>
  );
};

export default Screen;
