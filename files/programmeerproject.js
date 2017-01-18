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




	

})





// donut chart
// width and heigth
var width = 300,
	height = 300,
	radius = Math.min(width, height) / 2;

var color = d3.scale.category20();

var arc = d3.svg.arc()
    

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.percentage; });

var svgpie = d3.select("#right").append("svg")
			.attr("width", width)
    		.attr("height", height)
  			.append("g")
    		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")"); 
d3.json("json.txt", function(data){
	for(i = 0; i < data.length; i++)
	{
		if(data[i].land == "Germany")
		{
			piepie = [data[i].jewish, data[i].christians, data[i].muslim, data[i].folk, data[i].other, data[i].hindu, data[i].buddhist, data[i].unaf]
			console.log(piepie)
			for(j = 0; j < piepie.length; j++)
			{
				piepie[j] = Number(piepie[j])
			}
		}
	}
	
var path = svgpie.datum(data).selectAll("path")
      .data(piepie)
    .enter().append("path")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc)
console.log(piepie)
})
		





function check_prominent_religion(data){
	//to do 
}
function get_religion_percentages(data, religion_index){

}
// function that takes country name and gives country code
check = getcountrycode("Thailand")
console.log(check)

