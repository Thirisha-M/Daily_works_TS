// the getter is used to get the value and setter is used to set the value in the class

class student{
    name:string="diya"
    id:number=1234
    age:number=18

get get_name(){
    return this.name
}
set set_name(final_name:string){
    this.name=final_name
}
}

const Student=new student
Student.set_name="sasu"
console.log(Student.get_name);


// Create a book class with a private property_title.Implememt a getter and setter for the title.

class Book{
    _title:string="aws"

get title(){
    return this._title
}
set title(value:string){
    this._title=value;
}
}
const book=new Book
book.title="devops"
console.log(book.title);
