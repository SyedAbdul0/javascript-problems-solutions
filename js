//Add numbers to an existing array through user input and stop adding after 0 is added to the array by the user.

let num =[23,34,45,56];

let a ;
do{
   a=prompt("enter your number");
   a= Number.parseInt(a);
   num.push(a);
   console.log(num);
}while(a!=0)
