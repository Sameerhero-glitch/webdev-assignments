document.querySelector("h1").innerText = "My Grades";

const getGrades = async () => {
    const response= await fetch("/api/grades");
    const data = await response.json();

    console.log("response", response);
    console.log("data", data);

    document.querySelector("ul")

    for (let grade of data){
        console.log("grade", grade);

        const li = `<li>${grade}</li>`;

        ul.innerHTML += li;
        ul.innerHTML = ul.innerHTML + li;
    }

};

getGrades();

