import React, { useState, useRef } from "react";

import classes from "./FullQuote.module.css";
function FullQuote(props) {
  const [comments, setComments] = useState([]);
  const commentRef = useRef();
  const commentSubmitHAndler = (e) => {
    const newComments = [...comments];
    console.log(newComments);
    console.log(commentRef.current.value);
    newComments.push(commentRef.current.value);
    setComments(newComments);
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
        <label> comment </label>
        <input ref={commentRef}></input>

        <button onClick={commentSubmitHAndler}>add comment</button>
      </div>
    </div>
  );
}

export default FullQuote;
