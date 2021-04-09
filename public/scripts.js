async function mealMacros(){
    const table = document.querySelector(".table-body")
    const chart = document.querySelector(".chart")
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
    console.log("10 random meals:", selected)
    console.log("First meal name:", selected[0].name)
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Breakdown of Meals and their Macromolecules"
        },
        //axisX: {
        //    valueFormatString: "DDD"
        //},
        //axisY: {
        //    prefix: ""
        //},
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },

        // sodium
        data: [{
            type: "stackedBar",
            name: "Sodium",
            showInLegend: "true",
            dataPoints: [
                { y: selected[0].sodium, label: selected[0].name },
                { y: selected[1].sodium, label: selected[1].name},
                { y: selected[2].sodium, label: selected[2].name },
                { y: selected[3].sodium, label: selected[3].name },
                { y: selected[4].sodium, label: selected[4].name },
                { y: selected[5].sodium, label: selected[5].name },
                { y: selected[6].sodium, label: selected[6].name },
                { y: selected[7].sodium, label: selected[7].name },
                { y: selected[8].sodium, label: selected[8].name },
                { y: selected[9].sodium, label: selected[9].name },

            ]
        },
        {
            type: "stackedBar",
            name: "Calories",
            showInLegend: "true",
            dataPoints: [
                { y: selected[0].calories, label: selected[0].name },
                { y: selected[1].calories, label: selected[1].name },
                { y: selected[2].calories, label: selected[2].name },
                { y: selected[3].calories, label: selected[3].name },
                { y: selected[4].calories, label: selected[4].name },
                { y: selected[5].calories, label: selected[5].name },
                { y: selected[6].calories, label: selected[6].name },
                { y: selected[7].calories, label: selected[7].name },
                { y: selected[8].calories, label: selected[8].name },
                { y: selected[9].calories, label: selected[9].name },
            ]
        },
        {
            type: "stackedBar",
            name: "Carbs",
            showInLegend: "true",
            dataPoints: [
                { y: selected[0].carbs, label: selected[0].name },
                { y: selected[1].carbs, label: selected[1].name },
                { y: selected[2].carbs, label: selected[2].name },
                { y: selected[3].carbs, label: selected[3].name },
                { y: selected[4].carbs, label: selected[4].name },
                { y: selected[5].carbs, label: selected[5].name },
                { y: selected[6].carbs, label: selected[6].name },
                { y: selected[7].carbs, label: selected[7].name },
                { y: selected[8].carbs, label: selected[8].name },
                { y: selected[9].carbs, label: selected[9].name },
            ]
        },
        {
            type: "stackedBar",
            name: "Protein",
            showInLegend: "true",
            dataPoints: [
                { y: selected[0].protein, label: selected[0].name },
                { y: selected[1].protein, label: selected[1].name },
                { y: selected[2].protein, label: selected[2].name },
                { y: selected[3].protein, label: selected[3].name },
                { y: selected[4].protein, label: selected[4].name },
                { y: selected[5].protein, label: selected[5].name },
                { y: selected[6].protein, label: selected[6].name },
                { y: selected[7].protein, label: selected[7].name },
                { y: selected[8].protein, label: selected[8].name },
                { y: selected[9].protein, label: selected[9].name },
            ]
        },
        {
            type: "stackedBar",
            name: "Fat",
            showInLegend: "true",
            dataPoints: [
                { y: selected[0].fat, label: selected[0].name },
                { y: selected[1].fat, label: selected[1].name },
                { y: selected[2].fat, label: selected[2].name },
                { y: selected[3].fat, label: selected[3].name },
                { y: selected[4].fat, label: selected[4].name },
                { y: selected[5].fat, label: selected[5].name },
                { y: selected[6].fat, label: selected[6].name },
                { y: selected[7].fat, label: selected[7].name },
                { y: selected[8].fat, label: selected[8].name },
                { y: selected[9].fat, label: selected[9].name },
            ]
        },
        {
            type: "stackedBar",
            name: "Cholesterol",
            showInLegend: "true",
            dataPoints: [
                { y: selected[0].cholesterol, label: selected[0].name },
                { y: selected[1].cholesterol, label: selected[1].name },
                { y: selected[2].cholesterol, label: selected[2].name },
                { y: selected[3].cholesterol, label: selected[3].name },
                { y: selected[4].cholesterol, label: selected[4].name },
                { y: selected[5].cholesterol, label: selected[5].name },
                { y: selected[6].cholesterol, label: selected[6].name },
                { y: selected[7].cholesterol, label: selected[7].name },
                { y: selected[8].cholesterol, label: selected[8].name },
                { y: selected[9].cholesterol, label: selected[9].name },
            ]
        }
      ]
    });
    chart.render();
    
    function toggleDataSeries(e) {
        if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }
};

window.onload = windowActions;