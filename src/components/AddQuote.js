import React, { useState } from "react";
import classes from "./AddQuote.module.css";
import { Prompt } from "react-router-dom";
import { useHistory } from "react-router-dom";
function AddQuote(props) {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [isFilling, setIsFilling] = useState(false);
  const history = useHistory();
  const focusFormHandler = () => {
    setIsFilling(true);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const quoteChangeHandler = (e) => {
    setQuote(e.target.value);
  };
  const submitQuoteHandler = (e) => {
    e.preventDefault();
    const newQuote = { name: name, quote: quote, id: name };
    props.onAdd(newQuote);
    setName("");
    setQuote("");

    history.push("/All-Quotes");
  };
  const formFilledHandler = () => {
    setIsFilling(false);
  };
  return (
    <>
      <Prompt
        when={isFilling}
        message={(location) => {
          console.log(location);
          return "Do you really want to leave this page? you will lose your entered details";
        }}
      ></Prompt>

      <form
        onFocus={focusFormHandler}
        onSubmit={submitQuoteHandler}
        className={classes.newQuote}
      >
        <div className={classes.authordiv}>
          <label htmlFor="author">Author</label>
          <input
            onChange={nameChangeHandler}
            value={name}
            id="author"
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="quote">Quote</label>
          <textarea
            onChange={quoteChangeHandler}
            value={quote}
            id="quote"
            type="text"
          ></textarea>
        </div>
        <section className={classes.button}>
          <button onClick={formFilledHandler} type="submit">
            Add Quote
          </button>
        </section>
      </form>
    </>
  );
}

export default AddQuote;
