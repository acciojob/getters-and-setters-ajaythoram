class Person {
	constructor(name,age){
    this.name = name;
		this.age = age;
	}
	get getName(){
   return this.name;
	}
	set setAge(age){
  return this.age = age;
}
get getAge(){
return this.age;
}
	
}

class Student extends Person {
	study(){
 console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
 console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
