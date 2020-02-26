import React, { useState } from "react";
// import logo from "./logo.svg";
import "./style/global.scss";
import Header from "./Header/Header"
import Navigation from "./Navigation/Navigation"
import Feed from "./Feed/Feed";
import Footer from "./Footer/Footer";

  

function App() {

  const emptyArticles = [];
  const [festPosts, set_articles] = useState([
    {
      name: "Rise Festival", 
      season: "Winter",
      location: "France",
      text: "Rise Festival takes place at the most perfect time of year! Just before Christmas, you can head to the mountains for the time of your life. ",
      like: 8,
      styles: ["Techno", "Electro", "Trance"],
      writer: "Henry Christoph",
      elevation: 1250, 
      date: "March 1, 2020"
    }, 
    {
      name: "Snowboxx", 
      season: "Spring",
      location: "Avoriaz, France",
      text: "Snowboxx is a huge name in the music festival scene. Snowboxx holds up against massive names as a hub for culture, unity and music.",
      like: 2,
      styles: ["Techno", "Electric"],
      writer: "Richard Connel",
      elevation: 2472, 
      date: "January 4, 2020"
    }, 
    {
      name: "Secret Solstice", 
      season: "Summer",
      location: "Reykjavík, Iceland",
      text: "As soon as you touch down in Iceland, the country’s dramatic landscape of black lava rocks contrasting with sharp blue skies is the first thing to greet you. ",
      like: 13,
      styles: ["Indie", "Pop", "Rock"],
      writer: "Khris Cowley",
      elevation: 427, 
      date: "December 30, 2019"
    }, 
    {
      name: "Trænafestivalen", 
      season: "Summer",
      location: "Traena, Norway",
      text: "Trænafestivalen proves paradise doesn’t have to be in the tropics. As an island in the Helgeland district of Norway, Traena is accessible only by sea.",
      like: 170,
      styles: ["Country", "Pop", ""],
      writer: "Fusce dapibus",
      elevation: 1739, 
      date: "December 1, 2019"
    }, 
    ])
  

  return (
    <div className="App">

      <Header />

      {/* MAIN CONTAINER */}
      <main>
      
        <div className="container">
          <div className="row">
            
            {/* LEFT SIDEBAR */}
            <div className="col-sm-12 col-md-3">
              <Navigation />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="col-sm-12 col-md-9">
              <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-5 px-0">
                  <h3 className="display-6 font-italic">MOUNTAIN MUSIC FESTIVALS</h3>
                  <p className=" mb-3">Find out more about best Mountain music festivals of the world, or just delete all of them :D</p>
                  <button className="btn btn-info btn-block mt-5" onClick={() => set_articles(emptyArticles)}>
                    Delete articles
                  </button>
                </div>
              </div>
              <div className="row">
              {festPosts.map(festPost => (
                <Feed name={festPost.name} season={festPost.season} location={festPost.location} text={festPost.text}  like={festPost.like} styles={festPost.styles} writer={festPost.writer} elevation={festPost.elevation} date={festPost.date} />
                ))} 
              </div>
            </div> {/* END RIGHT SIDE CONTENT */}
          </div> {/* END ROW */}
        </div> {/* END CONTAINER */}
        
      </main>{/* END MAIN CONTAINER */}

      <Footer />
    </div>
  );
}

export default App;
