import React from "react";
import { useState, useEffect } from "react";

const Webdev = () => {
  const [bookmarks, setBookmarks] = useState("");


 
  useEffect(() => {
  // const url = `http://localhost:3001/bookmarks/category/web%20development`;
  const url = `http://devresources.herokuapp.com/bookmarks/category/web%20development`;
  
  const getBookmarks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setBookmarks(data.bookmarks);
      console.log(response);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
    getBookmarks();
  }, []);

  const loaded = () => {
    return (
      <div className="container">
        <h2>
            Web Development
        </h2>
        <div className="siteList">
          {bookmarks?.map((bookmark, index) => (
            <div className="site">
              <h3>{bookmark?.site}</h3>
              <a href={bookmark?.url}>{bookmark?.url}</a>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return (
    <div>
      {console.log(bookmarks)}
      {bookmarks ? loaded() : loading()}
    </div>
  );
};

export default Webdev;
