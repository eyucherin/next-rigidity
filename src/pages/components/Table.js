import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const Table = (props) => {
  const [data, setData] = useState([[20,30],[20,60]]);
  const [toolMode, setToolMode] = useState(props.toolMode);
  const svgRef = useRef();

  useEffect(() => {
    setToolMode(props.toolMode); // update toolMode state when toolMode prop changes
  }, [props.toolMode]);

  useEffect(() => {
    const w = 400;
    const h = 300;

    const svg = d3.select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style('overflow','visible')
      .style('margin-top','50px')
      .style('margin-left','100px')

    const xScale = d3.scaleLinear()
      .domain([0,100])
      .range([0,w])

    const yScale = d3.scaleLinear()
      .domain([0,100])
      .range([h,0])

    const xAxis = d3.axisBottom(xScale).ticks(10)

    const yAxis = d3.axisLeft(yScale).ticks(10)

    svg.append('g')
      .call(xAxis)
      .attr('transform',`translate(0,${h})`)

    svg.append('g')
      .call(yAxis)

    svg.append('text')
      .attr('x',w/2)
      .attr('y',h+50)
      .text('X')

    svg.append('text')
      .attr('x',-65)
      .attr('y',h - 150)
      .text('Y')

    svg.selectAll()
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d,i) => xScale(d[0]))
      .attr('cy', (d,i) => yScale(d[1]))
      .attr('r', (d,i) => 5)
      .attr('fill', 'blue')

    const line = d3.line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]));

    // Draw the line
    svg.append('path')
      .datum([data[0],data[1]])
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', 1.5)
      .attr('d', line);

    if (toolMode === "Add-Mode") {
      svg.on('click', (e) => {
        const bounds = e.target.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const newDataPoint = [Math.floor(xScale.invert(x)), Math.floor(yScale.invert(y))];
        setData([...data, newDataPoint]);
        console.log(data);
      })
    }
    else{

        let one;
        let two;

        svg.on('click', (e) => {
            console.log("click event");
        })

        d3.selectAll("circle")
        .on("click", function() {
            d3.select(this)
            .attr("fill", "red");
            if(!one){
                one = d3.select(this).data()[0];
            }
            else if(!two){
                two = d3.select(this).data()[0];
            }
            else{
                one = d3.select(this).data()[0];
                two = null;
            }
            if (one && two){
                svg.append('path')
                .datum([one,two])
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-width', 1.5)
                .attr('d', line);
            }
        });

    }

    // console.log("Tool Mode is:", toolMode);
  }, [data, toolMode]);


  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );

}
