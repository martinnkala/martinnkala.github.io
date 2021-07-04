/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo = {
    name: 'Martin Nkala'
};

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg'
};

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg',
    favFood: [
        'Sadza',
        'Madora(Catapillars',
        'Chicken',
        'Beef',
        'Ice Cream'
    ]
};

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg',
    favFood: [
        'Sadza',
        'Madora(Catapillars',
        'Chicken',
        'Beef',
        'Ice Cream'
    ],
    hobbies: [
        'Reading',
        'Shooting',
        'Playing BasketBall'
    ]
};

// Step 6: Add another property named placesLived with a value of an empty array
myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg',
    favFood: [
        'Sadza',
        'Madora(Catapillars',
        'Chicken',
        'Beef',
        'Ice Cream'
    ],
    hobbies: [
        'Reading',
        'Shooting',
        'Playing BasketBall'
    ],
    places: []
};

myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg.jpg',
    favFood: [
        'Sadza',
        'Madora(Catapillars',
        'Chicken',
        'Beef',
        'Ice Cream'
    ],
    hobbies: [
        'Reading',
        'Shooting',
        'Playing BasketBall'
    ],
    places: [{
            place: 'Rexburg, ID',
            length: '10 Months'
        },
        {
            place: 'Bindura, Zimbabwe',
            length: '29 years'
        },

    ]
};

myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg',
    favFood: [
        'Sadza',
        'Madora(Catapillars',
        'Chicken',
        'Beef',
        'Ice Cream'
    ],
    hobbies: [
        'Reading',
        'Shooting',
        'Playing BasketBall'
    ],
    places: [{
            place: 'Rexburg, ID',
            length: '10 Months'
        },
        {
            place: 'Bindura, Zimbabwe',
            length: '29 years'
        },

    ]
};

myInfo = {
    name: 'Martin Nkala',
    photo: 'images/20201011_143703.jpg',
    favFood: [
        'Sadza',
        'Madora(Catapillars',
        'Chicken',
        'Beef',
        'Ice Cream'
    ],
    hobbies: [
        'Reading',
        'Shooting',
        'Playing BasketBall'
    ],
    places: [{
            place: 'Rexburg, ID',
            length: '10 Months'
        },
        {
            place: 'Bindura, Zimbabwe',
            length: '29 years'
        },

    ]
};


// My result set

document.querySelector('#name').textContent = myInfo.name;
document.querySelector('#photo').setAttribute('src', myInfo.photo);
document.querySelector('#photo').setAttribute('alt', myInfo.name);

let favorFood1 = document.createElement('li');
favoriteFood1.textContent = myInfo.favFood[0];

let favoriteFood2 = document.createElement('li');
favorFood2.textContent = myInfo.favFood[1];

let favoriteFood3 = document.createElement('li');
favorFood3.textContent = myInfo.favFood[2];

let favorFood4 = document.createElement('li');
favorFood4.textContent = myInfo.favFood[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector('#favorFood').appendChild(favorFood1);
document.querySelector('#favorFood').appendChild(favorFood2);
document.querySelector('#favorFood').appendChild(favorFood3);
document.querySelector('#favorFood').appendChild(favorFood4);

let hobby1 = document.createElement('li');
hobby1.textContent = myInfo.hobbies[0];

let hobby2 = document.createElement('li');
hobby2.textContent = myInfo.hobbies[1];

let hobby3 = document.createElement('li');
hobby3.textContent = myInfo.hobbies[2];

document.querySelector('#hobbies').appendChild(hobby1);
document.querySelector('#hobbies').appendChild(hobby2);
document.querySelector('#hobbies').appendChild(hobby3);
let placesLivedPlace1 = document.createElement('dt');
placesLivedPlace1.textContent = myInfo.places[0].place;

let placesLivedLength1 = document.createElement('dd');
placesLivedLength1.textContent = myInfo.places[0].length;

let placesLivedPlace2 = document.createElement('dt');
placesLivedPlace2.textContent = myInfo.places[1].place;

let placesLivedLength2 = document.createElement('dd');
placesLivedLength2.textContent = myInfo.places[1].length;

let placesLivedPlace3 = document.createElement('dt');
placesLivedPlace3.textContent = myInfo.places[2].place;

let placesLivedLength3 = document.createElement('dd');
placesLivedLength3.textContent = myInfo.places[2].length;

document.querySelector('#places').appendChild(placesLivedPlace1);
document.querySelector('#places').appendChild(placesLivedLength1);
document.querySelector('#places').appendChild(placesLivedPlace2);
document.querySelector('#places').appendChild(placesLivedLength2);
document.querySelector('#places').appendChild(placesLivedPlace3);
document.querySelector('#places').appendChild(placesLivedLength3);