
// function to update datamap   
function updatedata(religion){
    // set new current religion for scatter
    current_religion = religion
    // open religion data
    d3.json("json.txt", function(data){
    // iterate over data to give fillkeys
    for(p = 0; p < Number(data.length); p++)
    {
        // make number
        data[p][religion] = Number(data[p][religion])
        //give fillkeys
        if(data[p][religion] > 75)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: ">75", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 75 && data[p][religion] > 50)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "75 - 50", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 50 && data[p][religion] > 10)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "50 - 10", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 10 && data[p][religion] > 5)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "10 - 5", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 5 && data[p][religion] > 1)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "5 - 1", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 1 && data[p][religion] > 0.1)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "1 - .1", percentage: data[p][religion]};
        }
        if(data[p][religion] == 0.1)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "< 0.1", percentage: data[p][religion]};
        }
    }
    // remove current datamap
    d3.select("svg").remove()
    // make new datamap
    var map = new Datamap({
        // in container
        element: document.getElementById('containermap'),
        // fill according to fillkeys
        fills: {
            ">75": "#005824",
            "75 - 50": "#238b45",
            "50 - 10": "#41ae76",
            "10 - 5": "#66c2a4",
            "5 - 1": "#99d8c9",
            "1 - .1": "#ccece6",
            "< 0.1": "#e5f5f9",
            defaultFill: "black",
            "no data": "black",
        },
        // from dataset
        data: dataset,
        // on hover tooltip
        geographyConfig: {
        popupTemplate: function(geography, dataset){
            return '<div class="hoverinfo">' + geography.properties.name + ": " + "percentage: " + dataset.percentage}
        }    
    });
    // remove current legend
    d3.select(".datamaps-legend").remove()
    // draw new one
    map.legend()
    // onclick highlight scatter
    map.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
    onclick_data(geography, data);
    // and make pie
    })
    // black borders
    map.svg.selectAll('.datamaps-subunit')
    .style("stroke", "black")   
})
makescatter(religion, current_social)
}

function updatedatamost(){
    d3.json("json.txt", function(data){
        for(p = 0; p < data.length; p ++)
        {
            var temp = Number(data[p].christian);
            var religion = "christian"
            if(Number(data[p].muslim) > temp)
            {
                temp = Number(data[p].muslim)
                religion = "muslim"
            }
            if(Number(data[p].unaffiliated) > temp)
            {
                temp = Number(data[p].unaffiliated)
                religion = "unaffiliated"
            }
            if(Number(data[p].hindu) > temp)
            {
                temp = Number(data[p].hindu)
                religion = "hindu"
            }
            if(Number(data[p].jewish) > temp)
            {
                temp = Number(data[p].jewish)
                religion = "jewish"
            }
            if(Number(data[p].folk) > temp)
            {
                temp = Number(data[p].folk)
                religion = "folk"
            }
            if(Number(data[p].other) > temp)
            {
                temp = Number(data[p].other)
                religion = "other"
            }
            if(Number(data[p].buddhist) > temp)
            {
                temp = Number(data[p].buddhist)
                religion = "buddhist"
            }
            dataset[getcountrycode(data[p].land)] = {fillKey: religion, percentage: temp}
        }
        
        d3.select("svg").remove()
    var map = new Datamap({
        // in container
        element: document.getElementById('containermap'),
        fills: {
            "unaffiliated": "#e41a1c",
            "jewish": "#377eb8",
            "hindu": "#4daf4a",
            "christian": "#ff7f00",
            "muslim": "#984ea3",
            "other": "#ffff33",
            "folk": "#a65628",
            "buddhist": "#f781bf",
            "no data" : "black"
            
        },
        data: dataset,
        geographyConfig: {
        popupTemplate: function(geography, dataset){
            return '<div class="hoverinfo">' + geography.properties.name + ": " + "religion: " + dataset.fillKey}
        },

    });
    d3.select(".datamaps-legend").remove()
    map.legend()
    map.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
    onclick_data(geography, data);
    
    })
    map.svg.selectAll('.datamaps-subunit')
    .style("stroke", "black")

    })
}
function onclick_data(geography, data){
        if (clas.length > 1){
                d3.select(clas)
                .attr("r", 2)
                .style("fill", function(data){return data.color;})
            }
            // select dot corresponding with country fill and make bigger
            
            if (geography.id == "-99" || geography.id == "ZWE" || geography.id == "FLK" || geography.id == "GNB" || geography.id == "ATF"){
                d3.select(".pie").remove();
                d3.selectAll(".titelpie").remove()
                d3.select("#right").append("div")
                .attr("class", "titelpie")
                .text("no data available")
                .style("font-size", "30px")
                .style("color", "red")
            }
            else
            { 
                classs = "." + geography.id + "dot"
                console.log(classs)
                clas = classs
                d3.select(classs)
                .attr("r", 5)
                .style("fill", "blue")
                .style("stroke", "black")
                makepie(geography.properties.name);
            }
            console.log(geography.properties.name, "name");
            
}