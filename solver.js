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
var n = "";
var sortable = [];
var cols_counter_Y = [];

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
// make sure there is not more Y's and id there is call pos0_0
//? loop to create
//? if position == N or == Y replace with "X"
//! make function if (cols_counter_Y[1][1]...[0][1]..[2][1]..[3][1] greater than 1 run pos0_0 again.
function do_we_use_same_n() {
  console.log(cols_counter_Y);
  if (
    cols_counter_Y[0][1] >= 2 ||
    cols_counter_Y[1][1] >= 2 ||
    cols_counter_Y[2][1] >= 2 ||
    cols_counter_Y[3][1] >= 2
  ) {
    return can_you_put_n_in_pos0_0(n);
  } else {
    console.log(first_sudoku);
    count_one = 0;
    count_two = 0;
    count_three = 0;
    count_four = 0;
    counter_1(first_sudoku, one, count_one);
    counter_2(first_sudoku, two, count_two);
    counter_3(first_sudoku, three, count_three);
    counter_4(first_sudoku, four, count_four);
    console.log(first_sudoku);
    // order_of_sudoku_numbers();
    // first_number_to_insert();
  }
}

function replace_N_or_Y_with_X_col_4() {
  for (var i = 0; i < 4; i++) {
    if (first_sudoku[3][i] == "N" || first_sudoku[3][i] == "Y") {
      first_sudoku[3][i] = "X";
    }
  }
  return do_we_use_same_n();
}
function replace_N_or_Y_with_X_col_3() {
  for (var i = 0; i < 4; i++) {
    if (first_sudoku[2][i] == "N" || first_sudoku[2][i] == "Y") {
      first_sudoku[2][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_4();
}
function replace_N_or_Y_with_X_col_2() {
  for (var i = 0; i < 4; i++) {
    if (first_sudoku[1][i] == "N" || first_sudoku[1][i] == "Y") {
      first_sudoku[1][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_3();
}

function replace_N_or_Y_with_X_col_1() {
  for (var i = 0; i < 4; i++) {
    if (first_sudoku[0][i] == "N" || first_sudoku[0][i] == "Y") {
      first_sudoku[0][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_2();
}

function replace_Y_with_n() {
  // make sure this function is called
  console.log("111"); //!delete
  const countYs = (row) =>
    row.reduce((acc, curr) => acc + (curr === "Y" ? 1 : 0), 0);
  // number of Ys in each row
  var countsY = first_sudoku.map(countYs);
  console.log(countsY); //!delete
  var cols = ["column 1", "column 2", "column 3", "column 4"];
  // zips files
  cols_counter_Y = cols.map(function (e, i) {
    return [e, countsY[i]];
  });

  console.log(cols_counter_Y); //!delete
  if (cols_counter_Y[0][1] == 1) {
    var placement = first_sudoku[0].indexOf("Y");
    first_sudoku[0][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[1][1] == 1) {
    var placement = first_sudoku[1].indexOf("Y");
    first_sudoku[1][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[2][1] == 1) {
    var placement = first_sudoku[2].indexOf("Y");
    first_sudoku[2][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[3][1] == 1) {
    var placement = first_sudoku[3].indexOf("Y");
    first_sudoku[3][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  }
}

function can_you_put_n_in_pos3_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][3].indexOf("1") != -1 ||
    first_sudoku[3][3].indexOf("2") != -1 ||
    first_sudoku[3][3].indexOf("3") != -1 ||
    first_sudoku[3][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return replace_Y_with_n();
    // return can_you_put_n_in_pos3_3();
  } else if (
    first_sudoku[3].indexOf(n) == -1 &&
    first_sudoku[3][3].indexOf(n) == -1 &&
    first_sudoku[3][3].indexOf(n) == -1 &&
    first_sudoku[3][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][3] = "Y";
    return replace_Y_with_n();
    // return can_you_put_n_in_pos3_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][3] = "N";
    return replace_Y_with_n();
    // return can_you_put_n_in_pos3_3();
  }
}
function can_you_put_n_in_pos3_2() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][2].indexOf("1") != -1 ||
    first_sudoku[3][2].indexOf("2") != -1 ||
    first_sudoku[3][2].indexOf("3") != -1 ||
    first_sudoku[3][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_3();
  } else if (
    first_sudoku[3].indexOf(n) == -1 &&
    first_sudoku[3][2].indexOf(n) == -1 &&
    first_sudoku[3][2].indexOf(n) == -1 &&
    first_sudoku[3][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][2] = "Y";
    return can_you_put_n_in_pos3_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][2] = "N";
    return can_you_put_n_in_pos3_3();
  }
}
function can_you_put_n_in_pos3_1() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][1].indexOf("1") != -1 ||
    first_sudoku[3][1].indexOf("2") != -1 ||
    first_sudoku[3][1].indexOf("3") != -1 ||
    first_sudoku[3][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_2();
  } else if (
    first_sudoku[3].indexOf(n) == -1 &&
    first_sudoku[3][1].indexOf(n) == -1 &&
    first_sudoku[3][1].indexOf(n) == -1 &&
    first_sudoku[3][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][1] = "Y";
    return can_you_put_n_in_pos3_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][1] = "N";
    return can_you_put_n_in_pos3_2();
  }
}
function can_you_put_n_in_pos3_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[3][0].indexOf("1") != -1 ||
    first_sudoku[3][0].indexOf("2") != -1 ||
    first_sudoku[3][0].indexOf("3") != -1 ||
    first_sudoku[3][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_1();
  } else if (
    first_sudoku[3].indexOf(n) == -1 &&
    first_sudoku[3][0].indexOf(n) == -1 &&
    first_sudoku[3][0].indexOf(n) == -1 &&
    first_sudoku[3][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[3][0] = "Y";
    return can_you_put_n_in_pos3_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[3][0] = "N";
    return can_you_put_n_in_pos3_1();
  }
}
function can_you_put_n_in_pos2_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][3].indexOf("1") != -1 ||
    first_sudoku[2][3].indexOf("2") != -1 ||
    first_sudoku[2][3].indexOf("3") != -1 ||
    first_sudoku[2][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_0();
  } else if (
    first_sudoku[2].indexOf(n) == -1 &&
    first_sudoku[2][3].indexOf(n) == -1 &&
    first_sudoku[2][3].indexOf(n) == -1 &&
    first_sudoku[2][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][3] = "Y";
    return can_you_put_n_in_pos3_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][3] = "N";
    return can_you_put_n_in_pos3_0();
  }
}
function can_you_put_n_in_pos2_2() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][2].indexOf("1") != -1 ||
    first_sudoku[2][2].indexOf("2") != -1 ||
    first_sudoku[2][2].indexOf("3") != -1 ||
    first_sudoku[2][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_3();
  } else if (
    first_sudoku[2].indexOf(n) == -1 &&
    first_sudoku[2][2].indexOf(n) == -1 &&
    first_sudoku[2][2].indexOf(n) == -1 &&
    first_sudoku[2][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][2] = "Y";
    return can_you_put_n_in_pos2_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][2] = "N";
    return can_you_put_n_in_pos2_3();
  }
}
function can_you_put_n_in_pos2_1() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][1].indexOf("1") != -1 ||
    first_sudoku[2][1].indexOf("2") != -1 ||
    first_sudoku[2][1].indexOf("3") != -1 ||
    first_sudoku[2][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_2();
  } else if (
    first_sudoku[2].indexOf(n) == -1 &&
    first_sudoku[2][1].indexOf(n) == -1 &&
    first_sudoku[2][1].indexOf(n) == -1 &&
    first_sudoku[2][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][1] = "Y";
    return can_you_put_n_in_pos2_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][1] = "N";
    return can_you_put_n_in_pos2_2();
  }
}
function can_you_put_n_in_pos2_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[2][0].indexOf("1") != -1 ||
    first_sudoku[2][0].indexOf("2") != -1 ||
    first_sudoku[2][0].indexOf("3") != -1 ||
    first_sudoku[2][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_1();
  } else if (
    first_sudoku[2].indexOf(n) == -1 &&
    first_sudoku[2][0].indexOf(n) == -1 &&
    first_sudoku[2][0].indexOf(n) == -1 &&
    first_sudoku[2][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[2][0] = "Y";
    return can_you_put_n_in_pos2_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[2][0] = "N";
    return can_you_put_n_in_pos2_1();
  }
}
function can_you_put_n_in_pos1_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][3].indexOf("1") != -1 ||
    first_sudoku[1][3].indexOf("2") != -1 ||
    first_sudoku[1][3].indexOf("3") != -1 ||
    first_sudoku[1][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_0();
  } else if (
    first_sudoku[1].indexOf(n) == -1 &&
    first_sudoku[1][3].indexOf(n) == -1 &&
    first_sudoku[1][3].indexOf(n) == -1 &&
    first_sudoku[1][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][3] = "Y";
    return can_you_put_n_in_pos2_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][3] = "N";
    return can_you_put_n_in_pos2_0();
  }
}
function can_you_put_n_in_pos1_2() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][2].indexOf("1") != -1 ||
    first_sudoku[1][2].indexOf("2") != -1 ||
    first_sudoku[1][2].indexOf("3") != -1 ||
    first_sudoku[1][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_3();
  } else if (
    first_sudoku[1].indexOf(n) == -1 &&
    first_sudoku[1][2].indexOf(n) == -1 &&
    first_sudoku[2][2].indexOf(n) == -1 &&
    first_sudoku[3][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][2] = "Y";
    return can_you_put_n_in_pos1_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][2] = "N";
    return can_you_put_n_in_pos1_3();
  }
}
function can_you_put_n_in_pos1_1() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][1].indexOf("1") != -1 ||
    first_sudoku[1][1].indexOf("2") != -1 ||
    first_sudoku[1][1].indexOf("3") != -1 ||
    first_sudoku[1][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_2();
  } else if (
    first_sudoku[1].indexOf(n) == -1 &&
    first_sudoku[1][1].indexOf(n) == -1 &&
    first_sudoku[2][1].indexOf(n) == -1 &&
    first_sudoku[3][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][1] = "Y";
    return can_you_put_n_in_pos1_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][1] = "N";
    return can_you_put_n_in_pos1_2();
  }
}
function can_you_put_n_in_pos1_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[1][0].indexOf("1") != -1 ||
    first_sudoku[1][0].indexOf("2") != -1 ||
    first_sudoku[1][0].indexOf("3") != -1 ||
    first_sudoku[1][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_1();
  } else if (
    first_sudoku[1].indexOf(n) == -1 &&
    first_sudoku[1][0].indexOf(n) == -1 &&
    first_sudoku[2][0].indexOf(n) == -1 &&
    first_sudoku[3][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[1][0] = "Y";
    return can_you_put_n_in_pos1_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[1][0] = "N";
    return can_you_put_n_in_pos1_1();
  }
}

function can_you_put_n_in_pos0_3() {
  console.log(first_sudoku);
  if (
    first_sudoku[0][3].indexOf("1") != -1 ||
    first_sudoku[0][3].indexOf("2") != -1 ||
    first_sudoku[0][3].indexOf("3") != -1 ||
    first_sudoku[0][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_0();
  } else if (
    first_sudoku[0].indexOf(n) == -1 &&
    first_sudoku[1][3].indexOf(n) == -1 &&
    first_sudoku[2][3].indexOf(n) == -1 &&
    first_sudoku[3][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][3] = "Y";
    return can_you_put_n_in_pos1_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][3] = "N";
    return can_you_put_n_in_pos1_0();
  }
}

//!put a Y in section
function can_you_put_n_in_pos0_2() {
  console.log(first_sudoku); //! delete
  if (
    first_sudoku[0][2].indexOf("1") != -1 ||
    first_sudoku[0][2].indexOf("2") != -1 ||
    first_sudoku[0][2].indexOf("3") != -1 ||
    first_sudoku[0][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos0_3();
  } else if (
    first_sudoku[0].indexOf(n) == -1 &&
    first_sudoku[1][2].indexOf(n) == -1 &&
    first_sudoku[2][2].indexOf(n) == -1 &&
    first_sudoku[3][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][2] = "Y";
    return can_you_put_n_in_pos0_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][2] = "N";
    return can_you_put_n_in_pos0_3();
  }
}

function can_you_put_n_in_pos0_1() {
  console.log(first_sudoku); //! delete
  if (
    first_sudoku[0][1].indexOf("1") != -1 ||
    first_sudoku[0][1].indexOf("2") != -1 ||
    first_sudoku[0][1].indexOf("3") != -1 ||
    first_sudoku[0][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos0_1();
  } else if (
    first_sudoku[0].indexOf(n) == -1 &&
    first_sudoku[1][1].indexOf(n) == -1 &&
    first_sudoku[2][1].indexOf(n) == -1 &&
    first_sudoku[3][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][1] = "Y";
    return can_you_put_n_in_pos0_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][1] = "N";
    return can_you_put_n_in_pos0_2();
  }
}

function can_you_put_n_in_pos0_0() {
  console.log(first_sudoku);
  if (
    first_sudoku[0][0].indexOf("1") != -1 ||
    first_sudoku[0][0].indexOf("2") != -1 ||
    first_sudoku[0][0].indexOf("3") != -1 ||
    first_sudoku[0][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos0_1();
  } else if (
    first_sudoku[0].indexOf(n) == -1 &&
    first_sudoku[1][0].indexOf(n) == -1 &&
    first_sudoku[2][0].indexOf(n) == -1 &&
    first_sudoku[3][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    first_sudoku[0][0] = "Y";
    return can_you_put_n_in_pos0_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    first_sudoku[0][0] = "N";
    return can_you_put_n_in_pos0_1();
  }
}

// * highlighted bookmark
// make second to insert
function first_number_to_insert() {
  if (sortable[0][0] == "one") {
    n = "1";
    return can_you_put_n_in_pos0_0(n);
  } else if (sortable[0][0] == "two") {
    n = "2";
    return can_you_put_n_in_pos0_0(n);
  } else if (sortable[0][0] == "three") {
    n = "3";
    return can_you_put_n_in_pos0_0(n);
  } else if (sortable[0][0] == "four") {
    n = "4";
    return can_you_put_n_in_pos0_0(n);
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
