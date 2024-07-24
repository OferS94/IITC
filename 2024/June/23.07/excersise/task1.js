let firstName = "Ofer";
let lastName = "Sela";
let age = 29; 
let isStudent = true;
let isAdult = age >= 18 ; 
console.log("isadult " , isAdult);
let isJohn = firstName === "john";
console.log("isJOhn" , isJohn);

// basic functions
function greet(firstName , lastName){

    let fullName = firstName + " " + lastName
    let FullName = fullName.toUpperCase()
    console.log( "Hello " + FullName + "! Welcome to the IITC Botcamp")
}
greet("Ofer" , "Sela");


// if and else
function checkAge(age){
    if(age < 13 ) console.log("you are a child");  
    else if(13 <= age && age <= 17)console.log("you are a teenager");
    else if(18 < age && age <= 65 )console.log("you are an adult");
    else console.log("you are a senior");
}
checkAge(14)

// //switch statement
// function getDayMessage(dayOfWeek){
//     switch(dayOfWeek){
//     case "Monday"
//     console.log("Start of the week!");
//      break;
//      case "Tuesday";
//      console.log("5 days to go");
//      break;
//      case "Wedensday";
//      console.log("4 days to go");
//      break;
//      case "Thursday";
//      console.log("3 days to go");
//      break;
//      case "Friday"
//      console.log("only 2 left");
//      break;
//      case "Saturday"
//      console.log("tonight it starts");
//      break;
//      case "Sunday"
//      console.log("Weekend!!!");
//      break;
//      default;
//     }
     
//  }
//  getDayMessage("Friday");

// complex condiotions
function checkEligibility(age , isStudent){
    if(age < 18 && isStudent === true) console.log("you are a minor student");
    else if(age < 18 && isStudent === false)console.log("you are a minor non student");
    else if(age >= 18 && isStudent === true && age <= 24 )console.log("you are a young adult student");
    else if(ge >= 18 && isStudent === false && age <= 24 )console.log("you are a young adult non student");
    else if(age > 25 && isStudent === true)console.log("you are an adult student");
    // else(age > 25 && isStudent === false)console.log("you are an adult non student");

}
checkEligibility(23 , true);

// String comparison and manipulation
// function formatName(name){
//     for ( let i = o ; i< name.length ; i ++){
//         if (name.Charat(i) === " "){
//                 name.replace(" ", "");
//         }     
//     }
//     console.log(name);
// }
// formatName( "     ofer    ");

function formatName(name){
    console.log(name);
    console.log(name.trim());
}
formatName( "     ofer       ");