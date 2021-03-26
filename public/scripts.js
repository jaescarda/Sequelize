async function diningHalls(){
    const table = document.querySelector(".table-body")
    const request = await fetch("/api/dining");
    const data = await request.json();
    console.log(data);

    data["data"].forEach((item) => {
        let counter = 1;
        const html = data["data"].map(hall => {
            return (`
            <tr>
                <th><span class='id'>${counter++}</span></th>
                <td><span class='name'>${hall.hall_name}</span></td>
                <td><span class='address'>${hall.hall_address}</span></td>
            </tr>
            `)
        });
      table.innerHTML = html.join('');  
    });

}
window.onload = diningHalls;