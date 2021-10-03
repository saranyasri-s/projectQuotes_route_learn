import classes from "./App.module.css";
import Navbar from "./components/Navbar";
import { Route, Redirect, Switch } from "react-router-dom";
import AddQuote from "./components/AddQuote";
import AllQuotes from "./components/AllQuotes";
import React, { useState } from "react";
import FullQuote from "./components/FullQuote";
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
    console.log("app");
    console.log(FullQuote);
  };
  return (
    <div className={classes.App}>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/All-Quotes"></Redirect>
          </Route>
          <Route path="/All-Quotes" exact>
            <AllQuotes
              onOpenQuote={openFullQuoteHandler}
              quotesList={quotesList}
            ></AllQuotes>
          </Route>

          <Route path="/New-Quote">
            <AddQuote onAdd={quoteAddHandler}></AddQuote>
          </Route>
          <Route path="/All-Quotes/:saranId">
            <FullQuote key={fullQuote.id} quoteFull={fullQuote}></FullQuote>
          </Route>
          <Route path="*">
            <p>Page not found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
