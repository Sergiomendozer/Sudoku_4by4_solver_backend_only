// DOM Manipulation: Selecting & changing website elements
// var unicycle = document.getElementsByClassName("unicycle");
// var paragraphs = document.getElementsByTagName("p");
// var queryUnicycle = document.querySelector(".unicycle");
// var queryAll = document.querySelectorAll(".unicycle, #div2");
var div1 = document.getElementById("div1");
var text = "<h1>Hello World</h1>";
document.getElementById("div1").innerHTML = text;

var table = document.getElementById("table");
var first_sudoku = "<h1>[[X,X,X,X] [1,X,2,X], [X,1,4,X], [2,X,X,1]]</h1>";
document.getElementById("table").innerHTML = first_sudoku;
