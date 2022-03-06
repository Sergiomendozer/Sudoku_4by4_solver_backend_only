var div1 = document.getElementById("div1");
var text = "<h1>Hello World</h1>";
document.getElementById("div1").innerHTML = text;

var table_1 = document.getElementById("table_1");
var table_2 = document.getElementById("table_2");
var table_3 = document.getElementById("table_3");
var table_4 = document.getElementById("table_4");
var sudoku_1 = [
  ["X", "X", "X", "X"],
  ["1", "X", "2", "X"],
  ["X", "1", "4", "X"],
  ["2", "X", "X", "1"],
];
var sudoku_2 = [
  ["X", "4", "3", "X"],
  ["3", "X", "X", "X"],
  ["2", "X", "1", "X"],
  ["X", "X", "X", "X"],
];
var sudoku_3 = [
  ["X", "X", "X", "2"],
  ["X", "2", "4", "X"],
  ["X", "X", "1", "X"],
  ["X", "4", "X", "3"],
];
var sudoku_4 = [
  ["X", "4", "X", "3"],
  ["X", "2", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "3", "4", "1"],
];
var sudoku_5 = [
  ["X", "3", "X", "X"],
  ["1", "X", "X", "3"],
  ["X", "X", "X", "1"],
  ["2", "X", "X", "X"],
];
var sudoku_6 = [
  ["3", "X", "X", "X"],
  ["X", "4", "3", "X"],
  ["1", "X", "X", "2"],
  ["X", "2", "1", "X"],
];
var sudoku_7 = [
  ["X", "4", "X", "2"],
  ["1", "X", "X", "X"],
  ["X", "X", "3", "X"],
  ["4", "X", "X", "1"],
];
var sudoku_8 = [
  ["3", "X", "X", "1"],
  ["X", "4", "2", "X"],
  ["X", "1", "X", "X"],
  ["2", "X", "X", "4"],
];
var sudoku_9 = [
  ["X", "X", "1", "X"],
  ["X", "4", "X", "X"],
  ["X", "X", "X", "2"],
  ["X", "2", "3", "X"],
];
var sudoku_10 = [
  ["X", "3", "2", "X"],
  ["4", "X", "X", "1"],
  ["2", "X", "X", "3"],
  ["X", "1", "4", "X"],
];
var sudoku_11 = [
  ["X", "4", "X", "X"],
  ["2", "X", "X", "3"],
  ["4", "X", "1", "X"],
  ["X", "X", "X", "X"],
];
var sudoku_12 = [
  ["3", "X", "X", "4"],
  ["2", "X", "X", "X"],
  ["1", "X", "4", "3"],
  ["X", "X", "X", "X"],
];
var sudoku_13 = [
  ["X", "X", "X", "2"],
  ["X", "3", "X", "4"],
  ["1", "X", "X", "X"],
  ["X", "2", "X", "X"],
];
var sudoku_14 = [
  ["4", "X", "3", "X"],
  ["X", "1", "X", "2"],
  ["X", "3", "X", "4"],
  ["2", "X", "1", "X"],
];
var sudoku_15 = [
  ["X", "2", "3", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["4", "X", "X", "1"],
];
var sudoku_16 = [
  ["4", "X", "X", "X"],
  ["X", "3", "X", "2"],
  ["X", "1", "X", "X"],
  ["X", "X", "X", "3"],
];
var sudoku_17 = [
  ["3", "X", "X", "X"],
  ["X", "X", "4", "X"],
  ["4", "X", "X", "X"],
  ["X", "3", "1", "X"],
];
var sudoku_18 = [
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "X"],
];
var sudoku_19 = [
  ["X", "X", "1", "X"],
  ["X", "X", "X", "3"],
  ["X", "1", "X", "2"],
  ["4", "X", "3", "X"],
];
var sudoku_20 = [
  ["3", "X", "X", "X"],
  ["X", "4", "1", "X"],
  ["X", "2", "X", "X"],
  ["1", "X", "4", "X"],
];
var sudoku_21 = [
  ["3", "X", "4", "X"],
  ["X", "X", "X", "1"],
  ["X", "2", "X", "X"],
  ["1", "X", "X", "4"],
];
var sudoku_22 = [
  ["X", "4", "X", "X"],
  ["X", "X", "2", "X"],
  ["X", "1", "X", "X"],
  ["X", "X", "X", "3"],
];
var sudoku_23 = [
  ["X", "X", "X", "X"],
  ["1", "4", "X", "X"],
  ["X", "X", "2", "X"],
  ["X", "2", "4", "X"],
];

var sudoku_24 = [
  ["X", "X", "X", "X"],
  ["X", "X", "4", "3"],
  ["2", "X", "X", "4"],
  ["3", "X", "1", "X"],
];
var sudoku_25 = [
  ["X", "1", "X", "3"],
  ["2", "X", "X", "X"],
  ["X", "X", "3", "X"],
  ["X", "2", "X", "1"],
];
var sudoku_26 = [
  ["X", "X", "X", "4"],
  ["X", "2", "3", "X"],
  ["1", "X", "4", "X"],
  ["X", "X", "X", "X"],
];
var sudoku_27 = [
  ["X", "1", "2", "X"],
  ["X", "X", "X", "X"],
  ["3", "X", "X", "X"],
  ["X", "2", "X", "4"],
];
var sudoku_28 = [
  ["3", "X", "X", "X"],
  ["X", "2", "4", "X"],
  ["X", "X", "2", "X"],
  ["X", "1", "X", "X"],
];
var sudoku_29 = [
  ["X", "X", "3", "X"],
  ["X", "2", "1", "X"],
  ["1", "X", "X", "2"],
  ["X", "4", "3", "X"],
];
var sudoku_30 = [
  ["X", "X", "X", "4"],
  ["X", "2", "3", "X"],
  ["X", "3", "X", "2"],
  ["X", "X", "1", "X"],
];
var sudoku_31 = [
  ["2", "X", "X", "X"],
  ["1", "4", "X", "X"],
  ["X", "X", "3", "1"],
  ["X", "X", "X", "2"],
];
var sudoku_32 = [
  ["X", "X", "X", "X"],
  ["2", "X", "X", "3"],
  ["X", "X", "3", "X"],
  ["X", "4", "X", "1"],
];
var sudoku_33 = [
  ["2", "X", "X", "4"],
  ["X", "4", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "3", "X", "1"],
];
var sudoku_34 = [
  ["2", "X", "X", "X"],
  ["3", "1", "X", "X"],
  ["X", "X", "X", "3"],
  ["X", "X", "4", "2"],
];
var sudoku_35 = [
  ["X", "3", "X", "1"],
  ["X", "X", "X", "X"],
  ["X", "2", "X", "X"],
  ["4", "X", "2", "X"],
];
var sudoku_36 = [
  ["3", "X", "4", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "1", "X"],
  ["4", "X", "X", "2"],
];
var sudoku_37 = [
  ["X", "2", "X", "X"],
  ["4", "X", "3", "X"],
  ["1", "X", "X", "X"],
  ["X", "3", "4", "X"],
];
var sudoku_38 = [
  ["2", "3", "X", "X"],
  ["X", "X", "X", "X"],
  ["1", "X", "X", "2"],
  ["X", "X", "4", "X"],
];
var sudoku_39 = [
  ["X", "1", "X", "3"],
  ["X", "X", "4", "X"],
  ["X", "2", "X", "X"],
  ["X", "X", "1", "X"],
];
var sudoku_40 = [
  ["X", "X", "2", "X"],
  ["1", "X", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "3", "X", "4"],
];
var sudoku_41 = [
  ["X", "4", "X", "X"],
  ["X", "X", "X", "1"],
  ["X", "3", "X", "X"],
  ["2", "X", "X", "4"],
];
var sudoku_42 = [
  ["2", "X", "X", "X"],
  ["X", "4", "X", "X"],
  ["X", "X", "X", "3"],
  ["4", "X", "X", "1"],
];
var sudoku_43 = [
  ["X", "X", "X", "1"],
  ["3", "X", "4", "X"],
  ["1", "X", "X", "X"],
  ["X", "2", "X", "3"],
];
var sudoku_44 = [
  ["X", "X", "1", "4"],
  ["X", "X", "X", "X"],
  ["X", "3", "X", "X"],
  ["1", "X", "X", "2"],
];
var sudoku_45 = [
  ["X", "2", "4", "X"],
  ["X", "X", "X", "X"],
  ["3", "X", "X", "X"],
  ["X", "4", "X", "1"],
];
var sudoku_46 = [
  ["4", "X", "3", "X"],
  ["X", "X", "X", "2"],
  ["X", "3", "X", "4"],
  ["X", "X", "1", "X"],
];
var sudoku_47 = [
  ["4", "X", "X", "3"],
  ["X", "1", "4", "X"],
  ["2", "X", "X", "1"],
  ["X", "3", "X", "X"],
];
var sudoku_48 = [
  ["3", "2", "X", "X"],
  ["X", "X", "X", "X"],
  ["X", "X", "X", "1"],
  ["1", "X", "X", "3"],
];
var sudoku_49 = [
  ["4", "X", "3", "X"],
  ["X", "2", "X", "X"],
  ["X", "4", "X", "X"],
  ["2", "X", "X", "1"],
];
var sudoku_50 = [
  ["X", "X", "X", "X"],
  ["X", "4", "X", "3"],
  ["X", "3", "X", "X"],
  ["2", "X", "X", "4"],
];

var sudoku = sudoku_4;
//18 is not a 29 lost
// test not passed row/column does account4:
//list = [4,5,9,12,15,16,32,35,40,42,43,44,45]
// test not passed: 2,22,24,33,36,39
//square account 4: 13,28,31,41
var first_col = sudoku[0];
var second_col = sudoku[1];
var third_col = sudoku[2];
var forth_col = sudoku[3];

document.getElementById("table_1").innerHTML = first_col;
document.getElementById("table_2").innerHTML = second_col;
document.getElementById("table_3").innerHTML = third_col;
document.getElementById("table_4").innerHTML = forth_col;
//////////////////////////////////

var count_one = 0;
var count_two = 0;
var count_three = 0;
var count_four = 0;
var n = "";
var dict = {};
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

function is_it_solved() {
  if (count_one == 4 && count_two == 4 && count_three == 4 && count_four == 4) {
    console.log("Detective Sudoku Solver has solved another table");
  } else {
    return checker_is_1_solved();
  }
}

// * highlighted bookmark
function checker_is_4_solved() {
  if (count_four == 4) {
    count_four = -1;
    return order_of_sudoku_numbers();
  } else {
    return order_of_sudoku_numbers();
  }
}
function checker_is_3_solved() {
  if (count_three == 4) {
    count_three = -1;
    return checker_is_4_solved();
  } else {
    return checker_is_4_solved();
  }
}
function checker_is_2_solved() {
  if (count_two == 4) {
    count_two = -1;
    return checker_is_3_solved();
  } else {
    return checker_is_3_solved();
  }
}
function checker_is_1_solved() {
  if (count_one == 4) {
    count_one = -1;
    return checker_is_2_solved();
  } else {
    return checker_is_2_solved();
  }
}

function order_of_sudoku_numbers() {
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
  return which_number_to_insert();
}

// * highlighted bookmark// NEW
function do_we_use_same_n() {
  console.log(cols_counter_Y);
  if (
    cols_counter_Y[0][1] >= 2 ||
    cols_counter_Y[1][1] >= 2 ||
    cols_counter_Y[2][1] >= 2 ||
    cols_counter_Y[3][1] >= 2
  ) {
    return can_you_put_n_in_pos0_0(n);
  } else if (
    cols_counter_Y[0][1] == 2 ||
    cols_counter_Y[1][1] == 2 ||
    cols_counter_Y[2][1] == 2 ||
    cols_counter_Y[3][1] == 2
  ) {
    console.log("new");
  } else {
    console.log(sudoku);
    count_one = 0;
    count_two = 0;
    count_three = 0;
    count_four = 0;
    dict = {};
    sortable = [];
    counter_1(sudoku, one, count_one);
    counter_2(sudoku, two, count_two);
    counter_3(sudoku, three, count_three);
    counter_4(sudoku, four, count_four);
    console.log(sudoku);
    is_it_solved();
  }
}
function alter_s_add_4(p) {
  var place = sudoku[p].indexOf("X");
  sudoku[p][place] = "4";
  console.log(sudoku);
}
function alter_s_add_2(p) {
  var place = sudoku[p].indexOf("X");
  sudoku[p][place] = "2";
  console.log(sudoku);
}
function alter_s_add_3(p) {
  var place = sudoku[p].indexOf("X");
  sudoku[p][place] = "3";
  console.log(sudoku);
}
function alter_s_add_1(p) {
  var place = sudoku[p].indexOf("X");
  sudoku[p][place] = "1";
  console.log(sudoku);
}
//
//! add not situation so it does not grab that row or column, look below
//!add 1,2,4 situation
function three_numbers_in_row_or_column() {
  console.log("three_numbers_in_row_or_column"); // !delete
  if (
    sudoku[0].indexOf("1") != -1 &&
    sudoku[0].indexOf("2") != -1 &&
    sudoku[0].indexOf("3") != -1 &&
    sudoku[0].indexOf("4") >= 0
  ) {
    console.log("if"); // !delete
    var p = 0;
    return alter_s_add_4(p);
  } else if (
    sudoku[0].indexOf("1") != -1 &&
    sudoku[0].indexOf("2") != -1 &&
    sudoku[0].indexOf("4") != -1 &&
    sudoku[0].indexOf("3") >= 0
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_3(p);
  } else if (
    sudoku[0].indexOf("2") != -1 &&
    sudoku[0].indexOf("3") != -1 &&
    sudoku[0].indexOf("4") != -1 &&
    sudoku[0].indexOf("1") >= 0
  ) {
    console.log("if"); // !delete
    var p = 0;
    return alter_s_add_1(p);
  } else if (
    sudoku[0].indexOf("1") != -1 &&
    sudoku[0].indexOf("3") != -1 &&
    sudoku[0].indexOf("4") != -1 &&
    sudoku[0].indexOf("2") >= 0
  ) {
    console.log("if"); // !delete
    var p = 0;
    return alter_s_add_2(p);
  } else if (
    sudoku[1].indexOf("1") != -1 &&
    sudoku[1].indexOf("2") != -1 &&
    sudoku[1].indexOf("3") != -1 &&
    sudoku[1].indexOf("4") >= 0
  ) {
    console.log("if"); // !delete
    var p = 1;
    return alter_s_add_4(p);
  } else if (
    sudoku[1].indexOf("1") != -1 &&
    sudoku[1].indexOf("2") != -1 &&
    sudoku[1].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_3(p);
  } else if (
    sudoku[1].indexOf("2") != -1 &&
    sudoku[1].indexOf("3") != -1 &&
    sudoku[1].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 1;
    return alter_s_add_1(p);
  } else if (
    sudoku[1].indexOf("1") != -1 &&
    sudoku[1].indexOf("3") != -1 &&
    sudoku[1].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 1;
    return alter_s_add_2(p);
  } else if (
    sudoku[1].indexOf("2") != -1 &&
    sudoku[1].indexOf("3") != -1 &&
    sudoku[1].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 1;
    return alter_s_add_1(p);
  } else if (
    sudoku[2].indexOf("1") != -1 &&
    sudoku[2].indexOf("2") != -1 &&
    sudoku[2].indexOf("3") != -1
  ) {
    console.log("if"); // !delete
    var p = 2;
    return alter_s_add_4(p);
  } else if (
    sudoku[2].indexOf("1") != -1 &&
    sudoku[2].indexOf("2") != -1 &&
    sudoku[2].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_3(p);
  } else if (
    sudoku[2].indexOf("2") != -1 &&
    sudoku[2].indexOf("3") != -1 &&
    sudoku[2].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 1;
    return alter_s_add_1(p);
  } else if (
    sudoku[2].indexOf("1") != -1 &&
    sudoku[2].indexOf("3") != -1 &&
    sudoku[2].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 2;
    return alter_s_add_3(p);
  } else if (
    sudoku[2].indexOf("2") != -1 &&
    sudoku[2].indexOf("3") != -1 &&
    sudoku[2].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 2;
    return alter_s_add_1(p);
  } else if (
    sudoku[3].indexOf("1") != -1 &&
    sudoku[3].indexOf("2") != -1 &&
    sudoku[3].indexOf("3") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_4(p);
  } else if (
    sudoku[3].indexOf("1") != -1 &&
    sudoku[3].indexOf("2") != -1 &&
    sudoku[3].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_3(p);
  } else if (
    sudoku[3].indexOf("2") != -1 &&
    sudoku[3].indexOf("3") != -1 &&
    sudoku[3].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_1(p);
  } else if (
    sudoku[3].indexOf("1") != -1 &&
    sudoku[3].indexOf("3") != -1 &&
    sudoku[3].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_2(p);
  } else if (
    sudoku[3].indexOf("1") != -1 &&
    sudoku[3].indexOf("2") != -1 &&
    sudoku[3].indexOf("4") != -1
  ) {
    console.log("if"); // !delete
    var p = 3;
    return alter_s_add_3(p);
  } else if (
    sudoku[0][0].indexOf("1") != -1 &&
    sudoku[1][0].indexOf("1") != -1 &&
    sudoku[2][0].indexOf("1") != -1 &&
    sudoku[3][0].indexOf("1") != -1 &&
    sudoku[0][0].indexOf("2") != -1 &&
    sudoku[1][0].indexOf("2") != -1 &&
    sudoku[2][0].indexOf("2") != -1 &&
    sudoku[3][0].indexOf("2") != -1 &&
    sudoku[0][0].indexOf("3") != -1 &&
    sudoku[1][0].indexOf("3") != -1 &&
    sudoku[2][0].indexOf("3") != -1 &&
    sudoku[3][0].indexOf("3") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][0].indexOf("1") != -1 &&
    sudoku[1][0].indexOf("1") != -1 &&
    sudoku[2][0].indexOf("1") != -1 &&
    sudoku[3][0].indexOf("1") != -1 &&
    sudoku[0][0].indexOf("2") != -1 &&
    sudoku[1][0].indexOf("2") != -1 &&
    sudoku[2][0].indexOf("2") != -1 &&
    sudoku[3][0].indexOf("2") != -1 &&
    sudoku[0][0].indexOf("4") != -1 &&
    sudoku[1][0].indexOf("4") != -1 &&
    sudoku[2][0].indexOf("4") != -1 &&
    sudoku[3][0].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][0].indexOf("3") != -1 &&
    sudoku[1][0].indexOf("3") != -1 &&
    sudoku[2][0].indexOf("3") != -1 &&
    sudoku[3][0].indexOf("3") != -1 &&
    sudoku[0][0].indexOf("2") != -1 &&
    sudoku[1][0].indexOf("2") != -1 &&
    sudoku[2][0].indexOf("2") != -1 &&
    sudoku[3][0].indexOf("2") != -1 &&
    sudoku[0][0].indexOf("4") != -1 &&
    sudoku[1][0].indexOf("4") != -1 &&
    sudoku[2][0].indexOf("4") != -1 &&
    sudoku[3][0].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete, 143
  } else if (
    sudoku[0][0].indexOf("3") != -1 &&
    sudoku[1][0].indexOf("3") != -1 &&
    sudoku[2][0].indexOf("3") != -1 &&
    sudoku[3][0].indexOf("3") != -1 &&
    sudoku[0][0].indexOf("1") != -1 &&
    sudoku[1][0].indexOf("1") != -1 &&
    sudoku[2][0].indexOf("1") != -1 &&
    sudoku[3][0].indexOf("1") != -1 &&
    sudoku[0][0].indexOf("4") != -1 &&
    sudoku[1][0].indexOf("4") != -1 &&
    sudoku[2][0].indexOf("4") != -1 &&
    sudoku[3][0].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][1].indexOf("1") != -1 &&
    sudoku[1][1].indexOf("1") != -1 &&
    sudoku[2][1].indexOf("1") != -1 &&
    sudoku[3][1].indexOf("1") != -1 &&
    sudoku[0][1].indexOf("2") != -1 &&
    sudoku[1][1].indexOf("2") != -1 &&
    sudoku[2][1].indexOf("2") != -1 &&
    sudoku[3][1].indexOf("2") != -1 &&
    sudoku[0][1].indexOf("3") != -1 &&
    sudoku[1][1].indexOf("3") != -1 &&
    sudoku[2][1].indexOf("3") != -1 &&
    sudoku[3][1].indexOf("3") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][1].indexOf("1") != -1 &&
    sudoku[1][1].indexOf("1") != -1 &&
    sudoku[2][1].indexOf("1") != -1 &&
    sudoku[3][1].indexOf("1") != -1 &&
    sudoku[0][1].indexOf("2") != -1 &&
    sudoku[1][1].indexOf("2") != -1 &&
    sudoku[2][1].indexOf("2") != -1 &&
    sudoku[3][1].indexOf("2") != -1 &&
    sudoku[0][1].indexOf("4") != -1 &&
    sudoku[1][1].indexOf("4") != -1 &&
    sudoku[2][1].indexOf("4") != -1 &&
    sudoku[3][1].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][1].indexOf("3") != -1 &&
    sudoku[1][1].indexOf("3") != -1 &&
    sudoku[2][1].indexOf("3") != -1 &&
    sudoku[3][1].indexOf("3") != -1 &&
    sudoku[0][1].indexOf("2") != -1 &&
    sudoku[1][1].indexOf("2") != -1 &&
    sudoku[2][1].indexOf("2") != -1 &&
    sudoku[3][1].indexOf("2") != -1 &&
    sudoku[0][1].indexOf("4") != -1 &&
    sudoku[1][1].indexOf("4") != -1 &&
    sudoku[2][1].indexOf("4") != -1 &&
    sudoku[3][1].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][1].indexOf("3") != -1 &&
    sudoku[1][1].indexOf("3") != -1 &&
    sudoku[2][1].indexOf("3") != -1 &&
    sudoku[3][1].indexOf("3") != -1 &&
    sudoku[0][1].indexOf("1") != -1 &&
    sudoku[1][1].indexOf("1") != -1 &&
    sudoku[2][1].indexOf("1") != -1 &&
    sudoku[3][1].indexOf("1") != -1 &&
    sudoku[0][1].indexOf("4") != -1 &&
    sudoku[1][1].indexOf("4") != -1 &&
    sudoku[2][1].indexOf("4") != -1 &&
    sudoku[3][1].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][2].indexOf("1") != -1 &&
    sudoku[1][2].indexOf("1") != -1 &&
    sudoku[2][2].indexOf("1") != -1 &&
    sudoku[3][2].indexOf("1") != -1 &&
    sudoku[0][2].indexOf("2") != -1 &&
    sudoku[1][2].indexOf("2") != -1 &&
    sudoku[2][2].indexOf("2") != -1 &&
    sudoku[3][2].indexOf("2") != -1 &&
    sudoku[0][2].indexOf("3") != -1 &&
    sudoku[1][2].indexOf("3") != -1 &&
    sudoku[2][2].indexOf("3") != -1 &&
    sudoku[3][2].indexOf("3") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][2].indexOf("1") != -1 &&
    sudoku[1][2].indexOf("1") != -1 &&
    sudoku[2][2].indexOf("1") != -1 &&
    sudoku[3][2].indexOf("1") != -1 &&
    sudoku[0][2].indexOf("2") != -1 &&
    sudoku[1][2].indexOf("2") != -1 &&
    sudoku[2][2].indexOf("2") != -1 &&
    sudoku[3][2].indexOf("2") != -1 &&
    sudoku[0][2].indexOf("4") != -1 &&
    sudoku[1][2].indexOf("4") != -1 &&
    sudoku[2][2].indexOf("4") != -1 &&
    sudoku[3][2].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][2].indexOf("3") != -1 &&
    sudoku[1][2].indexOf("3") != -1 &&
    sudoku[2][2].indexOf("3") != -1 &&
    sudoku[3][2].indexOf("3") != -1 &&
    sudoku[0][2].indexOf("2") != -1 &&
    sudoku[1][2].indexOf("2") != -1 &&
    sudoku[2][2].indexOf("2") != -1 &&
    sudoku[3][2].indexOf("2") != -1 &&
    sudoku[0][2].indexOf("4") != -1 &&
    sudoku[1][2].indexOf("4") != -1 &&
    sudoku[2][2].indexOf("4") != -1 &&
    sudoku[3][2].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][2].indexOf("3") != -1 &&
    sudoku[1][2].indexOf("3") != -1 &&
    sudoku[2][2].indexOf("3") != -1 &&
    sudoku[3][2].indexOf("3") != -1 &&
    sudoku[0][2].indexOf("1") != -1 &&
    sudoku[1][2].indexOf("1") != -1 &&
    sudoku[2][2].indexOf("1") != -1 &&
    sudoku[3][2].indexOf("1") != -1 &&
    sudoku[0][2].indexOf("4") != -1 &&
    sudoku[1][2].indexOf("4") != -1 &&
    sudoku[2][2].indexOf("4") != -1 &&
    sudoku[3][2].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete, 2 to 3
  } else if (
    sudoku[0][3].indexOf("1") != -1 &&
    sudoku[1][3].indexOf("1") != -1 &&
    sudoku[2][3].indexOf("1") != -1 &&
    sudoku[3][3].indexOf("1") != -1 &&
    sudoku[0][3].indexOf("2") != -1 &&
    sudoku[1][3].indexOf("2") != -1 &&
    sudoku[2][3].indexOf("2") != -1 &&
    sudoku[3][3].indexOf("2") != -1 &&
    sudoku[0][3].indexOf("3") != -1 &&
    sudoku[1][3].indexOf("3") != -1 &&
    sudoku[2][3].indexOf("3") != -1 &&
    sudoku[3][3].indexOf("3") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][3].indexOf("1") != -1 &&
    sudoku[1][3].indexOf("1") != -1 &&
    sudoku[2][3].indexOf("1") != -1 &&
    sudoku[3][3].indexOf("1") != -1 &&
    sudoku[0][3].indexOf("2") != -1 &&
    sudoku[1][3].indexOf("2") != -1 &&
    sudoku[2][3].indexOf("2") != -1 &&
    sudoku[3][3].indexOf("2") != -1 &&
    sudoku[0][3].indexOf("4") != -1 &&
    sudoku[1][3].indexOf("4") != -1 &&
    sudoku[2][3].indexOf("4") != -1 &&
    sudoku[3][3].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][3].indexOf("3") != -1 &&
    sudoku[1][3].indexOf("3") != -1 &&
    sudoku[2][3].indexOf("3") != -1 &&
    sudoku[3][3].indexOf("3") != -1 &&
    sudoku[0][3].indexOf("2") != -1 &&
    sudoku[1][3].indexOf("2") != -1 &&
    sudoku[2][3].indexOf("2") != -1 &&
    sudoku[3][3].indexOf("2") != -1 &&
    sudoku[0][3].indexOf("4") != -1 &&
    sudoku[1][3].indexOf("4") != -1 &&
    sudoku[2][3].indexOf("4") != -1 &&
    sudoku[3][3].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  } else if (
    sudoku[0][3].indexOf("3") != -1 &&
    sudoku[1][3].indexOf("3") != -1 &&
    sudoku[2][3].indexOf("3") != -1 &&
    sudoku[3][3].indexOf("3") != -1 &&
    sudoku[0][3].indexOf("1") != -1 &&
    sudoku[1][3].indexOf("1") != -1 &&
    sudoku[2][3].indexOf("1") != -1 &&
    sudoku[3][3].indexOf("1") != -1 &&
    sudoku[0][3].indexOf("4") != -1 &&
    sudoku[1][3].indexOf("4") != -1 &&
    sudoku[2][3].indexOf("4") != -1 &&
    sudoku[3][3].indexOf("4") != -1
  ) {
    console.log("if row"); // !delete
  }
}
function replace_N_or_Y_with_X_col_4_alter_solve() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[3][i] == "N" || sudoku[3][i] == "Y") {
      sudoku[3][i] = "X";
    }
  }
  console.log("alter-replace n nd y"); // !delete
  console.log(sudoku);
  return three_numbers_in_row_or_column();
  //   return do_we_use_same_n(); used for later
}
function replace_N_or_Y_with_X_col_3_alter_solve() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[2][i] == "N" || sudoku[2][i] == "Y") {
      sudoku[2][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_4_alter_solve();
}
function replace_N_or_Y_with_X_col_2_alter_solve() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[1][i] == "N" || sudoku[1][i] == "Y") {
      sudoku[1][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_3_alter_solve();
}

function replace_N_or_Y_with_X_col_1_alter_solve() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[0][i] == "N" || sudoku[0][i] == "Y") {
      sudoku[0][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_2_alter_solve();
}
// above is N
function replace_N_or_Y_with_X_col_4() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[3][i] == "N" || sudoku[3][i] == "Y") {
      sudoku[3][i] = "X";
    }
  }
  return do_we_use_same_n();
}
function replace_N_or_Y_with_X_col_3() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[2][i] == "N" || sudoku[2][i] == "Y") {
      sudoku[2][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_4();
}
function replace_N_or_Y_with_X_col_2() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[1][i] == "N" || sudoku[1][i] == "Y") {
      sudoku[1][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_3();
}

function replace_N_or_Y_with_X_col_1() {
  for (var i = 0; i < 4; i++) {
    if (sudoku[0][i] == "N" || sudoku[0][i] == "Y") {
      sudoku[0][i] = "X";
    }
  }
  return replace_N_or_Y_with_X_col_2();
}

function replace_Y_with_n() {
  console.log("replace_Y_with_n"); //!delete
  const countYs = (row) =>
    row.reduce((acc, curr) => acc + (curr === "Y" ? 1 : 0), 0);
  // number of Ys in each row
  var countsY = sudoku.map(countYs);
  console.log(countsY); //!delete
  var cols = ["column 1", "column 2", "column 3", "column 4"];
  // zips files
  cols_counter_Y = cols.map(function (e, i) {
    return [e, countsY[i]];
  });
  console.log(cols_counter_Y); //!delete
  if (cols_counter_Y[0][1] == 1) {
    var placement = sudoku[0].indexOf("Y");
    sudoku[0][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[1][1] == 1) {
    var placement = sudoku[1].indexOf("Y");
    sudoku[1][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[2][1] == 1) {
    var placement = sudoku[2].indexOf("Y");
    sudoku[2][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[3][1] == 1) {
    var placement = sudoku[3].indexOf("Y");
    sudoku[3][placement] = n;
    return replace_N_or_Y_with_X_col_1();
  } else if (cols_counter_Y[0][1] > 1) {
    console.log("more than 1 Y");
    return replace_N_or_Y_with_X_col_1_alter_solve();
  } else if (cols_counter_Y[1][1] > 1) {
    console.log("more than 1 Y");
    return replace_N_or_Y_with_X_col_1_alter_solve();
  } else if (cols_counter_Y[2][1] > 1) {
    console.log("more than 1 Y");
    return replace_N_or_Y_with_X_col_1_alter_solve();
  } else if (cols_counter_Y[3][1] > 1) {
    console.log("more than 1 Y");
    return replace_N_or_Y_with_X_col_1_alter_solve();
  }
}

function can_you_put_n_in_pos3_3() {
  console.log(sudoku);
  if (
    sudoku[3][3].indexOf("1") != -1 ||
    sudoku[3][3].indexOf("2") != -1 ||
    sudoku[3][3].indexOf("3") != -1 ||
    sudoku[3][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return replace_Y_with_n();
    // return can_you_put_n_in_pos3_3();
  } else if (
    sudoku[3].indexOf(n) == -1 &&
    sudoku[0][3].indexOf(n) == -1 &&
    sudoku[1][3].indexOf(n) == -1 &&
    sudoku[2][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[3][3] = "Y";
    return replace_Y_with_n();
    // return can_you_put_n_in_pos3_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[3][3] = "N";
    return replace_Y_with_n();
    // return can_you_put_n_in_pos3_3();
  }
}
function can_you_put_n_in_pos3_2() {
  console.log(sudoku);
  if (
    sudoku[3][2].indexOf("1") != -1 ||
    sudoku[3][2].indexOf("2") != -1 ||
    sudoku[3][2].indexOf("3") != -1 ||
    sudoku[3][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_3();
  } else if (
    sudoku[3].indexOf(n) == -1 &&
    sudoku[0][2].indexOf(n) == -1 &&
    sudoku[1][2].indexOf(n) == -1 &&
    sudoku[2][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[3][2] = "Y";
    return can_you_put_n_in_pos3_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[3][2] = "N";
    return can_you_put_n_in_pos3_3();
  }
}
function can_you_put_n_in_pos3_1() {
  console.log(sudoku);
  if (
    sudoku[3][1].indexOf("1") != -1 ||
    sudoku[3][1].indexOf("2") != -1 ||
    sudoku[3][1].indexOf("3") != -1 ||
    sudoku[3][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_2();
  } else if (
    sudoku[3].indexOf(n) == -1 &&
    sudoku[0][1].indexOf(n) == -1 &&
    sudoku[1][1].indexOf(n) == -1 &&
    sudoku[2][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[3][1] = "Y";
    return can_you_put_n_in_pos3_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[3][1] = "N";
    return can_you_put_n_in_pos3_2();
  }
}
function can_you_put_n_in_pos3_0() {
  console.log(sudoku);
  if (
    sudoku[3][0].indexOf("1") != -1 ||
    sudoku[3][0].indexOf("2") != -1 ||
    sudoku[3][0].indexOf("3") != -1 ||
    sudoku[3][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_1();
  } else if (
    sudoku[3].indexOf(n) == -1 &&
    sudoku[0][0].indexOf(n) == -1 &&
    sudoku[1][0].indexOf(n) == -1 &&
    sudoku[2][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[3][0] = "Y";
    return can_you_put_n_in_pos3_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[3][0] = "N";
    return can_you_put_n_in_pos3_1();
  }
}
function can_you_put_n_in_pos2_3() {
  console.log(sudoku);
  if (
    sudoku[2][3].indexOf("1") != -1 ||
    sudoku[2][3].indexOf("2") != -1 ||
    sudoku[2][3].indexOf("3") != -1 ||
    sudoku[2][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos3_0();
  } else if (
    sudoku[2].indexOf(n) == -1 &&
    sudoku[3][3].indexOf(n) == -1 &&
    sudoku[0][3].indexOf(n) == -1 &&
    sudoku[1][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[2][3] = "Y";
    return can_you_put_n_in_pos3_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[2][3] = "N";
    return can_you_put_n_in_pos3_0();
  }
}
function can_you_put_n_in_pos2_2() {
  console.log(sudoku);
  if (
    sudoku[2][2].indexOf("1") != -1 ||
    sudoku[2][2].indexOf("2") != -1 ||
    sudoku[2][2].indexOf("3") != -1 ||
    sudoku[2][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_3();
  } else if (
    sudoku[2].indexOf(n) == -1 &&
    sudoku[3][2].indexOf(n) == -1 &&
    sudoku[0][2].indexOf(n) == -1 &&
    sudoku[1][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[2][2] = "Y";
    return can_you_put_n_in_pos2_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[2][2] = "N";
    return can_you_put_n_in_pos2_3();
  }
}
function can_you_put_n_in_pos2_1() {
  console.log(sudoku);
  if (
    sudoku[2][1].indexOf("1") != -1 ||
    sudoku[2][1].indexOf("2") != -1 ||
    sudoku[2][1].indexOf("3") != -1 ||
    sudoku[2][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_2();
  } else if (
    sudoku[2].indexOf(n) == -1 &&
    sudoku[3][1].indexOf(n) == -1 &&
    sudoku[0][1].indexOf(n) == -1 &&
    sudoku[1][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[2][1] = "Y";
    return can_you_put_n_in_pos2_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[2][1] = "N";
    return can_you_put_n_in_pos2_2();
  }
}
function can_you_put_n_in_pos2_0() {
  console.log(sudoku);
  if (
    sudoku[2][0].indexOf("1") != -1 ||
    sudoku[2][0].indexOf("2") != -1 ||
    sudoku[2][0].indexOf("3") != -1 ||
    sudoku[2][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_1();
  } else if (
    sudoku[2].indexOf(n) == -1 &&
    sudoku[3][0].indexOf(n) == -1 &&
    sudoku[0][0].indexOf(n) == -1 &&
    sudoku[1][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[2][0] = "Y";
    return can_you_put_n_in_pos2_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[2][0] = "N";
    return can_you_put_n_in_pos2_1();
  }
}
function can_you_put_n_in_pos1_3() {
  console.log(sudoku);
  if (
    sudoku[1][3].indexOf("1") != -1 ||
    sudoku[1][3].indexOf("2") != -1 ||
    sudoku[1][3].indexOf("3") != -1 ||
    sudoku[1][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos2_0();
  } else if (
    sudoku[1].indexOf(n) == -1 &&
    sudoku[2][3].indexOf(n) == -1 &&
    sudoku[3][3].indexOf(n) == -1 &&
    sudoku[0][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[1][3] = "Y";
    return can_you_put_n_in_pos2_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[1][3] = "N";
    return can_you_put_n_in_pos2_0();
  }
}
function can_you_put_n_in_pos1_2() {
  console.log(sudoku);
  if (
    sudoku[1][2].indexOf("1") != -1 ||
    sudoku[1][2].indexOf("2") != -1 ||
    sudoku[1][2].indexOf("3") != -1 ||
    sudoku[1][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_3();
  } else if (
    sudoku[1].indexOf(n) == -1 &&
    sudoku[2][2].indexOf(n) == -1 &&
    sudoku[3][2].indexOf(n) == -1 &&
    sudoku[0][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[1][2] = "Y";
    return can_you_put_n_in_pos1_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[1][2] = "N";
    return can_you_put_n_in_pos1_3();
  }
}
function can_you_put_n_in_pos1_1() {
  console.log(sudoku);
  if (
    sudoku[1][1].indexOf("1") != -1 ||
    sudoku[1][1].indexOf("2") != -1 ||
    sudoku[1][1].indexOf("3") != -1 ||
    sudoku[1][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_2();
  } else if (
    sudoku[1].indexOf(n) == -1 &&
    sudoku[2][1].indexOf(n) == -1 &&
    sudoku[3][1].indexOf(n) == -1 &&
    sudoku[0][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[1][1] = "Y";
    return can_you_put_n_in_pos1_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[1][1] = "N";
    return can_you_put_n_in_pos1_2();
  }
}
function can_you_put_n_in_pos1_0() {
  console.log(sudoku);
  if (
    sudoku[1][0].indexOf("1") != -1 ||
    sudoku[1][0].indexOf("2") != -1 ||
    sudoku[1][0].indexOf("3") != -1 ||
    sudoku[1][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_1();
  } else if (
    sudoku[1].indexOf(n) == -1 &&
    sudoku[2][0].indexOf(n) == -1 &&
    sudoku[3][0].indexOf(n) == -1 &&
    sudoku[0][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[1][0] = "Y";
    return can_you_put_n_in_pos1_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[1][0] = "N";
    return can_you_put_n_in_pos1_1();
  }
}

function can_you_put_n_in_pos0_3() {
  console.log(sudoku);
  if (
    sudoku[0][3].indexOf("1") != -1 ||
    sudoku[0][3].indexOf("2") != -1 ||
    sudoku[0][3].indexOf("3") != -1 ||
    sudoku[0][3].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos1_0();
  } else if (
    sudoku[0].indexOf(n) == -1 &&
    sudoku[1][3].indexOf(n) == -1 &&
    sudoku[2][3].indexOf(n) == -1 &&
    sudoku[3][3].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[0][3] = "Y";
    return can_you_put_n_in_pos1_0();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[0][3] = "N";
    return can_you_put_n_in_pos1_0();
  }
}
function can_you_put_n_in_pos0_2() {
  console.log(sudoku); //! delete
  if (
    sudoku[0][2].indexOf("1") != -1 ||
    sudoku[0][2].indexOf("2") != -1 ||
    sudoku[0][2].indexOf("3") != -1 ||
    sudoku[0][2].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos0_3();
  } else if (
    sudoku[0].indexOf(n) == -1 &&
    sudoku[1][2].indexOf(n) == -1 &&
    sudoku[2][2].indexOf(n) == -1 &&
    sudoku[3][2].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[0][2] = "Y";
    return can_you_put_n_in_pos0_3();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[0][2] = "N";
    return can_you_put_n_in_pos0_3();
  }
}

function can_you_put_n_in_pos0_1() {
  console.log(sudoku); //! delete
  if (
    sudoku[0][1].indexOf("1") != -1 ||
    sudoku[0][1].indexOf("2") != -1 ||
    sudoku[0][1].indexOf("3") != -1 ||
    sudoku[0][1].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos0_2();
  } else if (
    sudoku[0].indexOf(n) == -1 &&
    sudoku[1][1].indexOf(n) == -1 &&
    sudoku[2][1].indexOf(n) == -1 &&
    sudoku[3][1].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[0][1] = "Y";
    return can_you_put_n_in_pos0_2();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[0][1] = "N";
    return can_you_put_n_in_pos0_2();
  }
}

function can_you_put_n_in_pos0_0() {
  console.log(sudoku);
  if (
    sudoku[0][0].indexOf("1") != -1 ||
    sudoku[0][0].indexOf("2") != -1 ||
    sudoku[0][0].indexOf("3") != -1 ||
    sudoku[0][0].indexOf("4") != -1
  ) {
    console.log("1,2,3,4"); //! delete
    return can_you_put_n_in_pos0_1();
  } else if (
    sudoku[0].indexOf(n) == -1 &&
    sudoku[1][0].indexOf(n) == -1 &&
    sudoku[2][0].indexOf(n) == -1 &&
    sudoku[3][0].indexOf(n) == -1
  ) {
    console.log("yes it can put a one here "); //! delete
    sudoku[0][0] = "Y";
    return can_you_put_n_in_pos0_1();
  } else {
    console.log("no!!! it has a 1"); //! delete
    sudoku[0][0] = "N";
    return can_you_put_n_in_pos0_1();
  }
}

// * highlighted bookmark
function which_number_to_insert() {
  if (sortable[0][0] == "one") {
    n = "1";
    console.log("n=1"); //!delete
    return can_you_put_n_in_pos0_0(n);
  } else if (sortable[0][0] == "two") {
    n = "2";
    console.log("n=2"); //!delete
    return can_you_put_n_in_pos0_0(n);
  } else if (sortable[0][0] == "three") {
    n = "3";
    console.log("n=3"); //!delete
    return can_you_put_n_in_pos0_0(n);
  } else if (sortable[0][0] == "four") {
    n = "4";
    console.log("n=4"); //!delete
    return can_you_put_n_in_pos0_0(n);
  }
}

var one = "1";
var two = "2";
var three = "3";
var four = "4";

counter_1(sudoku, one, count_one);
counter_2(sudoku, two, count_two);
counter_3(sudoku, three, count_three);
counter_4(sudoku, four, count_four);
is_it_solved();
