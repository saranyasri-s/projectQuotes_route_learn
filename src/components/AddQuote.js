import React, { useState } from "react";
import classes from "./AddQuote.module.css";
function AddQuote() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const quoteChangeHandler = (e) => {
    setQuote(e.target.value);
  };
  const submitQuoteHandler = (e) => {
    e.preventDefault();
    const newQuote = { name: name, quote: quote };
    console.log(newQuote);
    setName("");
    setQuote("");
  };
  return (
    <form onSubmit={submitQuoteHandler} className={classes.newQuote}>
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
        <button type="submit">Add Quote</button>
      </section>
    </form>
  );
}

export default AddQuote;
