/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

let d = new Date();
let retrieveDate = d.getDate();
console.log(retrieveDate)

// Step 2: Declare another variable to hold the day of the week
let dayOfTheWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfTheWeek = d.getDay();
console.log(dayOfTheWeek)
    // Step 4: Declare a variable to hold a message that will be displayed
let message;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfTheWeek > 1 && dayOfTheWeek < 6) {
    message = 'Hang in there!'
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message = "Woohoo! It is a weekend!"
}
console.log(message)
    /* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let msg;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfTheWeek) {
    case 0:
        msg = "Sunday";
        break;
    case 1:
        msg = "Monday";
        break;
    case 2:
        msg = "Tuesday";
        break;
    case 3:
        msg = "Wednesday";
        break;
    case 4:
        msg = "Thursday";
        break;
    case 5:
        msg = "Friday";
        break;
    case 6:
        msg = "Saturday"
}
console.log(msg)
    /* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

document.getElementById('message2').innerHTML = msg
    /* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
temples = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples)
// - Creates an HTML <article> element
{
    for (let temple of temples) {
        let article = document.createElement("article");
        // - Creates an HTML <h3> element and add the temple's templeName property to it
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        // - Creates an HTML <h4> element and add the temple's location property to it
        let h4 = document.createElement('h4');
        h4.textContent = temple.location;
        // - Creates an HTML <h4> element and add the temple's dedicated property to it
        let hfour = document.createElement('h4');
        h4.textContent = temple.dedicated;
        // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        let img = document.createElement('img');
        img.src = temple.imageUrl
            // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(hfour);
        article.appendChild(img);
        // - Appends the <article> element to the HTML element with an ID of temples
        document.getElementById('temples').appendChild(article);
    }

}
// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
// Step 7: Finally, call the output function and pass it the list of temples
let URL = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
async function gettemples() {
    let response = await fetch(URL);
    let templeInfo = await response.json();
    temples = templeInfo;
    console.log(templeInfo);
    output(templeInfo)
}

function reset() {
    const mytemples = document.getElementById('temples');
    mytemples.innerHTML = '';
    console.log(mytemples)

}

function sortby() {
    reset();
    let ascendingOrDescending = document.getElementById("sortBy").value;
    if (ascendingOrDescending == "templeNameAscending") {
        output(temples.sort());
    } else {
        output(temples.reverse());
    }

}
let order = document.getElementById('sortBy');
order.addEventListener('change', () => sortby());
gettemples();





// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files