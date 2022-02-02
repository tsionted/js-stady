console.log("hello world");
let fname='jon';
console.log(fname);
let lasname="tedla";
let age=20;

console.log(lasname);
console.log('my age is '+ age);
let isapprove=false;
console.log(isapprove);
let interstrate =0.3;
interstrate=1;
console.log(interstrate);

let person ={
    pname:"tsion",
    page:20,
    addres:'1148 marshefeld rd las vegas nv 89135'
}
console.log(person);
console.log(person.pname);
person.pname="tedla";
console.log(person.pname);
let selectedcolors=['red','blue','yellow'];
console.log(selectedcolors);
console.log(selectedcolors[1])
selectedcolors[3]=4;
console.log(selectedcolors);
console.log(selectedcolors.length);
function gret(fname,lname){
    console.log('hello'+fname+' '+lname);

}
gret('Tedla','Tsion');

function square(numer){
    return numer* numer;

}
console.log(square(2));

function add(nam1,nam2){
    return nam1+nam2;
}
let sum=add(3,7);
console.log(sum);
 sum=add(9,8);
console.log(sum);

(function(){
    console.log('hello anomousnynous');
})();

let show=function(){
    console.log('annmus2');
}
show();
//arrw function
function sum1(a,b){
    return a+b;

}
function ispositive(numer){
    return numer>=0;

}
function randomnum(){
    return Math.random;
}


