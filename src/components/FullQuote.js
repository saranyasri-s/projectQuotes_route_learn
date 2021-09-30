import React, { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./FullQuote.module.css";
function FullQuote(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const params = useParams();
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
  const fullQuote = props.quoteFull;
  return (
    <div className={classes.FullQuote}>
      <div className={classes.quotePart}>
        <h3>{fullQuote.quote}</h3>
        <p>{fullQuote.name}</p>
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
