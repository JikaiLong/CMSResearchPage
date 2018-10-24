import React, { Component } from 'react';
import man from "./man.png";
import "./slider.css";
import $ from "jquery";


// create a nav menu with jquery functionality 
$(document).ready(function(){
    $('.slide-section').click(function(e){
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 50
        });

        e.preventDefault();

    })
});

// speed and format control for nav menu slider
$(document).ready(function(){
    $("#manul").click(function(){
    $("#link").slideToggle(300, "linear");
    });
    });
   

class slider extends Component {


  // adding list with similar tag format to add more projects sliders  
  render() {
    return (
      <div id = "man">
            <div id = "manul" className = "manul" >
            <img src = {man} href = "#" alt = ""/>
           </div >
            <span id ="link">
                <li id = "slider1"><a id = "toCodeClash" className = "slide-section" href = "#codeclashsection">Code Clash</a> 
                </li>
                <li id = "slider2"><a id = "toCodeMangler"  className = "slide-section" href = "#codemanglersection">Code Mangler</a> 
                </li>
                <li id = "slider3"><a id = "tocssurvey" className = "slide-section" href = "#cssurveysection">CS Survey Research</a> 
                </li>
                <li id = "slider4"><a id = "togenderstudy"  className = "slide-section" href = "#genderstudysection">Gender Study Research</a> 
                </li>
                <li id = "slider5"><a id = "toIdentityAtheneum"  className = "slide-section" href = "#identityatheneumsection">Identity Atheneum</a> 
                </li>
                <li id = "slider6"><a id = "toCodeReviewer"  className = "slide-section" href = "#codereviewersection">Code Reviewer</a> 
                </li>
          </span>

      </div>
    );
  }

}


export default slider;