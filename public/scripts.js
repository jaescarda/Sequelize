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
    //console.log("10 random meals:", selected)
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Evening Sales in a Restaurant"
        },
        axisX: {
            valueFormatString: "DDD"
        },
        axisY: {
            prefix: "$"
        },
        toolTip: {
            shared: true
        },
        legend:{
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "stackedBar",
            name: "Meals",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 56 },
                { x: new Date(2017, 0, 31), y: 45 },
                { x: new Date(2017, 1, 1), y: 71 },
                { x: new Date(2017, 1, 2), y: 41 },
                { x: new Date(2017, 1, 3), y: 60 },
                { x: new Date(2017, 1, 4), y: 75 },
                { x: new Date(2017, 1, 5), y: 98 }
            ]
        },
        {
            type: "stackedBar",
            name: "Snacks",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 86 },
                { x: new Date(2017, 0, 31), y: 95 },
                { x: new Date(2017, 1, 1), y: 71 },
                { x: new Date(2017, 1, 2), y: 58 },
                { x: new Date(2017, 1, 3), y: 60 },
                { x: new Date(2017, 1, 4), y: 65 },
                { x: new Date(2017, 1, 5), y: 89 }
            ]
        },
        {
            type: "stackedBar",
            name: "Drinks",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 48 },
                { x: new Date(2017, 0, 31), y: 45 },
                { x: new Date(2017, 1, 1), y: 41 },
                { x: new Date(2017, 1, 2), y: 55 },
                { x: new Date(2017, 1, 3), y: 80 },
                { x: new Date(2017, 1, 4), y: 85 },
                { x: new Date(2017, 1, 5), y: 83 }
            ]
        },
        {
            type: "stackedBar",
            name: "Dessert",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 61 },
                { x: new Date(2017, 0, 31), y: 55 },
                { x: new Date(2017, 1, 1), y: 61 },
                { x: new Date(2017, 1, 2), y: 75 },
                { x: new Date(2017, 1, 3), y: 80 },
                { x: new Date(2017, 1, 4), y: 85 },
                { x: new Date(2017, 1, 5), y: 105 }
            ]
        },
        {
            type: "stackedBar",
            name: "Takeaway",
            showInLegend: "true",
            xValueFormatString: "DD, MMM",
            yValueFormatString: "$#,##0",
            dataPoints: [
                { x: new Date(2017, 0, 30), y: 52 },
                { x: new Date(2017, 0, 31), y: 55 },
                { x: new Date(2017, 1, 1), y: 20 },
                { x: new Date(2017, 1, 2), y: 35 },
                { x: new Date(2017, 1, 3), y: 30 },
                { x: new Date(2017, 1, 4), y: 45 },
                { x: new Date(2017, 1, 5), y: 25 }
            ]
        }]
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