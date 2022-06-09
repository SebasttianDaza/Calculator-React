import { ErrorBoundary } from "react-error-boundary";

import "./Style/screen.scss";
import ErrorFallback from "../../../Errors/handleErrors";

const Screen = ({}) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <article className="Screen-main">
          <div className="Screen-before" />
          <div className="Screen-current" />
        </article>
      </ErrorBoundary>
    </>
  );
};

export default Screen;
