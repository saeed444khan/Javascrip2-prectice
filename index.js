/* Arrays ko likhne k do tarike hote hai*/
/*Arrays ka pehla tariqa ARRAYS LITERAL kehlata hy*/
/* var food = ["Pizza ";"Burger";"Snacks"];*/
/*arrays ka dosra tariqa NEW ARRAYS kelata hy*/
/*var foods = new Arrays("Pizza";"Burger";"Snzcks");*/
/*var foods = ["biryani","burger","pizza"];
console.log(foods[1]);
console.log(foods);
console.log(foods[4]);*/
/*ARRAYS me value add karne k liye ye tariqa istemal hota hy*/
/*foods [3] = "zinger";
console.log(foods);*/
/*Arrays me arrays ki lenght maloom karne ka tariqa*/
/*console.log(foods.length);*/
/*Arrays me without index ke value add karne k liye PUSH ka fuction use karte hain jo siquence se value dd karta hy */
/*foods.push("chicken kabab","tikka kabab","samosa");
console.log(foods);*/

/*NESTED LOOP loop ke ander loop ko kehte hain*/
/*for (var a = 0; a <3; a++){
    for (var b = 0; b <2; b++){
        console.log("A ="+a+ " B = " +b)
    }
}*/
/* STECK me POP k fuctionse akhir se value remove kar k return karta hy or os value ko kisi or veriable me store karsakte hain */

/*var food = ["birayni","burger","pizza"];
console.log(food);
console.log("length = "+food.length);
food.pop();
console.log(food);
var a1 = food.pop();
console.log(a1);*/
 
/*QUEUE ka fuction index ke start se value remove karke return karta hy or os value ko kisi veriabel me save kar sakte hain*/
/*food.push("kabab","chicken tikka");
console.log(food);
console.log("length =" +food.length);
var a =  food.shift();
console.log(food);
console.log(a);*/

/*UNSHIFT k"a function array me  0 index per value ko add karne k kaam ata hy*/
/*var a = ["saeed","usama","akram"];*/
/*console.log(a);
a.unshift("salman");
console.log(a);
console.log(a[0]);*/

/*ARRAYS WITH LOOP ka fuction ek hi baar me array ki length maloom karsakte hain*/
/*for(var i = 0; i<a.length; i++){
    console.log(a[i])
};*/
/*ARRAYS ME MULTIPLY bhi kar sakte hain*/
/*var arr = [4,78,54,5,6];
for (var i = 0; i< arr.length; i++){
    arr[i] =arr[i] *2;
};
for (var j = 0; j < arr.length; j++){
    console.log(arr[j]);
};*/
/* ARRAYS ME ADD bhi kar sakte hain*/
/*var arr = [];
for (var i = 0; i< 5; i++){
    arr[i] =i *4;
};
for (var j = 0; j < arr.length; j++){
    console.log(arr[j]);
};*/

/*ARRAYS ME VALUE SEARCH */
/*var arr = [34, 55, 50, 66, 7,];
var input = parseInt(prompt("Enter your number "));
console.log("user input", input);
var found = false;
for(var i = 0;i < arr.length; i++){
    if (arr[i] === input){
        console.log("Found "+input+ " on index =" +i);
        found = true;
        break;
    }
}
if (found == false){
    console.log("not found")
}*/

/* SPLICE kar fuction arrays me between or and me kahi bi value add kar sakte hain 0r remove bhi kar sakte hain or remove value ko dosri arr me save bhi  kar sakte hain*/
//food = ["Pizza","Burger","Snack","Biryani","kabab"];
//console.log(food);
//var arr =food.splice(2,1,"Sandwicth");
//console.log(food);
//console.log(arr);
/* SLICE ka fuction arrays me 12 index ki arrays me 1 to 6 ki value collect kar sakte hain*/

//var arr1 = food.slice(0,3);
//console.log(arr1);
/* 0 se 2 taq ki value collect karli  */

/*ESCAPE CHSRSCTER */
// singel' k liye
//var a = "hello \'world";
// "" doubbel k liye 
//var b = "hello \"world";
// \n new line k liye
//var c = "hello \nworld";
// \\ back slach k lye
//var d = "hello \\world";
// \t horizental tab  liye
//var e = "hello \tworld";
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
//console.log(e);

/* UPPER CASE OR LOWER CASE */
//var food = "Burger";
/*var input = "burger";
console.log(food.toUpperCase());
console.log(food.toLowerCase());
if(food.toLowerCase() === input.toLowerCase())[
    console.log("Match")
]
else[
    console.log("not match")
]*/
/* STRING ME SLICE ka fuction*/
//var a = food.slice(0,2);
//console.log(a);

/* INDEXOF  ka fuction arrays ki start se value ko search karta hy*/
/*var a = "to be or not be";
console.log("lenght =" +a.length);
var b = a.indexOf("be",10);
console.log(b);*/
/* LASTINDEXOF ka fuction arrays me last se value ko search karta hy*/
/*var a = "to be or not to be";
console.log("lenght =" +a.length);
var b = a.lastIndexOf("be");
console.log(b);*/

/*CHARART ka fuction arrays me value ko find karta hy*/
/*var a = "to be or not be";
console.log("lenght =" +a.length);
var b = a.charAt(7);
console.log(b);*/

/*REPLACE ka fuction arrays me value ko find karta hy*/
//var a = "To Be or not to be";
//console.log("lenght =" +a.length);
//var b = a.replace("be", "BE");
/*or ager g means Globaly ka icon use karein to arrays jaha bhi be ho ga osko BE me replace kar de ga*/
/* i ka icon array me jaha bhi big alphabet on ko change kar de ga*/
//var str = a.replace(/be/gi, "beee");
//console.log(str);

/*SPLIT ka fuction array ko break karke value return karta hy*/
/*var str = "To Be Or Not to Be";*/
/* is tarah alag alg sing se break kar sakte hain like this | " " " ,"   */
/*var  b = str.split(" ");
console.log(b);*/

/* MathROUND ka fuction value 5.5 upper ho gi to upper round kare ga ager 5.0 ho gi to lower round kare ga*/
/* MATH.CEIL ka fuction bhi ise tarah kam karta bas upper value ko read kar ke roud kar ta hy*/
/* MATH.FLOOR  ka function lower side ko round kare ga*/ 
/*var b = Math.round(5.5);
console.log(b);*/

/* MATH.RANDOM ka function */
//var num = Math.random();
//console.log("Num =" +  num);
//var num2 = (num * 7) + 1;
//console.log("Num2 =" +  num2);
//var dice = Math.floor(num2)
//console.log(dice);
/*TOFIXED ka function randonm number me start ke bad 3 dalian to ap ko pehle digit k bad 3 diegit return kar de ga*/
//var num2 = num.toFixed(3);
//console.log("num2 = " + num2);
/*DATE KA FUNCTION*/
var date = new Date();
console.log(date);
//console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
date.setFullYear("2023");
console.log(date);
var d1 = ("dec 3 2022 12:22:50");
var d2 = ("jan 1 2023 11:10:30");
var d3 = d2.getTime() - d1.getTime();
console.log(d3);


































