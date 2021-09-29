import React, { useState } from "react";
import classes from "./AllQuotes.module.css";
import Quote from "./Quote";
import { Link } from "react-router-dom";
function AllQuotes(props) {
  return (
    <div className={classes.AllQuotes}>
   
      <ul>
        {props.quotesList.length === 0 && <p>No quotes to show</p>}
        {props.quotesList.map((quote) => {
          return (
            <li key={quote.id}>
              <Quote
                onOpenQuote={props.onOpenQuote}
                quote={quote.quote}
                name={quote.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllQuotes;
