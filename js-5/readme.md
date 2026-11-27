# JS Module 5: AJAX

## Assignment 1 – TV Series Search form
- Created an HTML search form for TV series.
- Used the TVMaze API as the form action.
- Used `name="q"` to send the search term to the API.
- Tested the form and displayed JSON search results in the browser.

## Assignment 2 – Fetch the Search Results
- Used `document.querySelector()` to select the search form and input.
- Used `addEventListener()` to handle form submission.
- Used `evt.preventDefault()` to stop the default form action.
- Used `fetch()` to send a request to the TVMaze API.
- Used `response.json()` to convert the response into JSON.
- Displayed the search results in the console using `console.log()`.

## Assignment 3 – Show the Results on the Page
- Used `fetch()` to retrieve TV series search results.
- Used `forEach()` to loop through all search results.
- Used `document.createElement()` to create HTML elements.
- Displayed the series name inside an `<h2>` element.
- Added a details link using an `<a>` element with `target="_blank"`.
- Displayed the medium image and summary.
- Used optional chaining to handle missing images.
- Collected the information inside `<article>` elements.
- Used `innerHTML = ''` to clear old search results.

## Assignment 4 – Default Image
- Continued developing the TV series search application.
- Used the ternary operator to check whether an image exists.
- Displayed the original medium image when available.
- Used a default image when a TV series has no image.
- Used `https://placehold.co/210x295?text=Not%20Found` as the default image.

## Assignment 5 – A Random Chuck Norris Joke
- Created an application to retrieve a random Chuck Norris joke.
- Used the Chuck Norris API.
- Used `fetch()` to request a random joke.
- Used `response.json()` to convert the response into JSON.
- Displayed only the joke using `data.value` in the console.

## Assignment 6 – Search Jokes
- Created a search form to search for Chuck Norris jokes.
- Used `document.querySelector()` to get the search input.
- Used `addEventListener()` to handle form submission.
- Used `evt.preventDefault()` to stop the default form action.
- Used `fetch()` to send the search term to the Chuck Norris API.
- Used `forEach()` to loop through the search results.
- Created an `<article>` element for each joke.
- Displayed each joke inside a `<p>` element on the webpage.