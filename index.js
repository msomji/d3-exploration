
let buildArrayOfItems = (item, times) => {
    let arr = []
    for(var i =0; i <= times; i++) {
        arr.push(item);
    }
    return arr;
}

var fruits = [
        ...buildArrayOfItems('apple', 10),
        ...buildArrayOfItems('dasfadf', 20),
        ...buildArrayOfItems('potato', 30),
        ...buildArrayOfItems('facebook', 40),
        ...buildArrayOfItems('agadg', 50),
        ...buildArrayOfItems('aasdfadvadv', 60),
        ...buildArrayOfItems('agadgadsfadfs', 70),
        ...buildArrayOfItems('agadgadsxcv', 80),
    ];
let fruitCount = fruits.reduce((initial, current) => {
    initial[current]? initial[current] += 1: initial[current] = 1
    return initial
}, {})

var width = 300;
var height = 2000;
var maxFrequency = Object.values(fruitCount).sort().reverse()[0];

widthScale = d3.scaleLinear()
    .domain([0, maxFrequency])
    .range([0, width]);

axis = d3.axisTop()
        .scale(widthScale);

colorScale = d3.scaleLinear()
                .domain([0, maxFrequency -50])
                .range(["#101357", "#fbaf08"]);


var canvas = d3.select("body")
                .append("svg")
                    .attr("width", width + 50)
                    .attr("height", height)
                    .style("background-color", "green")
                     .append("g");
                

canvas.append('g')
            
            .attr("transform", "translate(20,50)")
        .call(axis);


                canvas
                    .selectAll("rect")
                    .data([...new Set(fruits)])
                    .enter()
                        .append("rect")
                        .attr("transform", "translate(20,70)")
                        
                        .attr("height", "10")
                        .attr("y", (d, i) => i * 100)
                        .attr("fill", d => colorScale(fruitCount[d]));




    var circle = canvas.append('circle')
        .attr('cx', 100)
        .attr('cy', 400)
        .attr('r', 10);

        circle.transition()
        .attr('cx', 150);

        canvas
            .selectAll("rect")
            .data([...new Set(fruits)])
            .transition()
            .duration(1500)
            .attr("width", d => widthScale(fruitCount[d]))

console.log(fruitCount)
