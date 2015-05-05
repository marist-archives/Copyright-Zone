//cards v.0.2
//content.js

//Card prototype
function Card(_id, _name, _description, _status) {
  //Attributes
  this.id = _id;
  this.name = _name;
  this.description = _description;
  this.status = _status;
  
  this.toString1 = function() {
    var returnVal = "";
    returnVal = statuses[this.status].name;
    return returnVal;
  }
  
  this.toString = function() {
    var returnVal = "";
    returnVal = this.description;
    return returnVal;
  }
  
  this.iconChange = function() {
    var newIcon = statuses[this.status].icon;
    return newIcon;
  }
  
  this.colorChange = function() {
    var newColor = this.color;
    return newColor;
  }
}

function Status(_id, _name, _icon) {
  this.id = _id;
  this.name = _name;
  this.icon = _icon;
}

var statuses_0 = new Status();
statuses_0.id = 0;
statuses_0.name = "Question";
statuses_0.icon = "../images/question.png";

var statuses_1 = new Status();
statuses_1.id = 1;
statuses_1.name = "Great!";
statuses_1.icon = "../images/checkmark.png";

var statuses_2 = new Status();
statuses_2.id = 2;
statuses_2.name = "Good!";
statuses_2.icon = "../images/checkmark.png";

var statuses_3 = new Status();
statuses_3.id = 3;
statuses_3.name = "Information";
statuses_3.icon = "../images/info.png";

//Card instances
var cards_0 = new Card();
cards_0.id = 0;
cards_0.name = "Ask about Library Resources";
cards_0.description = "Have you checked in the Library Resources?";
cards_0.status = 0;

var cards_1 = new Card();
cards_1.id = 1;
cards_1.name = "Library Resources Confirmation";
cards_1.description = "Were you able to find all the materials through the Library Resources?";
cards_1.status = 0;

var cards_2 = new Card();
cards_2.id = 2;
cards_2.name = "Fox Hunt and Library Website";
cards_2.description = "The James A. Cannavino Library holds the necessary licenses for thousands of copyrighted " +
                      "materials and millions of works available for available for educational use under the " +
                      "Creative Commons licenses, all of which are available to the Marist community to access. " +
                      "Head on over to the <a href=http://library.marist.edu/ target=_blank>Library website</a> " +
                      "and use the <a href=http://marist.summon.serialssolutions.com/ target=_blank>FoxHunt search engine</a> to access these resources.";
cards_2.status = 3;

var cards_3 = new Card();
cards_3.id = 3;
cards_3.name = "END - Library Resources Confirmed";
cards_3.description = "We are glad to hear that you were able to find what you need through the Library Resources! " +
                      "You can head on over to the <a href=resources1.html>Copyright Toolbox</a> " +
                      "for more information about copyrighted materials or play the " +
                      "<a href=game.html>Test your Copyright IQ game</a> that challenges you " +
                      "to identify which materials are copyrighted, and which materials are not.";
cards_3.status = 1;

var cards_4 = new Card();
cards_4.id = 4;
cards_4.name = "Ask about Creative Commons";
cards_4.description = "Have you tried searching in the Creative Commons?";
cards_4.status = 0;

var cards_5 = new Card();
cards_5.id = 5;
cards_5.name = "Creative Commons Confirmation";
cards_5.description = "Did you find everything you were looking for in " +
                      "the Creative Commons?";
cards_5.status = 0;

var cards_6 = new Card();
cards_6.id = 6;
cards_6.name = "END - Creative Commons Website";
cards_6.description = "If you were not able to find the materials you need " +
                      "through the Library Resources, check out the " +
                      "<a href=http://search.creativecommons.org/ target=_blank>" +
                      "Creative Commons Search website</a>." +
                      "<p>When using the CC Search website, you can follow this " +
                      "instructional page " +
                      "<a href=http://libguides.marist.edu/content.php?pid=492970&sid=4047210 target=_blank>" +
                      "here</a>.</p>";
cards_6.status = 3;

var cards_7 = new Card();
cards_7.id = 7;
cards_7.name = "END - Creative Commons Confirmed";
cards_7.description = "We're pleased to hear that you were able to find what you need through the Creative Commons! " +
                      "You can head on over to the <a href=resources1.html>Copyright Toolbox</a> " +
                      "for more information about copyrighted materials or play the " +
                      "<a href=game.html>Test your Copyright IQ game</a> that challenges you " +
                      "to identify which materials are copyrighted, and which materials are not.";
cards_7.status = 2;

var cards_8 = new Card();
cards_8.id = 8;
cards_8.name = "Contact Librarian";
cards_8.description = "Would you like to contact a librarian to help you with your search?";
cards_8.status = 0;

var cards_9 = new Card();
cards_9.id = 9;
cards_9.name = "END - Ask a Librarian";
cards_9.description = "Please click <a href=http://library.marist.edu/forms/ask.php target=_blank>here</a> " +
                      "to contact a librarian.";
cards_9.status = 3;

var cards_10 = new Card();
cards_10.id = 10;
cards_10.name = "Ask about Permission Request/Cost Estimate Form";
cards_10.description = "Do you want to fill out a Permission Request/Cost Estimate form?";
cards_10.status = 0;

var cards_11 = new Card();
cards_11.id = 11;
cards_11.name = "END - Provide Permission Request/Cost Estimate Form";
cards_11.description = "Please click <a href=http://library.marist.edu/copyright/forms/copyright.php target=_blank>here</a> " +
                       "to fill out the Permission Request/Cost Estimate form.";
cards_11.status = 3;

var cards_12 = new Card();
cards_12.id = 12;
cards_12.name = "Ask about Fair Use Checklist";
cards_12.description = "Do you want to view the Fair Use Checklist?";
cards_12.status = 0;

var cards_13 = new Card();
cards_13.id = 13;
cards_13.name = "END - Provide Checklist PDF";
cards_13.description = "Please click <a href=../forms/MARISTCOLLEGEFairUseChecklist.pdf target=_blank>" +
                       "here</a> to view the Fair Use Checklist.";
cards_13.status = 3;

var cards_14 = new Card();
cards_14.id = 14;
cards_14.name = "END - Check the copyright";
cards_14.description = "Sorry! There is nothing we can do at this point to help " +
                       "provide the copyrighted materials to you.";
cards_14.status = 3;

var cards_15 = new Card();
cards_15.id = 15;
cards_15.name = "Introductory card";
cards_15.description = "Are there materials whose copyright status you are unsure of?";
cards_15.status = 0;

var cards_16 = new Card();
cards_16.id = 16;
cards_16.name = "END - This is not the site you're looking for";
cards_16.description = "This site is intended for users who are seeking copyright-protected " +
                       "materials for education purposes and/or research purposes. You can " +
                       "head on over to the <a href=resources1.html>Copyright Toolbox</a> " +
                       "for more information about copyrighted materials or play the " +
                       "<a href=game.html>Test your Copyright IQ game</a> that " +
                       "challenges you to identify which materials are copyrighted, and " +
                       "which materials are not.";
cards_16.status = 3;