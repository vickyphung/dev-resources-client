import React from 'react'
import { useState } from "react";
import axios from "axios";


const AddBookmarkForm = () => {
  const [formData, setFormData] = useState({
    site: '',
    url: '',
    category: ''
  })

  // const [errorState, setErrorState] = useState('')

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post("http://locahost:3001/bookmarks/add/", {
  //       site: formData.site,
  //       url: formData.url,
  //       category: formData.category,
  //     });
  //     console.log(response);
  //   } catch {
  //     setErrorState('Add Bookmark Failed. Try Again');
  //   }
  // }





  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/bookmarks/add/", {
      site: formData.site,
      url: formData.url,
      category: formData.category,
    });
    console.log(response);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="site">Site:</label><br />
        <input type="text" name="site" onChange={handleChange} value={formData.site} /><br/>
        <label htmlFor="url">URL:</label><br />
        <input type="text" name="url" onChange={handleChange} value={formData.url} /><br/>
        <label htmlFor="category">Category:</label><br />

        <select className='searchDropdown' id="type" name="category" onChange={handleChange} value={formData.category}>
              <option value="design" >Design</option>
              <option value="data structures and algorithms" >Data Structures and Algorithms</option>
              <option value="free online courses" >Free Online Courses</option>
              <option value="git" >Git</option>
              <option value="hosting" >Hosting</option>
              <option value="css" >HTML/CSS</option>
              {/* <option value="html" >HTML</option> */}
              <option value="JavaScript" >JavaScript</option>
              <option value="mongo" >MongoDB</option>
              <option value="node" >Node</option>
              <option value="other" >Other</option>
              <option value="playground" >Playground</option>
              <option value="podcasts" >Podcasts</option>
              <option value="react" >React</option>
              <option value="tools" >Tools</option>
              <option value="web development" >Web Development</option>
              <option value="youtube" >YouTube</option>

              <option value="wise" >WISE</option>

            </select>



        {/* <input type="text" name="category" onChange={handleChange} value={formData.category} /> */}
        
        <br/>
        <input className="submitButton" type="submit" />
      </form>
    </div>
  )
}

export default AddBookmarkForm