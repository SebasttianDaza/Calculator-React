import { ErrorBoundary } from "react-error-boundary";

import "./App.scss";
import ErrorFallback from "./Errors/handleErrors";
import CardNumber from "./Components/Card/CardNumber/CardNumber";
import Screen from "./Components/Card/Screen/screen";

const App = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <header className="App-Header">
          <main className="App-Main">
            <header className="App-header">
              <Screen />
            </header>
            <article className="App-content App-content-primary">
              <CardNumber content="Hola" classUnique="ac" />
              <CardNumber content="Hola" classUnique="divider" />
              <CardNumber content="Hola" classUnique="multiplicator" />
              <CardNumber content="Hola" />
              <CardNumber content="Hola" />
              <CardNumber content="Hola" />
              <CardNumber content="Hola" />
            </article>
            <article className="App-content App-content-secondary">
              <CardNumber content="Hola" classUnique="one" />
              <CardNumber content="Hola" classUnique="two" />
              <CardNumber content="Hola" classUnique="three" />
              <CardNumber content="Hola" classUnique="same" />
              <CardNumber content="Hola" classUnique="zero" />
              <CardNumber content="Hola" classUnique="number" />
            </article>
          </main>
        </header>
      </ErrorBoundary>
    </>
  );
};

export default App;
