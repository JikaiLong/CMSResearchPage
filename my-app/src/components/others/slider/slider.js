import React, { Component } from 'react';
import man from "./man.png";
import "./slider.css";
import $ from "jquery";



$(document).ready(function(){
    $('.slide-section').click(function(e){
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 50
        });

        e.preventDefault();

    })
});

$(document).ready(function(){
    $("#manul").click(function(){
    $("#link").slideToggle(300, "linear");
    });
    });
   

class slider extends Component {


    
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
                <li id = "slider3"><a id = "cssurvey" className = "slide-section" href = "#cssurveysection">CS Survey Research</a> 
                </li>
                <li id = "slider4"><a id = "genderstudy"  className = "slide-section" href = "#genderstudysection">Gender Study Research</a> 
                </li>
          </span>

      </div>
    );
  }

}


export default slider;