"use strict";

function game(){
    //Two truths and one lie.
    if (confirm("I like coding classes.")){
        alert("Incorrect.");
    } else {
        //add a semi colon
        alert("This is the answer you were looking for.")
    }

    if (confirm("I am 18 years old.")){
        alert("That's Right!!");
    } else {
        alert("NUH UH!!");
    }

    if (confirm("This is my ninth year at the same school.")){
        alert("WRONG!!");
    } else {
        //add a semi colon
        alert("You did it!!")
    }
    // i like your qnas

    alert(("You're the PICKLE."))

    //kinda mid rick and morty episode
}

function GetToKnowYou(){
    let username = prompt("What is your name?");
    alert("Hello " + username + " welcome to my site.");
    alert( username + " your tax forms are being processed and I'm taking your returns for myself.");
    alert("In the future " + username + " you should probably make sure whether or not a website is safe before giving personal information.");
    alert("Anyways how about a little more.")
    //semi colon
    if (prompt("Do you still feel human even after the past four years?") === "yes".toLowerCase || "y".toLowerCase){
        console.log("question one response is yes");
}
    //stylization thing: indent your curly bracket to match the first line its connected to 
    if (prompt("Do you own any pets?") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question two response is yes");
}

    if (prompt("Are you old enough to drink?") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question three response is yes");
}

    if (prompt("When you are faced with a difficult question that decides the fate of thousands of people, do you cripple under the pressure?") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question four response is yes");
}

    if (prompt("When your alone and the noise of society dies down to a whisper do you feel happier?") === "yes".toLowerCase || "y".toLowerCase){
    console.log("question five response is yes");
}

}

function FiveQuestions(){
    if (prompt("Why have you come here?"))
    // you need your curly brackets for your if statement

}