var num1 = 10;
var num2 = 20;
var num3 = 30;

// Nested if/else with multiple conditions
if (num1 < num2 && num2 < num3) {
    console.log("num1 is less than num2, and num2 is less than num3");
} else {
    if (num1 > num2 || num2 === num3) {
        console.log("num1 is greater than num2, or num2 is equal to num3");
    } else {
        console.log("Neither condition is true");
    }
}

// Nested if/else with multiple conditions
if (num1 === 10) {
    if (num2 === 20) {
        console.log("num1 is 10 and num2 is 20");
    } else {
        console.log("num1 is 10 but num2 is not 20");
    }
} else {
    console.log("num1 is not 10");
}
