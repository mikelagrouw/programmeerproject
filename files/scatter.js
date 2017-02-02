// function makescatter
function makescatter(religion, social){
// update current social
current_social = social
// variables for value mapping on x axis
var xValue = function(d) { return d[religion];}, 
    xScale = d3.scale.linear().range([0, 300]), 
    xMap = function(d) { return xScale(xValue(d));}, 
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// and y axis
var yValue = function(d) { return d.social;}, 
    yScale = d3.scale.linear().range([300, 0]), 
    yMap = function(d) { return yScale(yValue(d));},
    yAxis = d3.svg.axis().scale(yScale).orient("left");

// remove current scatter
d3.select(".scatter").remove();
// draw new svg
var svgscatter = d3.select("#left").append("svg")
				.attr("width", widthscatter + marginscatter.left + marginscatter.right)
    			.attr("height", heightscatter + marginscatter.top + marginscatter.bottom)
    			.attr("class", "scatter")
  				.append("g")
    			.attr("transform", "translate(" + marginscatter.left + "," + marginscatter.top + ")");
 
// open religion data
d3.json("json.txt", function(data){
// check which social data to open
if (social == "life expectancy")
{
  socialdata = "life expectancy.txt"
}
if (social == "literacy rate")
{
	socialdata = "literacy rate.txt"
}
if (social == "happiness index score")
{
	socialdata = "happiness index score.txt"
}
// open social data
d3.json(socialdata, function(data2){
    // look for social data corresponding to religion data and put in religion json
    for(v = 0; v < data.length; v++)
    {
      for(f = 0; f < data2.length; f++)
      {
        if (data[v].land == data2[f].land)
        {
        	data[v].social = Number(data2[f][social])
        	data[v][religion] = Number(data[v][religion])
        			
        }
      }
    }
    // scale values on axis
    xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  	yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

    // append g element to svg
    svgscatter.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + heightscatter + ")")
      // append x axis and text
      .call(xAxis)
      .append("text")
      .attr("class", "label")
      .attr("x", widthscatter)
      .attr("y", -5)
      .style("text-anchor", "end")
      .text("percentage " + religion);

    // append g element to svg
    svgscatter.append("g")
      .attr("class", "y axis")
      // append y axis and text
      .call(yAxis)
      .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", -45)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text(social);

    // append dots 
    svgscatter.selectAll(".dot")
      // from data
      .data(data)
      .enter()
      // draw circles
      .append("circle")
      // filter undefined values
      .filter(function (d){return d.social != undefined})
      .attr("class", function(d){return getcountrycode(d.land) + "dot"})
      .attr("r", 2)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", "black")
      // on mousover show tooltip and highlight
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d.land + "<br/> (" + xValue(d) 
	        + ", " + yValue(d) + ")")
            .style("left", (d3.event.pageX + 5) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
          d3.select(this)
            .attr("r", 5)
            .style("fill", "green")
            .style("stroke", "black");
      })
      // on mousout back to default
      .on("mouseout", function(d) {
          console.log(this.style[0])
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
          d3.select(this)
           .attr("r", 2)
           .style("fill", "black")
           .style("stroke", "none");
           if (classs != "0")
      {
                d3.select(classs)
                .attr("r", 5)
                .style("fill", "blue")
                .style("stroke", "black")
      }
      })
      // on click update pie chart
      .on("click", function(d){
      	makepie(d.land)
      });
      if (classs != "0")
      {
                d3.select(classs)
                .attr("r", 5)
                .style("fill", "blue")
                .style("stroke", "black")
      }
    })
})
};
