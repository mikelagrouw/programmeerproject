// function makepie
function makepie(land){
	// open data
	d3.json("json.txt", function(data){
		// remove current pie
		d3.select(".pie").remove()
		// remove last pie titel
		d3.selectAll(".titelpie").remove()
		// append div for new titel
		d3.select("#right").append("div")
		.attr("class", "titelpie")
		// write country for data
		.text(land)

		// make svg for new pie
		var svgpie = d3.select("#right").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "pie")
		.append("g")
		.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		// iterate through data to find the country to draw
		for(i = 0; i < data.length; i++)
		{
			if(data[i].land == land)
			{
				// make piechartdataset
				var datapie = [
				{"label": "jewish", "percentage" :Number(data[i].jewish)},
				{"label": "christian", "percentage": Number(data[i].christian)},
				{"label": "muslim", "percentage": Number(data[i].muslim)},
				{"label": "folk",  "percentage": Number(data[i].folk)},  
				{"label": "buddhist", "percentage": Number(data[i].buddhist)},
				{"label": "other", "percentage": Number(data[i].other)},
				{"label": "unaffiliated", "percentage": Number(data[i].unaffiliated)},
				{"label": "hindu", "percentage": Number(data[i].hindu)}];
				console.log(datapie, "pie data")
			}
		}

		// append g elements for paths
		var g = svgpie.selectAll(".arc")
	    .data(pie(datapie))
	    .enter().append("g")
	    .attr("class", "arc");

	    // append paths
		var path =  g.append("path")
		.attr("class", "pathpie")
	    .attr("d", arc)
	    // fill colors
	    .style("fill", function (d){ return color(d.data.label); })
	    .style("stroke", "black")
	    // on mousover show tooltip and highlight
	    .on("mouseover", function (d){
	    	tooltippie.select('.religion').html(d.data.label);
	    	tooltippie.select(".percentage").html(d.data.percentage + " %");
	    	tooltippie.style("display", "block")
	    	tooltippie.style("opacity", 9);
	    	d3.select(this).transition()
          	.duration(300)
          	.attr("d", arcselect)
      		;})
	    // on mousout back to default
	    .on("mouseout", function (d) {
	      	console.log("HIER MET JE D");
	      	tooltippie.style("opacity", 0);
	      	d3.select(this).transition()
          	.duration(300)
          	.attr("d", arc);
        })
        // on click draw scatterplot
	    .on("click", function (d){makescatter(d.data.label, current_social);
	  		current_religion = d.data.label;
	  		updatedata(d.data.label);});
	   
	   	// append legend
		var legend = svgpie.selectAll(".legend")
			.data(color.domain())
			.enter()
			.append("g")
			.attr("class", "legend")
			// set legend vertically
			.attr("transform", function(d, i){
				var heightlegend = legendRectSize + legendSpacing;
				var offset = heightlegend * color.domain().length - 55;
				console.log(i)
				var horz = -2 * legendRectSize;
				var vert = i * heightlegend - offset;
				return 'translate(' + horz + ',' + vert + ')';
			})
		// append rectangles to legend
		legend.append("rect")
  		.attr("width", legendRectSize)
  		.attr("height", legendRectSize)
  		.attr("class", "rectpie")
  		.style("fill", color)
  		.style("stroke", "black")
  		.style("stroke-width", "1.5px");

  		// append text to legend
  		legend.append('text')
  		.attr('x', legendRectSize + legendSpacing)
  		.attr('y', legendRectSize - legendSpacing + 3)
  		.text(function(d) { return d; });

  		// remove current button
  		d3.select("#world").remove()
  		// append button for pie chart world data
		d3.select("#right").append("button")
		.attr("class", "button")
		.attr("id", "world")
		.attr("width", 50)
		.attr("height", 50)
		.attr("align", "right")
		.text("world data")
		// on click show world data pie
		d3.select("#world").on("click", function(){makepie("World");})


	});
}