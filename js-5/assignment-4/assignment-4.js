const form = document.querySelector("form");

form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const value = document.querySelector("#query").value;
    const results = document.querySelector("#results");

    results.innerHTML = "";

    fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(tvShow => {
                const article = document.createElement("article");

                const heading = document.createElement("h2");
                heading.textContent = tvShow.show.name;

                const link = document.createElement("a");
                link.href = tvShow.show.url;
                link.textContent = "Show details";
                link.target = "_blank";

                const image = document.createElement("img");

                image.src = tvShow.show.image
                    ? tvShow.show.image.medium
                    : "https://placehold.co/210x295?text=Not%20Found";

                image.alt = tvShow.show.name;

                const summary = document.createElement("div");
                summary.innerHTML = tvShow.show.summary || "";

                article.appendChild(heading);
                article.appendChild(link);
                article.appendChild(image);
                article.appendChild(summary);

                results.appendChild(article);
            });
        });
});
