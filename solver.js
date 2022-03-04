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
var sortable = [];

function counter_1(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_one = counter;
  //   console.log(`one:${counter}`);
}

function counter_2(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_two = counter;
  //   console.log(`two:${counter}`);
}

function counter_3(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_three = counter;
  //   console.log(`three:${counter}`);
}
function counter_4(sudoku, sudoku_num, counter) {
  for (let i = 0; i < 4; i++) {
    if (sudoku[i].indexOf(sudoku_num) != -1) {
      counter++;
    }
  }
  count_four = counter;
  //   console.log(`four:${counter}`);
}

function order_of_sudoku_numbers() {
  var dict = {};
  dict["one"] = count_one;
  dict["two"] = count_two;
  dict["three"] = count_three;
  dict["four"] = count_four;

  console.log(dict);
  for (var count in dict) {
    sortable.push([count, dict[count]]);
  }

  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });
  console.log(sortable);
  //   console.log(sortable[0][0]);
}

//TODO: no for loop need to call another section after
//TODO: [0][0] should be function name
function can_you_put_a_1_pos3_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][3].indexOf("1") != -1 ||
    first_sudoku[3][3].indexOf("2") != -1 ||
    first_sudoku[3][3].indexOf("3") != -1 ||
    first_sudoku[3][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    // return can_you_put_a_1_pos3_3();
  } else if (
    first_sudoku[3].indexOf("1") == -1 &&
    first_sudoku[3][3].indexOf("1") == -1 &&
    first_sudoku[3][3].indexOf("1") == -1 &&
    first_sudoku[3][3].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][3] = "Y";
    // return can_you_put_a_1_pos3_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][3] = "N";
    // return can_you_put_a_1_pos3_3();
  }
}
function can_you_put_a_1_pos3_2() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][2].indexOf("1") != -1 ||
    first_sudoku[3][2].indexOf("2") != -1 ||
    first_sudoku[3][2].indexOf("3") != -1 ||
    first_sudoku[3][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos3_3();
  } else if (
    first_sudoku[3].indexOf("1") == -1 &&
    first_sudoku[3][2].indexOf("1") == -1 &&
    first_sudoku[3][2].indexOf("1") == -1 &&
    first_sudoku[3][2].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][2] = "Y";
    return can_you_put_a_1_pos3_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][2] = "N";
    return can_you_put_a_1_pos3_3();
  }
}
function can_you_put_a_1_pos3_1() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][1].indexOf("1") != -1 ||
    first_sudoku[3][1].indexOf("2") != -1 ||
    first_sudoku[3][1].indexOf("3") != -1 ||
    first_sudoku[3][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos3_2();
  } else if (
    first_sudoku[3].indexOf("1") == -1 &&
    first_sudoku[3][1].indexOf("1") == -1 &&
    first_sudoku[3][1].indexOf("1") == -1 &&
    first_sudoku[3][1].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][1] = "Y";
    return can_you_put_a_1_pos3_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][1] = "N";
    return can_you_put_a_1_pos3_2();
  }
}
function can_you_put_a_1_pos3_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][0].indexOf("1") != -1 ||
    first_sudoku[3][0].indexOf("2") != -1 ||
    first_sudoku[3][0].indexOf("3") != -1 ||
    first_sudoku[3][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos3_1();
  } else if (
    first_sudoku[3].indexOf("1") == -1 &&
    first_sudoku[3][0].indexOf("1") == -1 &&
    first_sudoku[3][0].indexOf("1") == -1 &&
    first_sudoku[3][0].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][0] = "Y";
    return can_you_put_a_1_pos3_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][0] = "N";
    return can_you_put_a_1_pos3_1();
  }
}
function can_you_put_a_1_pos2_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][3].indexOf("1") != -1 ||
    first_sudoku[2][3].indexOf("2") != -1 ||
    first_sudoku[2][3].indexOf("3") != -1 ||
    first_sudoku[2][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos3_0();
  } else if (
    first_sudoku[2].indexOf("1") == -1 &&
    first_sudoku[2][3].indexOf("1") == -1 &&
    first_sudoku[2][3].indexOf("1") == -1 &&
    first_sudoku[2][3].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][3] = "Y";
    return can_you_put_a_1_pos3_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][3] = "N";
    return can_you_put_a_1_pos3_0();
  }
}
function can_you_put_a_1_pos2_2() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][2].indexOf("1") != -1 ||
    first_sudoku[2][2].indexOf("2") != -1 ||
    first_sudoku[2][2].indexOf("3") != -1 ||
    first_sudoku[2][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos2_3();
  } else if (
    first_sudoku[2].indexOf("1") == -1 &&
    first_sudoku[2][2].indexOf("1") == -1 &&
    first_sudoku[2][2].indexOf("1") == -1 &&
    first_sudoku[2][2].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][2] = "Y";
    return can_you_put_a_1_pos2_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][2] = "N";
    return can_you_put_a_1_pos2_3();
  }
}
function can_you_put_a_1_pos2_1() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][1].indexOf("1") != -1 ||
    first_sudoku[2][1].indexOf("2") != -1 ||
    first_sudoku[2][1].indexOf("3") != -1 ||
    first_sudoku[2][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos2_2();
  } else if (
    first_sudoku[2].indexOf("1") == -1 &&
    first_sudoku[2][1].indexOf("1") == -1 &&
    first_sudoku[2][1].indexOf("1") == -1 &&
    first_sudoku[2][1].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][1] = "Y";
    return can_you_put_a_1_pos2_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][1] = "N";
    return can_you_put_a_1_pos2_2();
  }
}
function can_you_put_a_1_pos2_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][0].indexOf("1") != -1 ||
    first_sudoku[2][0].indexOf("2") != -1 ||
    first_sudoku[2][0].indexOf("3") != -1 ||
    first_sudoku[2][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos2_1();
  } else if (
    first_sudoku[2].indexOf("1") == -1 &&
    first_sudoku[2][0].indexOf("1") == -1 &&
    first_sudoku[2][0].indexOf("1") == -1 &&
    first_sudoku[2][0].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][0] = "Y";
    return can_you_put_a_1_pos2_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][0] = "N";
    return can_you_put_a_1_pos2_1();
  }
}
function can_you_put_a_1_pos1_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][3].indexOf("1") != -1 ||
    first_sudoku[1][3].indexOf("2") != -1 ||
    first_sudoku[1][3].indexOf("3") != -1 ||
    first_sudoku[1][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos2_0();
  } else if (
    first_sudoku[1].indexOf("1") == -1 &&
    first_sudoku[1][3].indexOf("1") == -1 &&
    first_sudoku[1][3].indexOf("1") == -1 &&
    first_sudoku[1][3].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][3] = "Y";
    return can_you_put_a_1_pos2_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][3] = "N";
    return can_you_put_a_1_pos2_0();
  }
}
function can_you_put_a_1_pos1_2() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][2].indexOf("1") != -1 ||
    first_sudoku[1][2].indexOf("2") != -1 ||
    first_sudoku[1][2].indexOf("3") != -1 ||
    first_sudoku[1][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos1_3();
  } else if (
    first_sudoku[1].indexOf("1") == -1 &&
    first_sudoku[1][2].indexOf("1") == -1 &&
    first_sudoku[2][2].indexOf("1") == -1 &&
    first_sudoku[3][2].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][2] = "Y";
    return can_you_put_a_1_pos1_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][2] = "N";
    return can_you_put_a_1_pos1_3();
  }
}
function can_you_put_a_1_pos1_1() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][1].indexOf("1") != -1 ||
    first_sudoku[1][1].indexOf("2") != -1 ||
    first_sudoku[1][1].indexOf("3") != -1 ||
    first_sudoku[1][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos1_2();
  } else if (
    first_sudoku[1].indexOf("1") == -1 &&
    first_sudoku[1][1].indexOf("1") == -1 &&
    first_sudoku[2][1].indexOf("1") == -1 &&
    first_sudoku[3][1].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][1] = "Y";
    return can_you_put_a_1_pos1_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][1] = "N";
    return can_you_put_a_1_pos1_2();
  }
}
function can_you_put_a_1_pos1_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][0].indexOf("1") != -1 ||
    first_sudoku[1][0].indexOf("2") != -1 ||
    first_sudoku[1][0].indexOf("3") != -1 ||
    first_sudoku[1][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos1_1();
  } else if (
    first_sudoku[1].indexOf("1") == -1 &&
    first_sudoku[1][0].indexOf("1") == -1 &&
    first_sudoku[2][0].indexOf("1") == -1 &&
    first_sudoku[3][0].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][0] = "Y";
    return can_you_put_a_1_pos1_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][0] = "N";
    return can_you_put_a_1_pos1_1();
  }
}

function can_you_put_a_1_pos0_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[0][3].indexOf("1") != -1 ||
    first_sudoku[0][3].indexOf("2") != -1 ||
    first_sudoku[0][3].indexOf("3") != -1 ||
    first_sudoku[0][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos1_0();
  } else if (
    first_sudoku[0].indexOf("1") == -1 &&
    first_sudoku[1][3].indexOf("1") == -1 &&
    first_sudoku[2][3].indexOf("1") == -1 &&
    first_sudoku[3][3].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][3] = "Y";
    return can_you_put_a_1_pos1_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][3] = "N";
    return can_you_put_a_1_pos1_0();
  }
}

//!put a Y in section
function can_you_put_a_1_pos0_2() {
  console.log(first_sudoku); //! delete
  if (
    first_sudoku[0][2].indexOf("1") != -1 ||
    first_sudoku[0][2].indexOf("2") != -1 ||
    first_sudoku[0][2].indexOf("3") != -1 ||
    first_sudoku[0][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos0_3();
  } else if (
    first_sudoku[0].indexOf("1") == -1 &&
    first_sudoku[1][2].indexOf("1") == -1 &&
    first_sudoku[2][2].indexOf("1") == -1 &&
    first_sudoku[3][2].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][2] = "Y";
    return can_you_put_a_1_pos0_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][2] = "N";
    return can_you_put_a_1_pos0_3();
  }
}

function can_you_put_a_1_pos0_1() {
  console.log(first_sudoku); //! delete
  if (
    first_sudoku[0][1].indexOf("1") != -1 ||
    first_sudoku[0][1].indexOf("2") != -1 ||
    first_sudoku[0][1].indexOf("3") != -1 ||
    first_sudoku[0][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos0_1();
  } else if (
    first_sudoku[0].indexOf("1") == -1 &&
    first_sudoku[1][1].indexOf("1") == -1 &&
    first_sudoku[2][1].indexOf("1") == -1 &&
    first_sudoku[3][1].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][1] = "Y";
    return can_you_put_a_1_pos0_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][1] = "N";
    return can_you_put_a_1_pos0_2();
  }
}

function can_you_put_a_1_pos0_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[0][0].indexOf("1") != -1 ||
    first_sudoku[0][0].indexOf("2") != -1 ||
    first_sudoku[0][0].indexOf("3") != -1 ||
    first_sudoku[0][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_a_1_pos0_1(); // call pos0_1 next
  } else if (
    first_sudoku[0].indexOf("1") == -1 &&
    first_sudoku[1][0].indexOf("1") == -1 &&
    first_sudoku[2][0].indexOf("1") == -1 &&
    first_sudoku[3][0].indexOf("1") == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][0] = "Y";
    return can_you_put_a_1_pos0_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][0] = "N";
    return can_you_put_a_1_pos0_1();
  }
}

function first_number_to_insert() {
  if (sortable[0][0] == "one") {
    return can_you_put_a_1_pos0_0();
    // call function insert_1()
  } else if (sortable[0][0] == "two") {
    // call function insert_2()
  } else if (sortable[0][0] == "three") {
    // call function insert_3()
  } else if (sortable[0][0] == "four") {
    // call function insert_4()
  }
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
first_number_to_insert();
