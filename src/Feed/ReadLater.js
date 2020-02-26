import React, { useState } from "react";


export default function ReadLater(props) {
  const [likeValue, setValue] = useState(false); 

  const stateChange = () => {
    if (likeValue === false)
    {
      setValue(true);
      document.getElementById("button").classList.add('btn-info');
      document.getElementById("button").classList.remove('btn-primary');
    } else {
      setValue(false);
      document.getElementById("button").classList.add('btn-primary');
      document.getElementById("button").classList.remove('btn-info');
    }
  };

  return (
    <div>
      <button id="button" className="btn btn-primary" onClick={stateChange}>
      </button>
    </div>
  );

}