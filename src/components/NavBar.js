import { Link } from "react-router-dom";
import "./styles.css";
export default function NavBar(props) {
  return (
    <nav>
      <div className="nav">
        {/* <Link to="/">All Bookmarks</Link> */}
        <Link to="/">About/Contact</Link>
        <Link to="/auth">Sign Up/Log In </Link>

        <br />
        {/* <Link to="/bookmarks">All Bookmarks</Link> */}
        <h4>Categories</h4>
        <Link to="/communities">Communities</Link>
        <Link to="/design">Design</Link>
        <Link to="/dsalgo">Data Structures & Algorithms</Link>
        <Link to="/freecourses">Free Online Courses</Link>
        <Link to="/git">Git</Link>
        <Link to="/hosting">Web Hosting</Link>
        <Link to="/css">HTML/CSS</Link>

        <Link to="/js">JavaScript</Link>
        <Link to="/mongo">Mongo</Link>
        <Link to="/node">Node</Link>
        <Link to="/other">Other</Link>
        <Link to="/playground">Playground</Link>

        <Link to="/podcasts">Podcasts</Link>
        <Link to="/react">React</Link>
        <Link to="/tools">Tools</Link>
        <Link to="/webdev">Web Development</Link>
        <Link to="/youtube">YouTube</Link>
        {/* <br />
        <Link to="/wise">WISE</Link> */}

        {/* <br /><br /> */}
        {/* <h4>-</h4> */}
      </div>
    </nav>
  );
}
