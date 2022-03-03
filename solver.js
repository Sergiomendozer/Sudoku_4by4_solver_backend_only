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
// var dict = {};
// function sort_dict() {
//   console.log(dict);
//     var sorted_dict = [];
//     for (var x in dict) {
//       sorted_dict.push(dict[x]);
//     }
//   dict.sort(function (a, b) {
//     return b[1] - a[1];
//   });
//   console.log(dict);
// }
var count_one = 0;
var count_two = 0;
var count_three = 0;
var count_four = 0;

function counter_1(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_one = counter;
  console.log(`one:${counter}`);
}

function counter_2(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_two = counter;
  console.log(`two:${counter}`);
}

function counter_3(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_three = counter;
  console.log(`three:${counter}`);
}
function counter_4(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_four = counter;
  console.log(`four:${counter}`);
}

function order_of_sudoku_numbers() {
  var dict = {};
  dict["one"] = count_one;
  dict["two"] = count_two;
  dict["three"] = count_three;
  dict["four"] = count_four;

  console.log(dict);

  var sortable = [];
  for (var count in dict) {
    sortable.push([count, dict[count]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(sortable);

  console.log(sortable[0][0]);
}

var one = "1";
var two = "2";
var three = "3";
var four = "4";

counter_1(first_sudoku, one, count_one);
counter_2(first_sudoku, two, count_two);
counter_3(first_sudoku, three, count_three);
counter_4(first_sudoku, four, count_four);
order_of_sudoku_numbers();
