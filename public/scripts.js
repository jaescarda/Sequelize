async function diningHalls(){
    const table = document.querySelector(".table-body")
    const request = await fetch("/api/macroChart");
    const data = await request.json();
    console.log(data);

    data.forEach((item) => {
        let counter = 1;
        const html = data.map(meal => {
            return (`
            <tr>
                <th><span class='id'>${counter++}</span></th>
                <td><span class='name'>${meal.name}</span></td>
                <td><span class='sodium'>${meal.sodium}</span></td>
                <td><span class='calories'>${meal.calories}</span></td>
                <td><span class='carbs'>${meal.carbs}</span></td>
                <td><span class='protein'>${meal.protein}</span></td>
                <td><span class='fat'>${meal.fat}</span></td>
                <td><span class='cholesterol'>${meal.cholesterol}</span></td>
            </tr>
            `)
        });
      table.innerHTML = html.join('');  
    });

}
window.onload = diningHalls;