import React from "react";
import classes from "./Quote.module.css";
import { Link } from "react-router-dom";
function Quote(props) {
  const onOpenQuoteHandler = () => {
    const name = props.name;
    const quote = props.quote;
    const fullQuote = { name: name, quote: quote };
    props.onOpenQuote(fullQuote);
  };
  return (
    <div className={classes.quote}>
      <h3>{props.quote}</h3>
      <p>{props.name}</p>
      <div className={classes.button}>
        <Link onClick={onOpenQuoteHandler} to="/All-Quotes/full-Quote">
          <button>View full screen</button>
        </Link>
      </div>
    </div>
  );
}

export default Quote;
