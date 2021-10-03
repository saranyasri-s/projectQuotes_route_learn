import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./FullQuote.module.css";
import Quote from "./Quote";
function FullQuote(props) {
  const [comments, setComments] = useState([]);
  const [fullQuote, setFullQuote] = useState({});
  const [newComment, setNewComment] = useState("");
  const params = useParams();
  const quoteId = params.quoteId;
  useEffect(() => {
    const fetchingQuotes = async () => {
      const response = await fetch(
        "https://quotes-c924e-default-rtdb.firebaseio.com/quotes.json"
      );

      const data = await response.json();
      console.log("success full quote");
      console.log(data);
      let quotes = {};
      for (let key in data) {
        if (key === quoteId) {
          let obj = { author: "", quote: "", id: "" };
          obj.author = data[key].name;
          obj.quote = data[key].quote;
          obj.id = key;
          quotes = { ...obj };
        }
      }

      setFullQuote(quotes);
    };
    fetchingQuotes().catch((er) => {
      console.log(er);
    });
  }, []);
  const commentSubmitHAndler = (e) => {
    e.preventDefault();
    const commentsOld = [...comments];
    commentsOld.push(newComment);
    setComments(commentsOld);
    setNewComment("");
  };
  const commentChangeHandler = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className={classes.FullQuote}>
      <div className={classes.quotePart}>
        <h3>{fullQuote.quote}</h3>
        <p>{fullQuote.author}</p>
      </div>
      {comments.length > 0 &&
        comments.map((comment) => {
          return <p>{comment}</p>;
        })}
      <div>
        <p style={{ color: "violet" }}>{params.saranId}</p>
        <label> comment </label>
        <input
          value={newComment}
          type="text"
          onChange={commentChangeHandler}
        ></input>

        <button onClick={commentSubmitHAndler}>add comment</button>
      </div>
    </div>
  );
}

export default FullQuote;
