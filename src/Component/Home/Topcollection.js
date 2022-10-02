import React, { Component } from "react";
import './collection.css'
class TopCollections extends Component{
   render(){
    return(
        <>
               
      

<div id="collection">
  <span id="quickheading1"> Top Collections</span>
  <span id="Subheading2"> Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on
    trends</span>
  <div id="list1">



    <img src="https://i.ibb.co/xfJfvQk/cafe.webp" alt="im"/>
    <span id="rb"> Newly Opened </span>
    <span id="rb1"> 18 Places → </span>

  </div>
  <div id="list1">



    <img src="https://i.ibb.co/fqC6c6f/best.jpg" alt="i"/>
    <span id="rb"> Best of Mumbai </span>
    <span id="rb1"> 173 Places →</span>

  </div>

  <div id="list1">



    <img
      src="https://images.pexels.com/photos/4083585/pexels-photo-4083585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="ige"/>
    <span id="rb"> Trending This Week </span>
    <span id="rb1"> 35 Places → </span>

  </div>
  <div id="list1">



    <img src="https://i.ibb.co/9N5mdZT/work.jpg" alt="ima"/>

    <span id="rb"> Work Friendly Places!</span>
    <span id="rb1"> 29 Places → </span>

  </div>
</div>





        </>
    )
   }
}

export default TopCollections