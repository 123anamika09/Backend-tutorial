// const stu1 = {
//     name : "Anamika",
//     marks : 12,
//     age : 25
// };
// const stu2 ={

//     name :"Ankit",
//     marks : 35,
//     age : 24

// };

// ------------------------------factory function :- creates object ------------------------
// function personMaker(name , age) {
//     const person = {
//         name: name,
//         age:age,
//         talk(){
//             console.log(`hi ,my name is  ${this.name}`);
//         },
//     };
//     return person;
// } 
// let p1 = personMaker("Anamika", 24);
// let p2 = personMaker("Ankit",17);

// --------------disadvantage of factory fnc -------------------
// copy createof every object fnc

// to solve this :--      use new operator method



                       // --------------------------------------new operator method-------------------------------------


//constructor --- with capital name 
// function Person(name , age) {
//         this.name = name ;
//         this.age = age ;
        
//     // } let p1 = personMaker("Anamika", 24);
//     // let p2 = personMaker("Ankit",17);


// //    cls k bhr fnc define
//      Person.prototype.talk = function(){
//         console.log(`hi! my name is ${this.name}`);
//      }
// }
// let p1 = new Person("Anamika", 24);
// let p2 = new Person("Ankit", 17);


// --------------------------------------------------------classes --------------------------------------------
// better than new operator


class Person{
    constructor(name,age){
        this.name = this.name;
        this.age = age;
    }
    talk(){
        console.log(`hi! my name is ${this.name}`)
    }
}
let p1 = new Person("Anamika", 24);