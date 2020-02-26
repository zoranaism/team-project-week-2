import React from "react";
import LikeButton from "./LikeButton";
import ReadLater from "./ReadLater";


export default function Feed(props) {
  return (
    <div className="col-12 col-sm-6">

    
      <div className="article card mb-4">
        <img className="card-img-top" src="https://picsum.photos/300/200" alt="" />

        <div className="card-body">
            {props.styles.map(style => {
              return <span className="badge badge-info mr-2">{style}</span>
            })}

            <h3 className="card-title mt-3">{props.name}</h3>
            
            <p className="card-text">Location: {props.location}<br />
            Time of the Year: {props.season}<br />
            Elevation: {props.elevation}</p>
            <div>
              <p>{props.text}</p>
              <footer>Written by: {props.writer} on {props.date} </footer>
            </div>
        </div>
        
        
          <div className="card-footer">
          {/* <a href="#" className="btn btn-primary mr-2">{props.like ? "yes, liked" : "not liked"}</a> */}
          <LikeButton like={props.like}/>
          <a href="#" className="">Read the article</a>
          <ReadLater />
          </div>

      </div>
    </div>
    
  );
}
