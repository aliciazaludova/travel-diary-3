# Travel Diary
## Description
This project is a single-page application that functions as a travel diary. Cards display each country the user would like to visit. Once the user visits the country they can make diary entries for each. 

[View assignment here](https://github.com/nss-nightclass-projects/exercise-vault/blob/master/travel-diary.md)

### Technologies Used
- HTML5, CSS, vanilla JavaScript
- Single responsibility principle (each function is responsible for its own task)

### Features
- There is an array of objects that represents places I'd like to go. Each object has a title, image and description.
- Each object is printed to the DOM in a "card" that has an input field and submit button. There are 3 "cards" per row.
- The user should be able to type a diary entry into the input field for each location, click the submit button on that card, and see their entry in a "diary" below the cards.
- The diary entry should contain the name of the location from the card the user typed into (and hit the submit button in). It should also contain only the text that was in the input field from that card.
- The input field for that card should be cleared upon submission.
- The diary entries should build up as the user continues to type in cards and submit their entries. Newest entries should appear at the bottom.
- The page should look like the following mock-up:
#### Mock-up
![traveldiarymockup](https://user-images.githubusercontent.com/33577725/38694143-7c531d88-3e4e-11e8-8f62-c03b8206ff5f.png)

## Screenshot
![travel-diary-full-page](https://user-images.githubusercontent.com/33577725/38694101-608d869c-3e4e-11e8-87cc-6c0e5f85ac7c.png)

### Single-page application

## How to Run
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

## Contributors
Alicia Zaludova
