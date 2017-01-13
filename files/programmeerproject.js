// make dataset for fillkeys
var dataset = {}
// open json
d3.json("datajson.json", function(data){
	console.log(data);
	for(p = 0; p < Number(data.length); p++)
	{
		data[p].muslim = Number(data[p].muslim)
		if(data[p].muslim < 50)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "< 50", percentage: data[p].muslim, wazdeez: data[p].land};
		}
		if(data[p].muslim > 50)
		{
			dataset[getcountrycode(data[p].land)] = {fillKey: "> 50", percentage: data[p].muslim};
		}
	}
	
	
})
console.log(dataset, "123")

// draw map
var map = new Datamap({
		// in container
        element: document.getElementById('containermap'),
        fills: {
        	"< 50": "blue",
        	"> 50": "red"
        },
        data: dataset,

        geographyConfig: {
        popupTemplate: function(geography, dataset){
        	return '<div class="hoverinfo">' + geography.properties.name + ": " + "percentage: " + dataset.percentage}
        }
    });


function check_prominent_religion(data){
	//to do 
}
function get_religion_percentages(data, religion_index){

}
// function that takes country name and gives country code
check = getcountrycode("Thailand")
console.log(check)

