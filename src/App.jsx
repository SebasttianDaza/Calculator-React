import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";
import ErrorFallback from "./Errors/handleErrors";
import CardNumber from "./Components/Card/CardNumber/CardNumber";
import Screen from "./Components/Card/Screen/screen";

const App = ({ data }) => {
  const { firstPart, secondPart } = data;

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header className="App-Header">
          <main className="App-Main">
            <header className="App-header">
              <Screen />
            </header>
            <article className="App-content App-content-primary">
              {firstPart.map((child) => {
                return (
                  <CardNumber
                    content={child.content}
                    classUnique={child.classUnique}
                    classId={child.classId}
                    key={child.content}
                  />
                );
              })}
            </article>
            <article className="App-content App-content-secondary">
              {secondPart.map((child) => {
                return (
                  <CardNumber
                    content={child.content}
                    classUnique={child.classUnique}
                    classId={child.classId}
                    key={child.content}
                  />
                );
              })}
            </article>
          </main>
        </header>
        <footer className="App-footer">Develop Sebastian Daza</footer>
      </ErrorBoundary>
    </>
  );
};

App.propTypes = {
  data: PropTypes.object,
};

export default App;
