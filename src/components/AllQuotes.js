import classes from "./AllQuotes.module.css";
import Quote from "./Quote";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
function AllQuotes(props) {
  const [quotesList, setQuotesList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  // sample match object
  // match:{
  //   path:"/AllQuotes/:quoteId",
  //   url:"/AllQuotes/q1"
  // }
  console.log(location);
  useEffect(() => {
    const fetchingQuotes = async () => {
      const response = await fetch(
        "https://quotes-c924e-default-rtdb.firebaseio.com/quotes.json"
      );
      const data = await response.json();
      console.log("success");
      console.log(data);
      const quotes = [];
      for (let key in data) {
        let obj = { author: "", quote: "", id: "" };
        obj.author = data[key].name;
        obj.quote = data[key].quote;
        obj.id = key;
        quotes.push(obj);
      }
      setQuotesList(quotes);
    };
    fetchingQuotes().catch((er) => {
      console.log(er);
    });
  }, []);

  const addSortQueryHandler = () => {
    history.push(`${match.url}?sort=asc`);
    // history.push("/AllQuotes?sort=asc")
  };
  const queryParams = new URLSearchParams(location.search);

  console.log(queryParams.get("sort"));
  return (
    <div className={classes.AllQuotes}>
      <button onClick={addSortQueryHandler}>Sort </button>
      <ul>
        {quotesList.length === 0 && <p>No quotes to show</p>}
        {quotesList.map((quote) => {
          return (
            <li key={quote.id}>
              <Quote quote={quote.quote} name={quote.author} id={quote.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllQuotes;
