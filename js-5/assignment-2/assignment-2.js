const form = document.querySelector("form");

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const value = document.querySelector("#query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
});
