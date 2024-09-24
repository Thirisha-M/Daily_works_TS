//Enums-group of constants
//number
var Direction;
(function (Direction) {
    Direction[Direction["East"] = 0] = "East";
    Direction[Direction["West"] = 1] = "West";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["North"] = 3] = "North";
})(Direction || (Direction = {}));
console.log(Direction.South);
var statuscode;
(function (statuscode) {
    statuscode[statuscode["Success"] = 200] = "Success";
    statuscode[statuscode["Unauthorized"] = 401] = "Unauthorized";
    statuscode[statuscode["ServerError"] = 500] = "ServerError";
})(statuscode || (statuscode = {}));
console.log(statuscode.Success);
//string
var Direction1;
(function (Direction1) {
    Direction1["East"] = "east";
    Direction1["West"] = "west";
    Direction1["South"] = "south";
    Direction1["North"] = "north";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.South);
