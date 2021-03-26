async function diningHalls(){
    const table = document.querySelector(".table-body")
    const request = await fetch("/api/dining");
    const data = await request.json();
    console.log(data);

    data["data"].forEach((item) => {
        const appendItem = document.createElement("tr");
        const html = data["data"].map(hall => {
            return (`
            <tr>
                <span class='name'>${hall.hall_name}</span>
            </tr>
            `)
        });
      table.innerHTML = html.join('');  
    });

}
window.onload = diningHalls;