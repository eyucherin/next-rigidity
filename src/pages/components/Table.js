import React, {useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';


export const Table = () => {
  const [data, setData] = useState([]);
  const svgRef = useRef();

  useEffect(() =>{
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

    svg.on('click', (e) => {
      const bounds = e.target.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      const newDataPoint = [xScale.invert(x), yScale.invert(y)];
      setData([...data, newDataPoint]);
      console.log(newDataPoint);
    })
  })


  return (
    <svg ref = {svgRef}/>
  )

  
}
