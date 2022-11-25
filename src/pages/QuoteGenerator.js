import React, {useState, useEffect } from 'react';
import '../Quote.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuoteGenerator = () => {
  const [ quote, setQuote ] = useState("");
  const [ author, setAuthor ] = useState("");
  const [ img, setImg ] = useState();


  
  const quoteAPI = async() => {
    let arrayOfQuotes = [];

    try{
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data;
      

    }catch (error) {
      console.log(error);
    }  

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);

    } catch (error) {
      console.log(error);
    }

    fetchImg();
    
  };
  
  const getImgUrl = "https://api.unsplash.com/search/photos?query=landscape&client_id=SSzNV_FujTmR5t7M_-lwQr3WUNkM6FsFtpgIOIHcjYk";
  
  const fetchImg = async() => {
    let randomNumber = Math.floor(Math.random() *10);
    return fetch(getImgUrl)
      .then((response) => response.json())
      .then((data) => {
        let allImages = data.results[randomNumber];
        return (
          allImages.urls.regular,
          setImg(allImages.urls.regular))
      });
  }




  useEffect(() => {
    quoteAPI();
    // eslint-disable-next-line
  },[])


  

  return(
    <div className="App">
      
      <img src={img} alt="bg"/>
     <div className= "container">
      <div className='text'>
        <div className='quote'><h3>“{quote}”</h3></div>
        <div className='author'>-{author}</div>
      </div>

      <div className='btn-section'>
        <button onClick={quoteAPI} className="btn-api">GET A QUOTE</button>
        <Link to="/"> <button className='btn-home'>HOME</button></Link>
      </div>
      </div> 
    </div>

  )
};

export default QuoteGenerator;
