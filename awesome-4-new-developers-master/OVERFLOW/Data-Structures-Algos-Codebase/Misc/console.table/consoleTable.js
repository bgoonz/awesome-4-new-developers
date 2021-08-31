let consoleTableArgObj = {};
class Table {
  constructor(col1, col2) {
    this.col1 = col1;
    this.col2 = col2;
  }
}

//-------------------------------------------------------------------
console.table(consoleTableArgObj);
/*
bryan@LAPTOP-F699FFV1:/mnt/c/Users/15512/Google Drive/a-A-September/misc/Practice/main/Using-console-table$ node console.table.js 
┌───────────┬──────┬──────┐
│  (index)  │ col1 │ col2 │
├───────────┼──────┼──────┤
│ row1Title │ '1'  │ '2'  │
│ row2Title │ '3'  │ '4'  │
│ row3Title │ '5'  │ '6'  │
│ row4Title │ '7'  │ '8'  │
└───────────┴──────┴──────┘
*/
exports.consoleTable = consoleTableArgObj;
