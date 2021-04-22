// Project files
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Video from "./pages/video";
import Results from "./pages/results";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Video} path="/video/:id" />
          <Route component={Results} path="/results/:query" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
