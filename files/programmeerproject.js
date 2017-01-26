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
				.attr("class", "tooltippie")
				.style("opacity", 0);

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
				{"label": "jewish", "percentage" :Number(data[i].jewish)},
				{"label": "christians", "percentage": Number(data[i].christians)},
				{"label": "muslim", "percentage": Number(data[i].muslim)},
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
		  .attr("class", "pathpie")
	      .attr("d", arc)
	      .style("fill", function (d){ return color(d.data.label); })
	      .on("mouseover", function (d){
	    	console.log(d.data.label);
	    	tooltippie.select('.religion').html(d.data.label);
	    	tooltippie.select(".percentage").html(d.data.percentage + " %");
	    	tooltippie.style("display", "block")
	    	tooltippie.style("opacity", 9);})
	      .on("mouseout", function (d) {
	      	console.log("HIER MET JE D");
	      	tooltippie.style("opacity", 0)})
	      .on("click", function (d){makescatter(d.data.label, "expectancy")});
	   

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

function makescatter(religion, social){
	console.log("scatter");
var xValue = function(d) { return d[religion];}, 
    xScale = d3.scale.linear().range([0, 360]), 
    xMap = function(d) { return xScale(xValue(d));}, 
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

var yValue = function(d) { return d.social;}, 
    yScale = d3.scale.linear().range([360, 0]), 
    yMap = function(d) { return yScale(yValue(d));},
    yAxis = d3.svg.axis().scale(yScale).orient("left");

    console.log(yMap)

var marginscatter = {top: 20, bottom: 20, left: 40, right: 60},
		widthscatter = 400 - marginscatter.left - marginscatter.right,
		heightscatter = 400 - marginscatter.bottom - marginscatter.top;
	console.log(widthscatter, "width")

d3.select(".scatter").remove();

var svgscatter = d3.select("#left").append("svg")
				.attr("width", widthscatter + marginscatter.left + marginscatter.right)
    			.attr("height", heightscatter + marginscatter.top + marginscatter.bottom)
    			.attr("class", "scatter")
  				.append("g")
    			.attr("transform", "translate(" + marginscatter.left + "," + marginscatter.top + ")");
 
 var tooltip = d3.select("#left").append("div")
    .attr("class", "tooltipscatter")
    .style("opacity", 0);   	
	


d3.json("json.txt", function(data){
	console.log(social)
	if (social == "expectancy")
	{
		socialdata = "expectancy.txt"
	}
	if (social == "literacy")
	{
		socialdata = "literacy.txt"
	}
    d3.json(socialdata, function(data2){

    	var scatterdata = {}  
	dataindex = 0


        for(v = 0; v < data.length; v++)
        {
        	for(f = 0; f < data2.length; f++)
        	{
        		if (data[v].land == data2[f].land)
        		{
        			data[v].social = Number(data2[f][social])
        			data[v][religion] = Number(data[v][religion])
        			dataindex += 1
        		}
        	}
        }
        console.log(data, "undifined???")
          	xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  			yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

          svgscatter.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + heightscatter + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", widthscatter)
      .attr("y", -5)
      .style("text-anchor", "end")
      .text("percentage " + religion);

svgscatter.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -40)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(social);

      
      svgscatter.selectAll(".dot")
      .data(data)
    .enter()
    .append("circle")
      .attr("class", "dot")
      .attr("r", 2)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", "black")
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d.land + "<br/> (" + xValue(d) 
	        + ", " + yValue(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      })
      .on("click", function(d){
      	makepie(d.land)
      });
        

    })
})
}
makescatter("muslim", "literacy")

function check_prominent_religion(data, dataset){

}
function get_religion_percentages(data, religion_index){

}
// function that takes country name and gives country code
check = getcountrycode("Thailand")
console.log(check)

