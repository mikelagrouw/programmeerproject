// make dataset for fillkeys
var dataset = {}
// open json
updatedatamost()





// donut chart
// width and heigth
var margin = {top: 10, bottom: 10, left: 10, right: 10}
			width = 300 - margin.left - margin.right
			height = 300 - margin.bottom - margin.top
			radius = Math.min(width, height)/2;

var color = d3.scale.ordinal()
			.range([ "#377eb8", "#4daf4a", "#984ea3", "#ffff33", "#a65628", "#ff7f00", "#f781bf", "#e41a1c"])

var arc = d3.svg.arc()
		.outerRadius(radius - 10) 
		.innerRadius(75);

var pie = d3.layout.pie()
		.value(function(d){return d.percentage})
		.sort(null)

var tooltippie = d3.select("#right")
				.append("div")
				.attr("class", "tooltip")


var svg = d3.select("#right").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "pie")
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
function makepie(land){
	d3.json("json.txt", function(data){
		d3.select(".pie").remove()

		var svgpie = d3.select("#right").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "pie")
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		for(i = 0; i < data.length; i++)
		{
			if(data[i].land == land)
			{
				var piepie = [
				{"label": "jew", "percentage" :Number(data[i].jewish)},
				{"label": "christ", "percentage": Number(data[i].christians)},
				{"label": "islam", "percentage": Number(data[i].muslim)},
				{"label": "folk",  "percentage": Number(data[i].folk)},  
				{"label": "buddhist", "percentage": Number(data[i].buddhist)},
				{"label": "other", "percentage": Number(data[i].other)},
				{"label": "hindu", "percentage": Number(data[i].hindu)},
				{"label": "unaf", "percentage": Number(data[i].unaf)}];
				console.log(piepie)
			}
		}
		  var g = svgpie.selectAll(".arc")
	      .data(pie(piepie))
	    	.enter().append("g")
	      	.attr("class", "arc");

	var path =  g.append("path")
	      .attr("d", arc)
	      .style("fill", function(d){ return color(d.data.label); });

	  svgpie.selectAll("path").on("mousover", function(d){
	  	console.log("mousover")
	  })	
	});
}
var xValue = function(d) { return d.percentage; console.log(d[5].percentage)}, // data -> value
    xScale = d3.scale.linear().range([0, widthscatter]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

var yValue = function(d) { return d.social;}, // data -> value
    yScale = d3.scale.linear().range([heightscatter, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");

var marginscatter = {top: 20, bottom: 20, left: 20, right: 20},
		widthscatter = 400 - marginscatter.left - marginscatter.right,
		heightscatter = 300 - marginscatter.bottom - marginscatter.top;

var svgscatter = d3.select("body").append("svg")
				.attr("width", widthscatter + marginscatter.left + marginscatter.right)
    			.attr("height", heightscatter + marginscatter.top + marginscatter.bottom)
  				.append("g")
    			.attr("transform", "translate(" + marginscatter.left + "," + marginscatter.top + ")");
    	
var scatterdata = {}  
	dataindex = 0	


d3.json("json.txt", function(data){
    d3.json("expectancy.txt", function(data2){
        console.log(data[100].land, data2[50].land, "ik hoop dat dit kan")
        console.log(data)
        console.log(data2, "data2")

        for(v = 0; v < data.length; v++)
        {
        	for(f = 0; f < data2.length; f++)
        	{
        		if (data[v].land == data2[f].land)
        		{
        			console.log(data[v].land,dataindex, "komop wat is deez")
        			scatterdata[data[v].land] = {"land": data[v].land, "percentage": Number(data[v].muslim), "social": Number(data2[f].expectancy)}
        			dataindex += 1
        		}
        	}
        }
        console.log(scatterdata)
          	xScale.domain([d3.min(data.muslim, xValue)-1, d3.max(data.muslim, xValue)+1]);
  			yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

          svgscatter.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + heightscatter + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", widthscatter)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("religion percentage");

      svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 30)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("sociaal ding");
        

    })
})
		





function check_prominent_religion(data){
	//to do 
}
function get_religion_percentages(data, religion_index){

}
// function that takes country name and gives country code
check = getcountrycode("Thailand")
console.log(check)

