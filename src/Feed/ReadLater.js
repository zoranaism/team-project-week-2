import React, { useState } from "react";

export default function ReadLater(props) {
  const [likeValue, setValue] = useState(false);

  const stateChange = () => {
    setValue(!likeValue);
  };

  const classNames = likeValue ? "btn btn-info" : "btn btn-primary";

  return (
    <div>
      <button id="button" className={classNames} onClick={stateChange}>Save for later</button>
    </div>
  );
}
