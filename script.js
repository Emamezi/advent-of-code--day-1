// rules
// Santa starts at floor 0
// ( --- goes one floor up
//)---goes one floor down

//Using node to read the file
const fs = require("fs");

function getFloor() {
  fs.readFile("./data.txt", (err, data) => {
    console.time("runtime");
    const dataString = data.toString();
    const dataArray = dataString.split("");
    const floor = dataArray.reduce((acc, currrentValue) => {
      if (currrentValue === "(") {
        return (acc += 1);
      } else if (currrentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.log("floor:", floor);
    console.timeEnd("runtime");
  });
}

getFloor();

function findBasementCharacter() {
  fs.readFile("./data.txt", (err, data) => {
    const dataString = data.toString();
    let floor = 0;
    const dataArray = dataString.split("");
    const position = dataArray.findIndex((currrentValue) => {
      if (currrentValue === "(") {
        floor += 1;
      } else if (currrentValue === ")") {
        floor -= 1;
      }
      return floor < 0;
    });
    console.log("position", position + 1);
    // console.log(counter);
  });
}

findBasementCharacter();
