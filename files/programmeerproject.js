// make dataset for fillkeys
var dataset = {}
// open json
d3.json("json.txt", function(data){
	for(p = 0; p < Number(data.length); p++)
	{
		data[p].muslim = Number(data[p].muslim)

		if(data[p].muslim > 75)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: ">75", percentage: data[p].muslim};
		}
		if(data[p].muslim <= 75 && data[p].muslim > 50)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "75 - 50", percentage: data[p].muslim};
		}
		if(data[p].muslim <= 50 && data[p].muslim > 10)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "50 - 10", percentage: data[p].muslim};
		}
		if(data[p].muslim <= 10 && data[p].muslim > 5)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "10 - 5", percentage: data[p].muslim};
		}
		if(data[p].muslim <= 5 && data[p].muslim > 1)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "5 - 1", percentage: data[p].muslim};
		}
		if(data[p].muslim <= 1 && data[p].muslim > 0.1)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "1 - .1", percentage: data[p].muslim};
		}
		if(data[p].muslim == 0.1)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "< 0.1", percentage: data[p].muslim};
		}

	}

	// draw map
var map = new Datamap({
		// in container
        element: document.getElementById('containermap'),
        fills: {
        	">75": "#005824",
        	"75 - 50": "#238b45",
        	"50 - 10": "#41ae76",
        	"10 - 5": "#66c2a4",
        	"5 - 1": "#99d8c9",
        	"1 - .1": "#ccece6",
        	"< 0.1": "#e5f5f9",
        	defaultFill: "black",
        	"no data": "black"
        },
        data: dataset,
        geographyConfig: {
        popupTemplate: function(geography, dataset){
        	return '<div class="hoverinfo">' + geography.properties.name + ": " + "percentage: " + dataset.percentage}
        },    
    });
	map.legend();
	console.log(map, "hij bestaat")
	map.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
	console.log(geography.properties.name)
	makepie(geography.properties.name)
	})

})





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
		.innerRadius(0);

var pie = d3.layout.pie()
		.value(function(d){return d.percentage})
		.sort(null)


var svg = d3.select("#right").append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
function makepie(land){
	d3.json("json.txt", function(data){
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
		  var g = svg.selectAll(".arc")
	      .data(pie(piepie))
	    	.enter().append("g")
	      	.attr("class", "arc");

	  g.append("path")
	      .attr("d", arc)
	      .style("fill", function(d){ return color(d.data.label); });	
	});
}
		





function check_prominent_religion(data){
	//to do 
}
function get_religion_percentages(data, religion_index){

}
// function that takes country name and gives country code
check = getcountrycode("Thailand")
console.log(check)

