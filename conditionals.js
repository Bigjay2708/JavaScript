    
    // logical operators

        console.log('5>1:', 5 >= 1);
        console.log('5===1:', 5 === 1);
        console.log('5!==1:', 5 !== 1);
        console.log('5 < 10 && 5 > 1:', 5 < 10 && 5 > 1);
        console.log('5===5 || 1 ===5:', 5===5 || 1 ===5);
        
   // conditional statements

        let temperature = 25;
     if (temperature >= 30) {
        console.log("It's a hot day!");
    } else if (temperature >= 20 && temperature < 30) {
        console.log("The weather is plesant.");
    }else if (temperature < 20) {
        console.log("It's a bit chilly.");
    }else { console.log("Unknown");}

    const year = 2024;
if (year % 4 === 0 && year % 100 !== 0) {
   console.log("It is a leap year");
} else if (year % 400 === 0) {
   console.log("It is a leap year");
} else {
   console.log("It is not a leap year");
}

// switch statement

let day = "Tuesday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("It's a regular day.");
}

// ternary statement


let age = 40;
let message = (age >= 16) ? "You can drive a car" : "You cannot drive a car";

console.log(message);


// nested conditionals


// function handleLoyaltyBonus(numVisitsThisMonth, currentHour) {
// 	let loyaltyBonus;


// if (numVisitsThisMonth > 10) { 
// 	if (currentHour >= 18) {
//     console.log(currentHour);
//     loyaltyBonus = "Complimentary Cheesecake";
//   } else { 
//     loyaltyBonus = "Complimentary Lemonade"
//   }
// } else  {
// 	loyaltyBonus = "";
// }