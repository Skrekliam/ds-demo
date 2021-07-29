import "./App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "../node_modules/react-router-dom";
import MovieInfo from "./MovieInfo";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
          <Route path="/:id" component={MovieInfo} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
