import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";
import ErrorFallback from "./Errors/handleErrors";
import CardNumber from "./Components/Card/CardNumber/CardNumber";
import Screen from "./Components/Card/Screen/screen";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header className="App-Header">
          <main className="App-Main">
            <header className="App-header">
              <Screen />
            </header>
            <article className="App-content App-content-primary" />
            <article className="App-content App-content-secondary" />
            <article className="App-content App-content-third" />
          </main>
        </header>
      </ErrorBoundary>
    </>
  );
}

export default App;
