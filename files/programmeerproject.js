// make dataset for fillkeys datamaps
var dataset = {}
//make clas varible to keep track of selected dot by map
clas = "0"
// save current social value for scatter
current_social = "expectancy"
// size of pie legend
var legendRectSize = 10;
var legendSpacing = 4;

// set hover style for buttons above map
d3.selectAll(".button").on("mouseover", function (d){
		// on hover background black
		d3.select(this)
		.style("background-color", "black")	
	})
		// on mousout back to default
		.on("mouseout", function (d){
		d3.select(this)
		.style("background-color", undefined);
	})
// set current religion to start
var current_religion = "muslim"
// donut chart
// width, height and radius
var margin = {top: 10, bottom: 10, left: 10, right: 10}
			width = 350 - margin.left - margin.right
			height = 350 - margin.bottom - margin.top
			radius = Math.min(width, height)/2;

// set fill colors
var color = d3.scale.ordinal()
			.range([ "#377eb8", "#ff7f00", "#984ea3", "#a65628", "#f781bf", "#ffff33","#e41a1c","#4daf4a" ])

// small arc for default
var arc = d3.svg.arc()
		.outerRadius(radius - 12) 
		.innerRadius(75);

// bigger arcs for mouseover
var arcselect = d3.svg.arc()
		.outerRadius(radius) 
		.innerRadius(63);

// layout arcs unsorted
var pie = d3.layout.pie()
		.value(function(d){return d.percentage})
		.sort(null)

// append div for tooltip but dont show
var tooltippie = d3.select("#right")
				.append("div")
				.style("position", "absolute")
				.attr("class", "tooltippie")
				.style("opacity", 0);

// append div for data label
tooltippie.append("div")
	.attr("class", "religion")
// and percentage
tooltippie.append("div")
	.attr("class", "percentage")

// scatter
// width height and margins
var marginscatter = {top: 50, bottom: 50, left: 50, right: 50},
		widthscatter = 400 - marginscatter.left - marginscatter.right,
		heightscatter = 400 - marginscatter.bottom - marginscatter.top;

// append div for tooltip but dont show
var tooltip = d3.select("#left").append("div")
    .attr("class", "tooltipscatter")
    .style("opacity", 0);

// draw prominent religion map
updatedatamost()
// make piechart of world data
makepie("World")
// draw scatter
makescatter("muslim", "literacy rate")




