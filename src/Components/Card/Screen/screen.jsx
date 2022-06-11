import { ErrorBoundary } from "react-error-boundary";

import "./Style/screen.scss";
import useWorkGlobal from "../../../Hooks/useWorkGlobal";
import ErrorFallback from "../../../Errors/handleErrors";

const Screen = ({}) => {
  const [work] = useWorkGlobal();
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <article className="Screen-main">
          <div className="Screen-before">
            {work.isWork} <span>{work.isOperator}</span>
            {work.isAfterWork}
          </div>
          <div className="Screen-current">{work.isResult}</div>
        </article>
      </ErrorBoundary>
    </>
  );
};

export default Screen;
