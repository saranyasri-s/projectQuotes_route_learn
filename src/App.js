import classes from "./App.module.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import AddQuote from "./components/AddQuote";
import AllQuotes from "./components/AllQuotes";
import React, { useState } from "react";
function App() {
  const [quotesList, setQuotesList] = useState([]);
  const [fullQuote, setFullQuote] = useState({});

  const quoteAddHandler = (newQuote) => {
    const quotes = [...quotesList];
    quotes.push(newQuote);
    setQuotesList(quotes);
  };
  const openFullQuoteHandler = (FullQuote) => {
    setFullQuote(FullQuote);
  };
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <Switch>
        <Route path="/All-Quotes" exact>
          <AllQuotes
            onOpenQuote={openFullQuoteHandler}
            quotesList={quotesList}
          ></AllQuotes>
        </Route>
        <Route path="/New-Quote">
          <AddQuote onAdd={quoteAddHandler}></AddQuote>
        </Route>
        <Route path="./All-Quotes/quote/:fullQuote">
          <p>hello</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
