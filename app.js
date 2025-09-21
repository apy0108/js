/* console.log("aniket yerawar ")
 a=10;
 n=20;
 c=a*n*(a-n);
// console.log(c+a-n,"ap");

// //m="aniket yearwar ";
// //console.log(m)
// // templete literals
// let pen = 10 ;
// let pencile=20;
// //  console.log(" The total price is:",pen+pencile ,"Rs");
// let T= "the total price is :"+ (pen+pencile) +"Rs";// this is not a templete literals normal form of string
//  console.log(" The total price is:",pen+pencile ,"Rs");
//  console.log(T);
//  // templete literals
//     let T1=`the total price is : ${pen+pencile} Rs`;// this is a templete literals
//     let T2=`the total price is : ${pen+pencile+18} Rs`;// use `` for templete literals
//     console.log(T1);
//     console.log(T2);
// opretoers
//== equlaity operator
//!=// not equal to
// type  ko consider nahi karta ==
// eg :
// let num=10;
// let str="10";
// num==str;it gives true  irrespective of type
// num===str; it gives false because it consider type
// if statement 
/*console.log(" trafic light  ")
let colur="pink ";
if (colur=="red"){
    console.log("stop");
}
 else if (colur=="yellow"){
    console.log("drive slow ");
}
 else if (colur=="green"){
    console.log("go");
}
else{
    console.log("invalid");
}*/
// prctice question 
/*let size="s";
if (size=="s"){
    console.log(" the prise is 50 Rs");
}
 else if (size=="m"){
    console.log(" the prise is 100 Rs");
}
else if (size=="l"){
    console.log(" the prise is 200 Rs");
}
else {
    console.log(" the prise is 250 Rs");
}*/
// logical operator
// && and operator

/*let str="aniket";
if (str[0]==="a" && str.length>3){
    console.log("good string ");
    console.log(" the string is :",str);
}
else{
    console.log("bad string ")
}*/

// || or operator
/*let num=17;
if ((num%3===0)&&((num+1===15)||(num-1===11))){
    console. log("safe number ");

}
else{
    console.log ("unsafe number ");
}*/
// switch case
/*let  color ="yellow ";
switch (color) {
    case "red ":
        console.log("stop");
        break;
    
    case "yellow ":
            console.log("slow down");
            break;
    case "green ":
                console.log("go");
                break;
    default:
                    console.log("the light is broken ");
                 break;
}*/
/*let  day =7;
switch (day) {
    case 1:
    console.log("monday ");
    break;
    case 2:
    console.log("tuesday ");
    break;
    case 3:
    console.log("wednesday ");
    break;
    case 4: 
    console.log("thursday ");
    break;
    case 5:
    console.log("friday ");
    break;
    case 6:
    console.log("saturday ");
    break;
    case 7:
    console.log("sunday ");
    break;
    default:
        console.log("wrong  day ");
}*/
// alert and prompt
// let firstname = prompt(" enter  your first name ");
// let lastname = prompt(" enter your last name ");
// let msg = "welcome "+firstname+" "+lastname+"!";
// alert(msg);
 // trim method removes the white spaces from both ends of the string
//  let str = "  aniket  ";
//  console.log (str.trim());
 
//  // toUpperCase()method converts the string to uppercase
//  console.log(str.toUpperCase());
//  // toLowerCase() method converts the string to lowercase
//  let str1 = "ANIKET";
//  console.log(str1.toLowerCase());
//  // charAt() method returns the character at the specified index
//  let str2 = "aniket";
//  console.log(str2.charAt(3)); // returns 'k'
//  //indexOf() method returns the index of the first occurrence of the specified value
//  console.log(str2.indexOf('k')); // returns 3
//  //method chaining
//  let str = "   aniket   ";
//  console.log(str.trim().toUpperCase().length);// here  trim, uppercase  are method  but  the length is property 
//  //slice() method extracts a part of a string and returns a new string
// let str = "aniket";
// console.log(str.slice(1,4));
//  console.log(str.slice(1));
//  console.log(str.slice(-3));
//  //substring() method extracts the characters from a string between two specified indices
//let str = "aniket";
// console.log(str.substring(1,4));
//  //replace() method replaces a specified value with another value in a string
//  console.log(str.replace("aniket","aniket yerawar"));
//  //repate method returns a new string with a specified number of copies of the string it was called on
//  console.log(str.repeat(3));
 // array 
/*let mon=["january","july","march","august"]
console.log(mon[0]);
console.log(mon[3]);//use indices 
console.log(mon.length);//use length property
console.log(mon.unshift("april"));// returns new length of the array after  adding new  element  at the  start 
//unshift() method adds one or more elements to the beginning of an array and returns the new
console.log(mon)
console.log(mon.shift());//removes  first element 

console.log(mon);
console.log(mon.unshift("june"));// add at first place& returns new length of the array
console.log(mon);
console.log(mon.push("april"));//add at last place & returns new length of the array
console.log(mon);
console.log(mon.pop());//remove last element & returns the removed element  eg here april
console.log(mon);

mon[1]="september";
mon[2]=" october";// so  that the array is the mutable 
console.log(mon);
mon[10]="december";// palce at 10th index and create blank  indexes
console.log(mon);
console.log (mon.indexOf("june"));//gives index number  of first occurance
mon[7]="june";
console.log(mon);
console.log(mon.lastIndexOf("june"));//gives index of lastt occurance 
console.log(mon.length);
console.log(mon.lastIndexOf("feb"));// returns -1
// include method 
console.log(mon.includes("june"));// include search  elemet and return boolen value (true here )
console.log(mon.includes("january"));// return false
//slice 
console.log(mon);
console.log(mon.slice(1,4));
console.log(mon.slice());// give copy of the array 
console.log(mon.slice(4,6));
console.log(mon.slice(-2));
let mon1=["january","february","march"];
//concatination and reverse 
let months= mon1.concat(mon);//addition 
console.log(months);
console.log(months.reverse());*/
//splice
// splice method is  used to add or remove elements from an array
// used for remove  and freplace the  element  make changes in orignal array 
// let cars =["bmw","merc", "ferrari","audi"];
// cars.splice(2,1);// first is the index of the number  and second is the number that want to delete  
// console.log(cars);
// cars.splice(1,1,"toyota","ford");// it will remove 1 element from index 1 i.e merc and add toyota and ford at index 1
// console.log(cars);
// cars.splice(3,2,"ferrari","rolls rolyce" );// it will remove 2 element from index 3 i.e audi  and add ferrari and rolls rolyce at index 3
// console.log(cars);
// cars.splice(2 ,0 ,"maclern","bhugatii","mustang");// it will add 3 element at index 2 and remove 0 element
// console.log(cars);
// cars.splice(1,0 ,"gwagon");
// console.log(cars);
// cars.splice(1);// remove all the element after index 1
// console.log(cars);

// syntax
//obj.splice(start, delete count,item add, item no );
 
// sort 
/*let cars =["bmw","merc", "ferrari","audi"];

console.log(cars.sort());
// in  java  script  only  work for string  not  for number 
// if we want to sort number then we have to convert it into string
let num=[5,9,45,78,2,1,0,56];
console.log(num.sort());// it will not sort the number correctly
// to sort the number correctly we have to use the compare function
num.sort((a,b)=>a-b);// it will sort the number in ascending order
console.log(num);
num.sort((a,b)=>b-a);// it will sort the number in descending order 
console.log(num);*/

// LOOPS//
//FOR LOOP 
/*for(let i =5; i<10; i++){
    console.log(i);
};*/
/*for( let i=1; i<15;i=i+2 ) {
    console.log(i);
    console.log(" odd numbers ")
}/*
/*for( let i=15; i>=1 ;i=i-2 ) {
    console.log(i);
    console.log(" odd numbers ")
}*/
// for( let i=2; i<20 ; i=i+2 ) {
//     console.log(i);
//     console.log("  even numbers ")
// }
// console.log("even number  backwards")
// for( let i=20; i>=2 ;i=i-2 ) {
//     console.log(i);
//     console.log("  even numbers ",i)

// } 
/*let n=prompt(" enter the number ");

console.log("table of:",n)
n=parseInt(n);// convert string to number
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}*/
// while loop// in the while  loop we have to give the condition in side  the loop and instilize  variable outside the loop 
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

//  while loop
  
// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }
// let i=2;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }
//loops  with array 
// let fruits=["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple","garpes");
// console.log(fruits);
// for(i=0;  i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }
// for( let i=fruits.length-1; i>=0; i--){
//     console.log(i,fruits[i]);
// }
//nested loops  with nested array 
/*let heros=[["ironman","spidermen","thor"],["superman","wonderwomwen","flash"]];
for(i=0 ; i<heros.length; i++){
    console.log(i,heros)
    for( let j=0; j<heros[i].length; j++){
        console.log(j+1,heros[i][j]);
    }
}*/
//for of loop
//  let fruits=["mango","apple","banana","litchi","orange"];
//  for (let fruit of fruits){
//     console.log(fruit);
//  } 
//  for( char of " aniket yerawar"){
//     console.log(char);
//  }
// //nestes for of loop
//  let heros=[["ironman","spidermen","thor"],["superman","wonderwomen","flash"]];
//  for (let hero of heros){
//     console.log(hero);
//     for (let h of hero){
//         console.log(h);
//     }

//  }
//object litterls 
// const post= {
//     usernmae: "@aniketyerwar_0108",
//     content:" this is my # first post ",
//     likes:252,
//     comments: 125,
//     share: 255,
//     tags:["@aniketyyerawart","apy@0108"],
//     reapost:45,
//     postid: 1234567890,
// };
// console.log (post.likes );

// console.log(post["tags"]);
// console.log(post["tags[0]"]);// semi collon is imp and it is used to access the object property
//  console.log(post.tags[0]);// this is the correct way to access the object property
// console.log(post["likes"]);
// ADD AND UPDATE  VALUE 
// student={name :"aniket",age:20,marks:90,city: "pune" };
// console.log(student.age=21 );
// console.log(student.gender="male" );//add and update value 
// console .log( delete student.gender);
//math object 
// functions 
// avg of 3 numbers
// function avg(a,b,c){
//     //console.log((a+b+c)/3);
//     cal=(a+b+c)/3;
//     console.log(cal);
// }
// avg(10,20,30);
// avg(88,5,52);
 
// function table (n){
//     for (i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// table(551);

// function add(n){
//     let sum=0;
//     for( i=1; i<=n; i++){
//        sum+=i;
// };
// return sum;
// };
//  console.log(add(10);

//let str =["aniket ","prashant " ,"yrerawar",":)"]; 
// function constring(str){
//     let result "";
//     for (i=0; i<str.length; i++){
//         result+= str[i];
//     };
//     return result;
// }
// console.log(constring(str));
//*/ scope of variable
// let x = 10;// globle scope
// function socpe () {  
//     let y = 20;// functional scope variable
//     console.log(x);
// }
// //console.log(y);//n gives the  error  function variable can not used outside of the function
// console.log (socpe());
// console.log(x);//globel; variable can be used outside of the function

    // block scope
      //( block scope is varible which is  defined in  the block of code  and can be used only in that block of code)
//      let a=63;
//      {
//         let b= 90;// block scope variable

//      }
//    console.log (a);
//    //console.log (b);//error b is not defined in this scope

// lexical scope
// (lexical scope is the scope of the variable which is defined inside the function and can be used inside the function)
// function outer(){
//     let x=10;
//     function inner(){
//         let y=20;
//         console.log(x);// x is defined in the outer function so it can be used in the inner function
//     } //  in the inner function we can use the outer function variable but we can not use the inner function variable in the outer function
//     inner();
//     //console.log(y);//error y is not defined in this scope
// }
// outer();
// console.log (x);//error x is not defined in this scope
// //console.log(y);//error y is not defined in this scope

// let greet="hello";// globle scope
// function changeGreet(){
//      let greet="hi";// funtional scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);// lexical scope
//     }
//     innerGreet();
// }

// console.log(greet);
// //innerGreet(); can only be called inside the changeGreet function
// changeGreet();
// console.log(greet);


 //function expression
  // function expression is a function that is assigned to a variable
//    let x= function (){
//       console.log("hello");  
//      };
        // let sum = function (a,b){
        //     return a+b;
        // };
        // console.log(sum(10,20));
       // console.log(x);
 //Higher order function
 // higher order function is a function that takes another function as an argument or returns a function as a result

// function multipleGreet(func,count){
//     for (i=0; i<count; i++){
//         func();
//     }
// }
//  function greet(){
//      console.log("hello");
//  }
//     multipleGreet(greet,5);
//multipleGreet(function(){console.log("Namaste");},45653445345);
// //callback function
//    function  oddevenTest(request){
//     if (request=="odd"){
//         let odd= function(n){
//             console.log(!(n%2==0));
//         } 
//         return odd;
//     }
//     else if (request=="even"){ 
//         let even= function(n){
//             console.log(n%2==0);    
//         }
//         return even;
//     }
//     else{
//         return function(n){
//             console.log("invalid request");
//         }
//     }
//    };
//    console.log(oddevenTest("odd"));
//    function  oddevenTest(request){
//     if (request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         } 
//         
//     }
//     else if (request=="even"){ 
//         return function(n){
//             console.log(n%2==0);    
//         }
//         
//     }
//     else{
//         return function(n){
//             console.log("invalid request");
//         }
//     }
//    };
//    console.log(oddevenTest("odd"));
// Methods 
// methods are the function that are defined inside the object
// methods are used to perform some operation on the object
//  const calculator={
//      add:function(a,b){
//          return a+b;
//      },
//      sub:function(a,b){
//          return a-b;
//      },
//      mul:function(a,b){
//          return a*b;
//      },
//      div:function(a,b){
//          return a/b;
//      }
//  };
//     console.log(calculator.add(10,20));
//     console.log(calculator.sub(10,20));
//     console.log(calculator.mul(10,20));
//     console.log(calculator.div(10,20));
//another way to define the method
// const calculator={
//     add(a,b){    // add(a,b) is the short form of add:function(a,b)
//         return a+b;              // return a+b is the short form of return a+b;
//     },

//     sub(a,b){
//         return a-b;

//     },
//     mul(a,b){
//         return a*b;
//     },
//     div(a,b){
//         return a/b;
//     }
// };
// console.log(calculator.add(10,20));
// this keyword
// this keyword is used to refer the current object
// const student={
//     name:"aniket",
//     age:20,
//     eng:80,
//     maths:90,
//     phy:85,
//     get avg(){
//         return (this.eng+this.maths+this.phy)/3;
//     }
// };
// console.log(student.avg);
// ARROW FUNCTION
// arrow function is the short form of the function 
// THIS KEYWORD IN ARROW FUNCTION   USED IN HIGH ORTDER FUNCTION
// const cube=(n)=>{
//     return  n * n * n ;
// };
// console.log(cube(10));

// const add=(a,b,c)=>{
//     return a+b+c;

// };
// console.log(add(10,20,30));
// const greet=()=>{    // if there is no parameter then we have to use empty paranthesis   ()
//     console.log("hello");        // if there is only one parameter then we have to use single paranthesis ()
// };
// greet();   
//       // if there is more than one parameter then we have to use multiple paranthesis ()      
//implicit return // if there is only one statement in the function then we can use implicit return
// in the implicit return we have to remove the return keyword and the curly braces use only paranthesis ();
// const mul=(a,b)=>(a*b);
// console.log(mul(10,20));
// const greet=()=>console.log("hello");
// const pow=(n,m)=>(n**m);
// console.log (pow(2,3));
// callback function are those function which are passed as an argument to another funtion 

// set time out function
   // set time out function is used to execute the function after the specified time
//     const sum=(a,b)=>a+b;
// setTimeout( console.log(sum(4,5)) ,3000);// it will execute the function after 3 sec 
// // and first parameter is the function and second parameter is the time in milisecond


//  console.log ("hello");
//  setTimeout(()=>console.log("ANIKET YERAWAR"), 2000);
// console.log("i am ");// its output will be hello i am aniket yerawar
// set interval function
// set interval function is used to execute the function after the specified time repeatedly
  // it behaves like the loop  it runs  untill we stop it 
   // the diffrence between the set time out and set interval is that set time out runs only once but set interval runs repeatedly
   //setInterval(()=>(console.log("hello")),1000); // it will print hello after every 1 sec  it  will run untill we stop it
    //to stop the set interval we have to use the clear interval function
    //  let id=setInterval(()=>(console.log("hello")),1000); // it will print hello after every 1 sec  it  will run untill we stop it
    // clearInterval(id);// it will stop the set interval
    // this keyword in arrow function// this keyword in arrow function is used to refer the current object

// arrow function  see  who is calling it(arrow function)  and then it will refer to that object
// in the arraow function lexical scope is used to refer the object but in function  th e globel scope is used to refer the object
// const student={
//     name:"aniket",
//     marks :90,
//     prop:this ,// globle scope
//     getname: function (){
//         console.log(this);// for function  scope globle scope is used  
//         return this.name;// shows  the output aniket 
//     },
//     getmarks :()=>{
//         console.log(this);//shows  undefined
//         return this.marks ;  // for the  arrow  function scope is parents scope 
  
//     },
// };
// //*/ array  methods */
//// forEach method
// forEach method is used to iterate over the array and perform some operation on each element of the array
// let  arr =[1,2,3,4,5];
// let print= function(el){
//     console.log(el);
//  }

// //  arr.forEach(print);
// let  arr =[1,2,3,4,5];
// arr.forEach(function(el){
//     console.log (el)
// });
 
// let arr= [
//     {
//        name : "aniket ",
//        marks : 96

//     },
//     {
//        name : "ritesh  ",
//        marks : 94 

//     },
//     {
//        name : "yash ",
//        marks : 94 

//     }, 
//     {
//       name : "pavan  ",
//       marks : 94 

//     },
//     {
//        name : "divyansh",
//        marks : 94 

//     }
// ]  
// arr.forEach((student )=>{
//     console.log(student.name, student.marks );
// })


 
   

//*/ map method

// forEach method does not return anything it is used to perform some operation on each element of the array
///map///
// map method is used to create a new array by applying the function on each element of the array
// map method does not change the original array and  it returns a new array
// let num =  [2,4,6,8,10,12];
// let square = num.map((el)=>{
//     return el*el;
// });
// console.log(square); 
 
// let gpa= arr.map((student)=>{
//     return student.marks/10;
// })
// console.log(gpa);
// filter method
// filter method is used to create a new array by filtering the elements of the array based on the condition
// it does not change the original array and it returns a new array
// let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let even = num.filter ((el) =>{
//     return el2!=0;

// });
// console.log(even);
// filter method is used to filter the elements of the array based on the condition 
 
//every method
// every method is used to check if all the elements of the array satisfy the condition
// it returns true if all the elements satisfy the condition otherwise it returns false
// let num =[1,2,3,4,5,6,7,8,9,10];
//  let Even = num.every((el)=>{
//     return el%2==0;
//     }
// );
// console.log(Even); // it will return false because not all the elements are even
// let num1=[2,4,6,8,10,12,14,16,18,20];
//  let isEven = num1.every((el)=>{
//     return el%2==0;
//     }
// );
// console.log(isEven); // it will return true because all the elements are even
// for all  conditon  it have  to return true for all the elements of the array otherwise it will return false
// some method
// some method is used to check if at least one element of the array satisfies the condition
// let num =[1,2,3,4,5,6,7,8,9,10];
// let isEven = num.some((el)=>{
//     return el%2==0;
//     }

// );
// console.log(isEven); // it will return true because at least one element is even

////reduce method
// reduce method is used to reduce the array to a single value by applying the function on each element of the array
// reduce to  in singlr elemnt 

//  let num =[5,5,85,74,5,9,4,6,4,58,]
//  let sum = num.reduce((sum , el ) =>{
//     return  sum + el ;

//  }
// );

// let max= num.reduce ((max,el) =>{
//     if (el>max){
//         return el;
//     }
//     else {
//         return max
//     }
//     });
// console.log(max);
// console.log(sum); // it will return the sum of all the elements of the array
