import { Link } from "react-router-dom";
import "./styles.css";
export default function NavBarLogin(props) {
  return (
    <nav>
      <h1>💻{props?.user?.name}</h1>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          props.setUser(null);
        }}
      >
        Log Out
      </button>


      <div className="nav">

      <Link to="/about">About/Contact</Link>
      <Link to="/add">Add Bookmark</Link>


      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/bookmarks">All Bookmarks</Link> */}

        <h4>Categories</h4>

        {/* <Link to="/articles">Articles</Link> */}
        <Link to="/communities">Communities</Link>
        <Link to="/design">Design</Link>
        <Link to="/dsalgo">Data Structures & Algorithms</Link>
        <Link to="/freecourses">Free Online Courses</Link>
        <Link to="/git">Git</Link>
        <Link to="/hosting">Hosting</Link>
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

        <br /><Link to="/wise">WISE</Link>


      </div>

    </nav>
  );
}
