//syntax

let click: 'click';
click='click';


//example1

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown'|'mouseover';
mouseEvent = 'click'; 
mouseEvent = 'dblclick'; 
mouseEvent = 'mouseup'; 
mouseEvent = 'mousedown';
mouseEvent = 'mouseover'; 

//example2

type Direction = "up" | "down" | "left" | "right";
function moveCharacter(direction: Direction): void {
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
            const check: never = direction;
            throw new Error(`Invalid direction: ${direction}`);
    }
}
moveCharacter("up");   
moveCharacter("down"); 
moveCharacter("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.

