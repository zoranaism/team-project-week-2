import React from "react";

export default function Feed(props) {
  return (
    <div className="col-12 col-sm-6">

    
      <div class="article card mb-4">
        <img class="card-img-top" src="https://picsum.photos/300/200" alt="" />

        <div class="card-body">
          
            {props.styles.map(style => {
              return <span class="badge badge-info mr-2">{style}</span>
            })}

            <h2 class="card-title">{props.name}</h2>
            <p class="blockquote">
            Written by: <cite title="Source Title">{props.writer}</cite> 
            </p>
            <p class="card-subtitle">Location: {props.location}</p>

            <p>Time of the Year: {props.season}<br />
            Date: {props.date}<br />
            Elevation: {props.elevation}</p>
            <p class="card-text">About: {props.text}</p>  
        </div>
        
        
          <div class="card-footer">
          <a href="#" class="btn btn-primary mr-2">{props.like ? "yes, liked" : "not liked"}</a>
          <a href="ReadLink:" class="btn btn-primary">Read the article</a>
          </div>

      </div>
    </div>
    
  );
}
