var dishNumber = Math.floor(Math.random() * 11) + 1; 
var imageDisplay = "dish" + dishNumber + ".jpg"; 
var imageAdd = "images/" + imageDisplay; 

document.querySelectorAll("img")[0].setAttribute("src", imageAdd);