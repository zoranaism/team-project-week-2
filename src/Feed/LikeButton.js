import React, { useState } from "react";

export default function LikeButton(props) {
  const initial_numLikes = props.like;
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const increment = () => {
    set_numLikes(numLikes + 1);
  };

  return (
    <div>
        <button className="btn btn-primary mr-2" onClick={increment}>Like</button>
      <p>
        This post has <b>{numLikes}</b> likes!
      </p>
    </div>
  );
}
