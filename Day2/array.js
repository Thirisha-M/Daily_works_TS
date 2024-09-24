var skills;
skills = ['problem Solving', 'Software Design', 'programming']; //array declaration
console.log(skills);
skills.push('2050');
console.log(skills); //push method
var skills1 = [];
skills[0] = 'abi';
skills[1] = 'thirs';
skills[2] = 'maggi';
skills.push('vidhya');
console.log(skills); //add one or more string
var skills2 = ['divya', 21, false];
console.log(typeof (skills2[1])); //string,number,boolean[skill[0,1,2]]
var series = [1, 2, 3, "divya", "true"];
console.log(series.length); //length
var series1 = [1, 2, 3];
var doubleIt = series1.map(function (a) { return a * 2; }); //map
console.log(doubleIt);
var scores;
scores = ['programming', 2, 'divya', true];
console.log(scores); //mixed type
var numbers = [1, 2, 3, 4, 5];
var filteredNumbers = numbers.filter(function (num) { return num > 3; });
console.log("Filtered numbers greater than 3:", filteredNumbers);
