//syntax
var click;
click = 'click';
//example1
var mouseEvent;
mouseEvent = 'click';
mouseEvent = 'dblclick';
mouseEvent = 'mouseup';
mouseEvent = 'mousedown';
mouseEvent = 'mouseover';
function moveCharacter(direction) {
    switch (direction) {
        case "up":
            console.log("Character moves up!");
            break;
        case "down":
            console.log("Character moves down!");
            break;
        case "left":
            console.log("Character moves left!");
            break;
        case "right":
            console.log("Character moves right!");
            break;
        default:
            // This should never happen due to type checking
            var check = direction;
            throw new Error("Invalid direction: ".concat(direction));
    }
}
moveCharacter("up");
moveCharacter("down");
// Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.
