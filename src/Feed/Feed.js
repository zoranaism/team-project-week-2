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

            <h2 class="card-title mt-3">{props.name}</h2>
            
            <p class="card-text">Location: {props.location}<br />
            Time of the Year: {props.season}<br />
            Elevation: {props.elevation}</p>
            <div>
              <p>{props.text}</p>
              <footer>Written by: {props.writer} on {props.date}</footer>
            </div>
        </div>
        
        
          <div class="card-footer">
          <a href="#" class="btn btn-primary mr-2">{props.like ? "yes, liked" : "not liked"}</a>
          <a href="ReadLink:" class="btn btn-primary">Read the article</a>
          </div>

      </div>
    </div>
    
  );
}
