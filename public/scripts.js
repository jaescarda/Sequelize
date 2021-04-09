async function mealMacros(){
    const table = document.querySelector(".table-body")
    const request = await fetch("/api/wholeMeal");
    let data = await request.json();
    //const meals = Array(data);
    console.table("data:", data.data);
    
    data["data"].forEach((item) => {
    //meals[0].forEach((item) => {
        //const html = meals[0].map(meal => {
        const html = data["data"].map(meal => {
            return (`
            <tr>
                <th><span class='id'>${meal.id}</span></th>
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
      html.length = 10;
      table.innerHTML = html.join('');
        
    });
    return data["data"];
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };


async function windowActions() {
    console.log("Window loaded");
    const meals = await mealMacros();
    const mealArray = [1, 2 ,3 , 4, 5, 6, 7, 8, 9, 10];
    const selected = mealArray.map((element) => {
        const random = getRandomIntInclusive(0, meals.length-1);
        return meals[random];
    });

    console.log(selected)
};

window.onload = windowActions;