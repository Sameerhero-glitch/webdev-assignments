let candidates = [];

let numberOfCandidates = Number(prompt("Enter the number of candidates:"));

for (let i = 0; i < numberOfCandidates; i++) {
    let name = prompt("Name for candidate " + (i + 1));

    candidates.push({
        name: name,
        votes: 0
    });
}

let numberOfVoters = Number(prompt("Enter the number of voters:"));

for (let i = 0; i < numberOfVoters; i++) {
    let vote = prompt("Who do you vote for?");

    if (vote !== null && vote.trim() !== "") {
        let candidate = candidates.find(
            c => c.name.toLowerCase() === vote.trim().toLowerCase()
        );

        if (candidate) {
            candidate.votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}