//Enums-group of constants

//number

enum Direction{
    East,
    West,
    South,
    North,

}
console.log(Direction.South);

enum statuscode{
    Success=200,
    Unauthorized=401,
    ServerError=500
}
console.log(statuscode.Success)

//string

enum Direction1{
    East='east',
    West='west',
    South='south',
    North='north',

}
console.log(Direction1.South)