import React from "react";
// import logo from "./logo.svg";
import "./style/global.scss";
import Header from "./Header/Header"
import Navigation from "./Navigation/Navigation"
import Feed from "./Feed/Feed";
import Footer from "./Footer/Footer";

const festPosts =[
  {
    name: "Rise Festival", 
    season: "Winter",
    location: "France",
    text: "Rise Festival takes place at the most perfect time of year! Just before Christmas, you can head to the mountains for the time of your life. ",
    like: true,
    styles: ["Techno", "Electro", "Trance"],
    writer: "Henry Christoph",
    elevation: 1250, 
    date: "January 1, 2014"
  }, 
  {
    name: "Snowboxx", 
    season: "Spring",
    location: "Avoriaz, France",
    text: "Snowboxx is a huge name in the music festival scene. Snowboxx holds up against massive names as a hub for culture, unity and music.",
    like: false,
    styles: ["Techno", "Electric"],
    writer: "Richard Connel",
    elevation: 2472, 
    date: "January 1, 2014"
  }, 
  {
    name: "Secret Solstice", 
    season: "Summer",
    location: "Reykjavík, Iceland",
    text: "As soon as you touch down in Iceland, the country’s dramatic landscape of black lava rocks contrasting with sharp blue skies is the first thing to greet you. ",
    like: false,
    styles: ["Indie", "Pop", "Rock"],
    writer: "Khris Cowley",
    elevation: 427, 
    date: "January 1, 2014"
  }, 
  {
    name: "Trænafestivalen", 
    season: "Summer",
    location: "Traena, Norway",
    text: "Trænafestivalen proves paradise doesn’t have to be in the tropics. As an island in the Helgeland district of Norway, Traena is accessible only by sea.",
    like: true,
    styles: ["Country", "Pop", ""],
    writer: "Fusce dapibus",
    elevation: 1739, 
    date: "January 1, 2014"
  }, 
  ]
  

function App() {
  return (
    <div className="App">

      <Header />

      {/* MAIN CONTAINER */}
      <main>
      
        <div class="container">
          <div class="row">
            
            {/* LEFT SIDEBAR */}
            <div class="col-sm-12 col-md-3">
              <Navigation />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div class="col-sm-12 col-md-9">
              <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                  <h1 class="display-4 font-italic">FESTIVALS TODAY</h1>
                  <p class="lead my-3">Find out more about best Mountain music festivals of the world</p>
                </div>
              </div>
              <div class="row">
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
