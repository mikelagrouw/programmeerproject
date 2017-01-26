// make dataset for fillkeys
var dataset = {}
// open json
updatedatamost()
makepie("World")





// donut chart
// width and heigth
var margin = {top: 10, bottom: 10, left: 10, right: 10}
			width = 300 - margin.left - margin.right
			height = 300 - margin.bottom - margin.top
			radius = Math.min(width, height)/2;

var color = d3.scale.ordinal()
			.range([ "#377eb8", "#ff7f00", "#984ea3", "#a65628", "#f781bf", "#ffff33", "#4daf4a", "#e41a1c"])

var arc = d3.svg.arc()
		.outerRadius(radius - 10) 
		.innerRadius(75);

var pie = d3.layout.pie()
		.value(function(d){return d.percentage})
		.sort(null)

var tooltippie = d3.select("#right")
				.append("div")
				.attr("class", "tooltip")

		tooltippie.append("div")
		.attr("class", "religion")

		tooltippie.append("div")
		.attr("class", "percentage")




function makepie(land){
	d3.json("json.txt", function(data){
		d3.select(".pie").remove()

		var legendRectSize = 10;
		var legendSpacing = 4;

		d3.select(".titel").remove()
		d3.select("#right").append("div")
		.attr("class", "titel")
		.attr("width", width)
		.attr("height", 40)
		.attr("transform", "translate(50, 50)")
		.text(land)

		var svgpie = d3.select("#right").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "pie")
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var worldbutton = d3.select("#world").remove()
		d3.select("#right").append("button")
		.attr("class", "button")
		.attr("id", "world")
		.attr("width", 50)
		.attr("height", 50)
		.text("world data")

		d3.select("#world").on("click", function(){makepie("World");})






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
				console.log(piepie, "pie data")
			}
		}
		  var g = svgpie.selectAll(".arc")
	      .data(pie(piepie))
	    	.enter().append("g")
	      	.attr("class", "arc");

	var path =  g.append("path")
	      .attr("d", arc)
	      .style("fill", function(d){ return color(d.data.label); });

	    svgpie.select("path").on("mousover", function(d, i){
	    	console.log("mousover");
	    	tooltip.select('.religion').html(d.data.label)
	    	tooltip.style("display", "block");
	    })

	var legend = svgpie.selectAll(".legend")
				.data(color.domain())
				.enter()
				.append("g")
				.attr("class", "legend")
				.attr("transform", function(d, i){
					var heightlegend = legendRectSize + legendSpacing;
					var offset = heightlegend * color.domain().length - 55;
					console.log(i)
					var horz = -2 * legendRectSize;
					var vert = i * heightlegend - offset;
					return 'translate(' + horz + ',' + vert + ')';
				})

	legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize)
  .attr("class", "rectpie")
  .style('fill', color)
  .style('stroke', color);

  legend.append('text')
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing + 3)
  .text(function(d) { return d; });


	 	
	});
}


var xValue = function(d) { return d.percentage;}, 
    xScale = d3.scale.linear().range([0, 360]), 
    xMap = function(d) { return xScale(xValue(d));}, 
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

var yValue = function(d) { return scatterdata.social;}, 
    yScale = d3.scale.linear().range([360, 0]), 
    yMap = function(d) { console.log(yScale(yValue(d)), "doe dit plzzz"); return yScale(yValue(d));},
    yAxis = d3.svg.axis().scale(yScale).orient("left");

    console.log(yMap)

var marginscatter = {top: 20, bottom: 20, left: 20, right: 20},
		widthscatter = 400 - marginscatter.left - marginscatter.right,
		heightscatter = 400 - marginscatter.bottom - marginscatter.top;
	console.log(widthscatter, "width")

var svgscatter = d3.select("body").append("svg")
				.attr("width", widthscatter + marginscatter.left + marginscatter.right)
    			.attr("height", heightscatter + marginscatter.top + marginscatter.bottom)
    			.attr("class", "scatter")
  				.append("g")
    			.attr("transform", "translate(" + marginscatter.left + "," + marginscatter.top + ")");
 
    	
var scatterdata = {}  
	dataindex = 0	


d3.json("json.txt", function(data){
    d3.json("expectancy.txt", function(data2){


        for(v = 0; v < data.length; v++)
        {
        	for(f = 0; f < data2.length; f++)
        	{
        		if (data[v].land == data2[f].land)
        		{
        			scatterdata[dataindex] = {"land": data[v].land, "percentage": Number(data[v].muslim), "social": Number(data2[f].expectancy)}
        			dataindex += 1
        		}
        	}
        }
        console.log(scatterdata, "undifined???")
          	xScale.domain([d3.min(scatterdata, xValue)-1, d3.max(scatterdata, xValue)+1]);
  			yScale.domain([d3.min(scatterdata, yValue)-1, d3.max(scatterdata, yValue)+1]);

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

svgscatter.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -15)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("social shit");

      console.log(scatterdata, "scatterdata")

      console.log(yMap, xMap)
      svgscatter.selectAll(".dot")
      .data(scatterdata)
    .enter()
    .append("circle")
      .attr("class", "dot")
      .attr("r", 5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", "black")
        

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

