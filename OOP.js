// class person {
//     name:string;
//     constructor(name:string) {
//         this.name=name;
//     }
//     displayName(){
//         console.log(this.name);
//     }
// }
// let p1 = new person("Okasha")
// let p2 = new person("Aneeq")
// let p3 = new person("Faizan")
// let p4 = new person("Asif")
// let p5 = new person("Hamza")
// p1.displayName();
// p2.displayName();
// p3.displayName();
// p4.displayName();
// p5.displayName();
// // oops ke andar 4 pillars hote h
// 1)  Encapsulation
// 2)  Inheritence
// 3)  Polymorphism
// 4)  Abstraction
// class student {
//     name:string;
//     age: number;
//     rollno: number;
//     constructor(name:string,age:number,rollno:number) {
//         this.name=name;
//         this.age=age;
//         this.rollno=rollno;
//     }
//     displayName(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.rollno);
//     }
// }
// class teacher {
//     name:string;
//     age: number;
//     qualification: string;
//     constructor(name:string,age:number,qualification:string) {
//         this.name=name;
//         this.age=age;
//         this.qualification=qualification;
//     }
//     displayName(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.qualification);
//     }
// }
// let s1=new student("ali",15,123456)
// // simple code in type Inheritence
// class person{
//     name:string;
//     age: number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     displayName(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
// class student extends person {
//     rollno: number;
//     constructor(name:string,age:number,rollno:number) {
//         super(name,age)
//         this.rollno=rollno;
//     }
// }
// class teacher extends person {
//     qualification: string;
//     constructor(name:string,age:number,qualification:string) {
//         super(name,age);
//         this.qualification=qualification;
//     }
//     displayName(){
//         console.log(this.qualification);
//     }
// }
// let s1=new student("Okasha",20,123456);
// let s2=new student("Asif",40,465467);
// let s3=new student("Faizan",15,987356);
// let t1=new teacher("Okasha",20,"10")
// let t2=new teacher("Asif",40,"12")
// let t3=new teacher("Faizan",15,"BSc")
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(t1);
// console.log(t2);
// console.log(t3);
// // Inheritence code in Polymorphism
// class person{
//     name:string;
//     age: number;
//     constructor(name:string,age:number){
//         this.name=name;
//         this.age=age;
//     }
//     displayName(){
//         console.log(`Name = ${this.name} , Age = ${this.age}`);
//     }
// }
// class student extends person {
//     rollno: number;
//     constructor(name:string,age:number,rollno:number) {
//         super(name,age)
//         this.rollno=rollno;
//     }
// }
// class teacher extends person {
//     qualification: string;
//     constructor(name:string,age:number,qualification:string) {
//         super(name,age);
//         this.qualification=qualification;
//     }
//     displayName(){
//         console.log(`Name = ${this.name} , Age = ${this.age} , Qualification = ${this.qualification}`);
//     }
// }
//  let t1=new teacher("ali",7,"6")
//  t1.displayName();
var teacher = /** @class */ (function () {
    function teacher(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    teacher.prototype.displaysalary = function (pin) {
        if (pin === 23400) {
            console.log("Your Transaction Is Bieng Processed");
            console.log(this.salary);
        }
        else {
            console.log("Acess Danied");
        }
    };
    return teacher;
}());
var t1 = new teacher("ali", 500000);
t1.displaysalary(2400);
