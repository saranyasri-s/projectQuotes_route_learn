import React from "react";
import classes from "./Quote.module.css";
import { Link, useRouteMatch } from "react-router-dom";
function Quote(props) {
  const match = useRouteMatch();
  // const onOpenQuoteHandler = () => {
  //   const name = props.name;
  //   const quote = props.quote;
  //   const fullQuote = { name: name, quote: quote, id: props.id };
  //   // props.onOpenQuote(fullQuote);
  //   console.log(props.id);
  // };
  // const toPath = "/All-Quotes/" + props.id;

  const toPath = `${match.url}` + "/" + props.id;
  //here i replaced the hard coded url with match.url//

  return (
    <div className={classes.quote}>
      <h3>{props.quote}</h3>
      <p>{props.name}</p>
      <div className={classes.button}>
        <Link to={toPath}>
          <button>View full screen</button>
        </Link>
      </div>
    </div>
  );
}

export default Quote;
