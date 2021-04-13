console.log('Here are all the available people:', people);
$(document).ready(readyNow);
let min = 1;
let max = people.length;
let randomPerson = randomNumber(min, max);

function readyNow() {
    //console.log('hi jQ')<-- just testing jQuery 
    alert(`Choose ${people[randomPerson].name}!`); //calling the variable by .name to generate in the alert box
    $('.box').on('click', '#btnAdd', userClicks);
    // loop through people array (which contains our people objects)
    // append to our div with class selector named container 
    for (item of people) {
        $('.box').append(` 
        <span data-person="${item.name}">
            <button id="btnAdd">
                <img src="https://github.com/${item.githubUsername}.png?size=200" alt="Profile image of ${item.name}">
            </button>
        </span>
        `);
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function userClicks() {
    console.log('inside userClicks'); 
    let person = $(this).parent().data('person');
    console.log(person);
    // create conditional to compare person user clicked on, if it's equal to the 
    // same name of the random person name generated
    if (person === people[randomPerson].name) {
        alert('You got it right!!');
    } else {
        alert('Try again!');
    } window.location = window.location
}
