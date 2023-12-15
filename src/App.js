import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Projects from "./components/Projects";
import ProjectsDetails from "./components/ProjectsDetails";
import MainDetails from "./components/MainDetails";
import PriceList from "./components/PriceList";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/main/:id" >
              <MainDetails />
            </Route>
            <Route exact path="/projects" >
              <Projects />
            </Route>
            <Route path="/projects/:id" >
              <ProjectsDetails />
            </Route>
            <Route path="/priceList">
              <PriceList />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
