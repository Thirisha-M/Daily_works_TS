//Tuple Syntax

let skills:[string,number];
skills=['programmer',26]
console.log(skills);//tuple declaration

let bgColor,headerColor:[number,number,number,number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log(bgColor,headerColor);

//Example Programs

let person: [string, number, boolean];
person = ["Alice", 25, true];
console.log("Name:", person[0]);        
console.log("Age:", person[1]);         
console.log("Is student:", person[2]);  

// Updating a tuple value
person[1] = 26;  
console.log("Updated Age:", person[1]); 

// Tuple with optional and rest elements
let employee: [number, string?, ...string[]];
employee = [101, "John", "Developer", "Team Lead"];
console.log("Employee ID:", employee[0]);     
console.log("Employee Name:", employee[1]);   
console.log("Employee Roles:", employee.slice(2)); 
