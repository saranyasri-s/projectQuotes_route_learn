import classes from "./App.module.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import AddQuote from "./components/AddQuote";
function App() {
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <Route path="/All-Quotes"></Route>
      <Route path="/New-Quote">
        <AddQuote></AddQuote>
      </Route>
    </div>
  );
}

export default App;
