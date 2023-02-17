import React from 'react'
import { useState, useEffect } from 'react';


const Bookmarks = () => {


  //state to hold the coin data
  const [bookmarks, setBookmarks] = useState("");


//   const getBookmarks = async () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     setBookmarksData(data);
//   };


  // useEffect to runs when component mounts
  useEffect(() => {
  const url = `http://localhost:3001/bookmarks`;

  const getBookmarks = async () => {
    try{
      //grab data
      const response = await fetch(url);
      //set data as json
      const data = await response.json();
      //sets bookmarks as data
      setBookmarks(data.bookmarksList);
      console.log(response)
      console.log(data)
    } catch(e){
      console.error(e)
    }
  };
    getBookmarks();
  }, []);

    // loaded function for when data is fetched
    const loaded = () => {
      return (
        <div>    
          {bookmarks?.map((bookmark, index) => (
            <div>
              <a href={bookmark?.url}><h3>{bookmark?.site}</h3></a>
              {bookmark?.category}
            </div>
        ))} 
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h2>Loading...</h2>;
  };

  return (
    <div>

      {console.log(bookmarks)}

<h2>All Bookmarks</h2>

      {bookmarks ? loaded() : loading()}

      {/* {bookmarks?.map((bookmark, index) => (
        <div>
          <h3>{bookmark?.site}</h3>
          {bookmark?.url}< br/>
          {bookmark?.category}< br />
        </div>
       ))}  */}


    </div>
  )
}

export default Bookmarks