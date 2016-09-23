// Array
var names = ["Torben","Paul","Sigurd"];
console.log(names);

// Objekt
var person = {firstname: "Jens", lastname: "Jensen"};
console.log(person);

// Array af objekter
var students = [
    {id: 1, name: "Anders", age: 21},
    {id: 2, name: "Hans", age: 22}
];
console.log(students);

// String, Number, Boolean
var a = "Hej";
console.log(a);
var b = 42;
console.log(b);
var c = false;
console.log(c);

// Array af diverse typer
var elements = [
    {foo: "foo", bar: "bar"},
    "Yrsa",
    12,
    false
];

for(var i = 0; i < elements.length; i++) {
    console.log(typeof elements[i]);
}

// Opgave 3
var Student = function(studentId, studentName) {
    this.studentId = studentId;
    this.studentName = studentName;
};

var arrayOfStudents = [
    new Student(1, "Rip"),
    new Student(2, "Rap"),
    new Student(3, "Rup")
];

var toString = function(Student) {
    console.log("Studenten " + Student.studentName + " har id'et " + Student.studentId + ".");
};

for(var i = 0; i < arrayOfStudents.length; i++) {
    toString(arrayOfStudents[i]);
}

// Opgave 4
