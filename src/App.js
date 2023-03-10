import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { getUser } from "./utilities/users-service";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";
import AddBookmark from "./pages/AddBookmark";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Htmlcss from "./pages/Htmlcss";
import Articles from "./pages/Articles";
import Hosting from "./pages/Hosting";
import Tools from "./pages/Tools";
import Dsalgo from "./pages/Dsalgo";
import Freecourses from "./pages/Freecourses";
import Webdev from "./pages/Webdev";
import Playground from "./pages/Playground";
import Podcasts from "./pages/Podcasts";

import Javascript from "./pages/Javascript";
import Node from "./pages/Node";
import Design from "./pages/Design";
import Git from "./pages/Git";
import Mongo from "./pages/Mongo";
import Other from "./pages/Other";
import Reactjs from "./pages/React";
import Logout from "./components/Logout";
import NavBarLogin from "./components/NavBarLogin";
import Youtube from "./pages/Youtube";
import AboutContact from "./pages/AboutContact";
import Wise from "./pages/Wise";
import CommandLine from "./pages/CommandLine"
import Communities from "./pages/Communities";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
       <Link className="title" to="/"><h1>Developer Resources</h1></Link>  
      {user ? (
        <>
          <div className="flex">
            <div>
              <NavBarLogin setUser={setUser} user={user} />
            </div>

            <div>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/add" element={<AddBookmark />} />
              <Route path="/about" element={<AboutContact />} />

                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/css" element={<Htmlcss />} />
                {/* <Route path="/articles" element={<Articles />} /> */}
                <Route path="/hosting" element={<Hosting />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/dsalgo" element={<Dsalgo />} />
                <Route path="/freecourses" element={<Freecourses />} />
                <Route path="/webdev" element={<Webdev />} />
                <Route path="/react" element={<Reactjs />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/podcasts" element={<Podcasts />} />

                <Route path="/js" element={<Javascript />} />
                <Route path="/node" element={<Node />} />
                <Route path="/design" element={<Design />} />
                <Route path="/git" element={<Git />} />
                <Route path="/other" element={<Other />} />
                <Route path="/mongo" element={<Mongo />} />
                <Route path="/youtube" element={<Youtube />} />
              <Route path="/wise" element={<Wise />} />
              <Route path="/commandline" element={<CommandLine />} />
              <Route path="/communities" element={<Communities />} />

              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <Auth setUser={setUser} /> */}

          <div className="flex">
            <div>
              <NavBar />
            </div>
            
            <Routes>
          <Route path="/auth" element={<Auth setUser={setUser} />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutContact />} />


              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/css" element={<Htmlcss />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/hosting" element={<Hosting />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/dsalgo" element={<Dsalgo />} />
              <Route path="/freecourses" element={<Freecourses />} />
              <Route path="/webdev" element={<Webdev />} />
              <Route path="/react" element={<Reactjs />} />
              <Route path="/playground" element={<Playground />} />
              <Route path="/js" element={<Javascript />} />
              <Route path="/node" element={<Node />} />
              <Route path="/design" element={<Design />} />
              <Route path="/git" element={<Git />} />
              <Route path="/other" element={<Other />} />
              <Route path="/mongo" element={<Mongo />} />
              <Route path="/youtube" element={<Youtube />} />
              <Route path="/commandline" element={<CommandLine />} />
              <Route path="/communities" element={<Communities />} />


              <Route path="/wise" element={<Wise />} />
            </Routes>
          </div>
        </>
      )}


      {/* <div>Footer</div> */}
    </div>
  );
}

export default App;
