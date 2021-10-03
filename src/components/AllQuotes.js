import classes from "./AllQuotes.module.css";
import Quote from "./Quote";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
function AllQuotes(props) {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  // sample match object
  // match:{
  //   path:"/AllQuotes/:quoteId",
  //   url:"/AllQuotes/q1"
  // }
  console.log(location);
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
        {props.quotesList.length === 0 && <p>No quotes to show</p>}
        {props.quotesList.map((quote) => {
          return (
            <li key={quote.id}>
              <Quote
                onOpenQuote={props.onOpenQuote}
                quote={quote.quote}
                name={quote.name}
                id={quote.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllQuotes;
