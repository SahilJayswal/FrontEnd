function employee(name, designation, yearOfBirth) {
    this.name = name;
    this.designation = designation;
    this.yearOfBirth = yearOfBirth;
}

employee.prototype.calculateAge = function () {
    console.log("Current age is " + (2021 - this.yearOfBirth));
}
console.log(employee.prototype);

let emp = new employee('Alex', 'Junior Tester', 1995);
console.log(emp);
emp.calculateAge();

let Emp2 = new employee('Dexter', 'Senior Software Developer', 1990);
console.log(Emp2)
Emp2.calculateAge();

let Emp3 = new employee('Annie', 'Junior HR', 1998);
console.log(Emp3)
Emp3.calculateAge();


