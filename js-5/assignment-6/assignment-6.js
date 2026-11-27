const form = document.querySelector("form");

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const value = document.querySelector("#query").value;
    const results = document.querySelector("#results");

    results.innerHTML = "";

    fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(value)}`)
        .then(response => response.json())
        .then(data => {
            data.result.forEach(joke => {
                const article = document.createElement("article");

                const paragraph = document.createElement("p");
                paragraph.textContent = joke.value;

                article.appendChild(paragraph);
                results.appendChild(article);
            });
        });
});
