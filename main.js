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
        domString += `<h2>${country.description}</h2>`;
        domString += `<textarea placeholder="Write entry here..."></textarea>`
        domString += `<br>`;
        domString += `<button class="card-button">Add diary entry</button>`;
        domString += `</div>`;
    });
    printToDom(domString, 'travel-diary');
}
buildDomString(travelDiary);