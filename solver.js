// DOM Manipulation: Selecting & changing website elements
// var unicycle = document.getElementsByClassName("unicycle");
// var paragraphs = document.getElementsByTagName("p");
// var queryUnicycle = document.querySelector(".unicycle");
// var queryAll = document.querySelectorAll(".unicycle, #div2");
var div1 = document.getElementById("div1");
var text = "<h1>Hello World</h1>";
document.getElementById("div1").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var first_sudoku = [
  ["X", "X", "X", "X"],
  ["1", "X", "2", "X"],
  ["X", "1", "4", "X"],
  ["2", "X", "X", "1"],
];

var first_col = first_sudoku[0];
var second_col = first_sudoku[1];
var third_col = first_sudoku[2];
var forth_col = first_sudoku[3];

document.getElementById("table_1").innerHTML = first_col;
document.getElementById("table_2").innerHTML = second_col;
document.getElementById("table_3").innerHTML = third_col;
document.getElementById("table_4").innerHTML = forth_col;
//////////////////////////////////
function counter_for_numbers_in_chart(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  console.log(`count ${counter}`);
}

var one = "1";
var two = "2";
var three = "3";
var four = "4";
var count_one = 0;
var count_two = 0;
var count_three = 0;
var count_four = 0;

counter_for_numbers_in_chart(first_sudoku, one, count_one);
counter_for_numbers_in_chart(first_sudoku, two, count_two);
counter_for_numbers_in_chart(first_sudoku, three, count_three);
counter_for_numbers_in_chart(first_sudoku, four, count_four);
