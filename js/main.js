// let x = 5;
// console.log(x); // 5
// console.log(x++); // 
// console.log(x); // 


// Type Convertions
// let myVariable = 50;
// console.log(myVariable);

// myVariable = String(myVariable);
// console.log(myVariable);

// let isMatch = false;
// console.log(isMatch);


// let test = "adssa";
// console.log(Number(test));

// isMatch = String(isMatch);
// console.log(isMatch);

// let age = "20A";
// console.log(age);

// age = Number(age);
// console.log(age);


// console.log(undefined + 1);



// Interaction: alert, prompt, confirm

// let age = prompt("Enter your age");

// if(age > 18){
//     console.log("Yashiniz catir");
// } else {
//     console.log("Yashiniz catmir");
// }

// let input1 = prompt("1ci ededi daxil edin", 500);
// let input2 = prompt("2ci ededi daxil edin");
// let sum = input1 + input2;
// console.log(sum);

// let fullname;

// let isAgree =  confirm("are you agree?");
// if(isAgree){
//     fullname = prompt("please enter your full name");
//     console.log(`Hello ${fullname}`);
// }

// let age = 18;

// if(age < 18){
//     console.log("age < 18");
// } else if(age >=18 && age < 25) {
//     console.log("age >=18 && age < 25");
// } else if (age >=25 && age < 35){
//     console.log("age >=25 && age < 35");
// } else {
//     console.log("age >= 35");
// }


/* Loops: while and for */

// let num = 0;
// while(num < 10){
//     console.log(num);
//     num++;
// }


// for(let num = 0; num < 30; num++){

//     if(num == 18){
//         console.log("test");
//         continue;
//     }
//     console.log(num);
// }


// for(let i = 0; i < 10; i++){
//     // i = 1
//     console.log(`i = ${i}`);

//     for(let j = 0; j < 5; j++){
//         // j = 5
//       console.log(`j = ${j}`);

//     }
// }


// let num1 = prompt("Eded daxil edin");
// let num2 = prompt("Quvvet daxil edin");
// console.log(num1**num2);
// let result = 1;
// for(let i=1; i <= num2; i++){
//     result *= num1;
// }

// alert(`Result = ${result}`);



// let num1 = Number( prompt("Eded 1") );
// let num2 = Number( prompt("Eded 2") );


// let n = 0;
// for(let i = num1; i <= num2; i++){
//     n = n + i;
// }
// console.log(n);

/* Switch Case */

// let group = prompt("Enter your group");

// switch (group) {
//     case "P110":
//     case "P112":
//     case "P113":
//     case "P114":
//         console.log("case P");
//         break;

//     case "V110":
//     case "V111":
//             console.log("case V");
//             break;
//     default:
//         console.log("Not Found");

// }




// console.log("End of script");