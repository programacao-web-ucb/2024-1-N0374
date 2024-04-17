function showMovies(movies){
    console.log(movies)
    let p = document.createElement("p");
    p.textContent = JSON.stringify(movies);
    document.body.appendChild(p);
}


function getMovies() {
    fetch("./filmes.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            showMovies(data)
        )
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}