//syntax

let click: 'click';
click='click';

//example

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown'|'mouseover';
mouseEvent = 'click'; 
mouseEvent = 'dblclick'; 
mouseEvent = 'mouseup'; 
mouseEvent = 'mousedown';
mouseEvent = 'mouseover'; 

//example2

type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown'|'mouseover';
let mouseEvent1: MyMouseEvent;
mouseEvent1 = 'click';
mouseEvent1 = 'dblclick'; 
mouseEvent1 = 'mouseup'; 
mouseEvent1 = 'mousedown'; 
mouseEvent1= 'mouseover'; 

let anotherEvent: MyMouseEvent;