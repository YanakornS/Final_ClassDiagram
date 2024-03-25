class University{
    constructor(name,location,Department,Student,Professor){
        this.name = name;
        this.location = location;
        this.Department =[];
        this.Student = [];
        this.Professor = [];
    }
    
    addDepartment(department){
        this.Department.push(department);

    }
    addStudent(student){
        this.Student.push(student);

    }
    addProfessor(professor){
        
        this.Professor.push(professor);

    }
    removeDepartment(department){
        const U = this.Department.indexOf(department);
        if(U !== -1){
            this.Department.splice(U, 1);
        }

    }
    removeStudent(student){
        const U = this.Student.indexOf(student);
        if(U !== -1){
            this.Student.splice(U, 1);
        }

    }
    removeProfessor(professor){
        const U = this.Professor.indexOf(professor);
        if(U !== -1){
            this.Professor.splice(U, 1);
        }

    }
    getDepartment(){
        return this.Department;

    }
    getStudent(){
        return this.Student;

    }
    getProfessor(){
        return this.Professor;

    }
    toString(){
        return`University : ${this.name},Location :  ${this.location}`;
    }


}

class Department  {

    constructor(name){
        this.name = name;
    }

    addCourse(course){

        this.Course.push(course);
        
    }
    removeCourse(course){
        const D = this.Course.indexOf(course);
        if(D !== -1){
            this.Course.splice(D, 1);
        }

    }
    addStudent(student){

        this.Student.push(student);

    }
    removeStudent(student){

        const D = this.Student.indexOf(student);
        if(D !== -1){
            this.Student.splice(D, 1);
        }

    }
    addProfessor(professor){
        
        this.professor.push(professor);

    }
    removeProfessor(professor){
        const D = this.Professor.indexOf(professor);
        if(D !== -1){
            this.professor.splice(D, 1);
        }

    }
    getCourse(){
        return this.Course;
    }
    getStudent(){
        
        return this.Student;
        
    }
    toString(){

        return `Department : ${this.name} `;

    }

}

class Course {
    
    constructor(code,title){

        this.code = code;
        this.title = title;
    }
    addStudent(student){
        this.student.push(student);
    }
    removeStudent(student){
        const C = this.Student.indexOf(student);
        if(C !== -1){
            this.student.splice(C, 1);
        }

    }
    setProfessor(professor){

        this.professor = professor;

    }
    getStudent(){
        
        return this.Student;

    }
    toString(){

        return `Course : ${this.code}, ${this.title}`;

    }
}

class Person{
    constructor(name,address,email){
        this.name = name;
        this.address = address;
        this.email = email;
        this.year = this.year
       

    }

    toString(){

        return`Person : ${this.name}, ${this.address}, ${this.email}`;

            
     }

}

class Student extends Person {
    constructor(name,studentId,year,title){
        super(name,year,title);
        this.studentId = studentId;
        this.year = year;
        this.title = title;
    }
    registerCourse(Course){
        this.course.push(Course)
    }

    dropCourse(Course){

        const S = this.course.indexOf(Course);
        if(S !== -1){
            this.course.splice(S, 1);
        }

    }
    getCourse(){
        return this.course;
    }


    toString(){
        return `Student : ${this.name}, StudentID : ${this.studentId}, Year : ${this.year},Courses : ${this.title}`;

    }
}


 class Professor extends Person {

    constructor(name,staffId,title){
        super(name,staffId,title);
        this.staffId = staffId;
        this.title = title;
 
    }
  teachCourse(course){
    this.course.push(course)
    
  }
  stopTeachingCourse(course){

    const S = this.course.indexOf(course);
    if(S !== -1){
        this.course.splice(S, 1);
    }
  }

  getCourses(){
    return this.Course;

  }
  toString(){

    return `Professor : ${this.name},Staff : ${this.staffId},Course : ${this.title}`;

  }
 }


  
 const main = () => {

    //create----
    const university = new University('Nakhon Pathom Rajabhat University','85 Malaiman Road , Nakhon Pthom, Thailand');


    const department = new Department('Computer Science,Software Engineering');

    const course = new Course('CS101','Introduction to Programming');

    const Alice = new Student('Alice','S001','1','Introduction to Programming')
    const Bob = new Student('Bob','S002','2','Introduction to Database Design')




    const professor1 = new Professor('Dr.Worachet Uttha','ID001','Introduction to Programming');
    

   



    university.addDepartment(department);
    
    






    //โซน console.log-----
    console.log(university.toString());
    console.log(department.toString());
    console.log(course.toString());
    console.log(professor1.toString());
    console.log(Alice.toString());
    console.log(Bob.toString());
    




 }
 main();










//String returns เป็นตัวมัน
//Boolean returns เป็น ถูกผิด true false
//void returns  เป็นฟังชั้นของตัวมันเอง