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
  const submitQuoteHandler = async (e) => {
    e.preventDefault();
    const newQuote = { name: name, quote: quote };
    if (newQuote.name && newQuote.quote) {
      try {
        const response = await fetch(
          "https://quotes-c924e-default-rtdb.firebaseio.com/quotes.json",
          {
            method: "POST",
            body: JSON.stringify(newQuote),
          }
        );
        if (!response.ok) {
          throw new Error("error occured");
        }
        const data = await response.json();
        setName("");
        setQuote("");
        props.onAdd(newQuote);
        history.push("/All-Quotes");
      } catch (er) {
        console.log(er);
        setName("");
        setQuote("");
        prompt(er);
      }
    }
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
