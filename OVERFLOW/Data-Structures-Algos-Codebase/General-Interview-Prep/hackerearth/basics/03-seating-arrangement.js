/**
 * Created by Bryan Guner
 * Copyright © 2018 ashish.me
 * bryan.guner@gmail.com
 */

/* Akash and Vishal are quite fond of travelling. They mostly travel by railways. They were travelling in a train one day and they got interested in the seating arrangement of their compartment. The compartment looked something like 

 
So they got interested to know the seat number facing them and the seat type facing them. The seats are denoted as follows : 

Window Seat : WS
Middle Seat : MS
Aisle Seat : AS

You will be given a seat number, find out the seat number facing you and the seat type, i.e. WS, MS or AS.

INPUT
First line of input will consist of a single integer T denoting number of test-cases. Each test-case consists of a single integer N denoting the seat-number.

OUTPUT
For each test case, print the facing seat-number and the seat-type, separated by a single space in a new line.
 */

const stdInput = `2
18
40`;

function main(input) {
  const inputArray = input.split("\n");
  for (let i = 1; i <= Number(inputArray[0]); i++) {
    const seat = Number(inputArray[i]) % 12;
    switch (seat) {
      case 0:
      case 1:
      case 6:
      case 7: {
        console.log("WS");
        break;
      }
      case 2:
      case 5:
      case 8:
      case 11: {
        console.log("MS");
        break;
      }
      case 3:
      case 4:
      case 9:
      case 10: {
        console.log("AS");
        break;
      }
      default:
        console.log("Wrong Input");
    }
  }
}

main(stdInput);
