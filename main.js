var travelDiary = [
    {
        location: "Argentina",
        image: "/images/argentina.jpg",
        description: "South America with a European flair",
    },
    {
        location: "Kenya",
        image: "/images/kenya.jpg",
        description: "One of the best countries for a safari",
    },
    {
        location: "Thailand",
        image: "/images/thailand.jpg",
        description: "Buddhist history and great vegan food!",
    },
    {
        location: "Ireland",
        image: "/images/ireland.jpg",
        description: "Greenery and puffy sheep",
    },
    {
        location: "Japan",
        image: "/images/japan.jpg",
        description: "Home of Hello Kitty",

    },
    {
        location: "Cuba",
        image: "/images/cuba.jpg",
        description: "Faded colonial glamour",
    }
]

const printToDom = (domString, divId) => {
    // make var that holds the ...
    const printTo = document.getElementById(divId);
    printTo.innerHTML += domString;
};

const buildDomString = (countriesArray) => {
    let domString = '';
    countriesArray.forEach((country) => { // taking country and sending it in to do the following:
        domString += `<div class="card">`;
        domString += `<h2>${country.location}</h2>`;
        domString += `<img src=${country.image}>`;
        domString += `<h3>${country.description}</h3>`;
        domString += `<textarea class="diary-input" placeholder="Begin entry..."></textarea>`;
        domString += `<br>`;
        domString += `<button class="card-button">Add entry</button>`;
        domString += `</div>`;
    });
    printToDom(domString, 'travel-diary');
}
buildDomString(travelDiary);

// create variable to hold diary entry input that will become output
let inputToOutput = document.getElementsByClassName("diary-input");

// create empty array to hold the diary entry string so something is holding it before you call print
domArray = [];

// locate buttons
const diaryButtons = document.getElementsByClassName('card-button');
console.log('diaryEntryButtons:', diaryButtons);


// listen for click on buttons--loop through each
for (let i = 0; i < diaryButtons.length; i++) {
    diaryButtons[i].addEventListener('click', (e) => {
       domString = ''
       domString += `<div class="output-card"`;
       domString += `<h2>${travelDiary.location}</h2>`;
       domString += `<textarea class="output">${inputToOutput[i].value}</textarea>`;
       domString += `</div`;
       domArray.push(domString);
       printToDom(domArray, 'printed-entries');
    });
}