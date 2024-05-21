function realizaSoma() {
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    fetch("http://localhost:8000/soma",
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ valor1: parseInt(valor1), valor2: parseInt(valor2) })
        }).then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }

            return res.json();
        })
        .then((data) =>
            console.log(data)
        )
}

document.getElementById("button").addEventListener("click",
    realizaSoma);
