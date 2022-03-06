    // NEW
 {
        console.log("if"); // !delete
      } else if (
        sudoku[0].indexOf("1") != -1 &&
        sudoku[0].indexOf("3") != -1 &&
        sudoku[0].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[0].indexOf("2") != -1 &&
        sudoku[0].indexOf("3") != -1 &&
        sudoku[0].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[1].indexOf("1") != -1 &&
        sudoku[1].indexOf("2") != -1 &&
        sudoku[1].indexOf("3") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[1].indexOf("2") != -1 &&
        sudoku[1].indexOf("3") != -1 &&
        sudoku[1].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[1].indexOf("1") != -1 &&
        sudoku[1].indexOf("3") != -1 &&
        sudoku[1].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[1].indexOf("2") != -1 &&
        sudoku[1].indexOf("3") != -1 &&
        sudoku[1].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[2].indexOf("1") != -1 &&
        sudoku[2].indexOf("2") != -1 &&
        sudoku[2].indexOf("3") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[2].indexOf("2") != -1 &&
        sudoku[2].indexOf("3") != -1 &&
        sudoku[2].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[2].indexOf("1") != -1 &&
        sudoku[2].indexOf("3") != -1 &&
        sudoku[2].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[2].indexOf("2") != -1 &&
        sudoku[2].indexOf("3") != -1 &&
        sudoku[2].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[3].indexOf("1") != -1 &&
        sudoku[3].indexOf("2") != -1 &&
        sudoku[3].indexOf("3") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[3].indexOf("2") != -1 &&
        sudoku[3].indexOf("3") != -1 &&
        sudoku[3].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[3].indexOf("1") != -1 &&
        sudoku[3].indexOf("3") != -1 &&
        sudoku[3].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[3].indexOf("2") != -1 &&
        sudoku[3].indexOf("3") != -1 &&
        sudoku[3].indexOf("4") != -1
      ) {
        console.log("if"); // !delete
      } else if (
        sudoku[0][0].indexOf("1") != -1 &&
        sudoku[0][0].indexOf("1") != -1 &&
        sudoku[0][0].indexOf("1") != -1 &&
        sudoku[0][0].indexOf("2") != -1 &&
        sudoku[0][0].indexOf("2") != -1 &&
        sudoku[0][0].indexOf("2") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("3") != -1
      ) {
        console.log("if row"); // !delete
      } else if (
        sudoku[0][0].indexOf("2") != -1 &&
        sudoku[0][0].indexOf("2") != -1 &&
        sudoku[0][0].indexOf("2") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("4") != -1 &&
        sudoku[0][0].indexOf("4") != -1 &&
        sudoku[0][0].indexOf("4") != -1
      ) {
        console.log("if row"); // !delete
      } else if (
        sudoku[0][0].indexOf("1") != -1 &&
        sudoku[0][0].indexOf("1") != -1 &&
        sudoku[0][0].indexOf("1") != -1 &&
        sudoku[0][0].indexOf("4") != -1 &&
        sudoku[0][0].indexOf("4") != -1 &&
        sudoku[0][0].indexOf("4") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("3") != -1 &&
        sudoku[0][0].indexOf("3") != -1
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
    