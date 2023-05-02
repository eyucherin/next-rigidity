import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Table = (props) => {
  const [data, setData] = useState([[20,30],[20,60]]);
  const [toolMode, setToolMode] = useState(props.toolMode);
  //everything has to happen ONCE!
  const [count,setCount]  = useState(0);
  const [initialLine, setInitialLine] = useState(true);
  const [linePoint, setLinePoint] = useState([]);
  const [lines, setLines] = useState([]);
  const svgRef = useRef();

  useEffect(() => {
    setToolMode(props.toolMode); 
    setCount(0);
  }, [props.toolMode]);


  useEffect(() => {
  },[props.isNext])

  useEffect(() => {
    const w = 600;
    const h = 600;

    const svg = d3.select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style('overflow','visible')
      .style('margin-top','30px')
      .style('margin-left','50px')
      .attr('stroke-width', 1.5)

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
      .attr('y',h - 280)
      .text('Y')

    let circles = svg.selectAll()
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d,i) => xScale(d[0]))
      .attr('cy', (d,i) => yScale(d[1]))
      .attr('r', (d,i) => 7)
      .attr('fill', 'blue')

    const line = d3.line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]))


    if(initialLine){
      let path1 = svg.append('path')
        .datum([data[0],data[1]])
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', 5)
        .attr('d', line)
        .attr("id", "firstPath");
    }
    if (toolMode === "Add-Mode") {
        svg.on('click', (e) => {
          const bounds = e.target.getBoundingClientRect();
          const x = e.clientX - bounds.left;
          const y = e.clientY - bounds.top;
          const newDataPoint = [Math.floor(xScale.invert(x)), Math.floor(yScale.invert(y))];
          if(count == 0){
            console.log("THE NEW POINT",newDataPoint);
            setData([...data, newDataPoint]);
            props.setIsNext(true);
          }
          else{
            alert("Continue to next step");
          }
          setCount(1);
        })
  }
    else if (toolMode == "Connect-Mode"){

        let one;
        let two;

        svg.on('click', (e) => {
        })

        d3.selectAll("circle")
        .on("click", function() {
            d3.selectAll("circle")
              .attr("fill", "blue");

            if(!props.isNext){
              d3.select(this)
              .attr("fill", "red");
  
              if(one && two){
                one = null;
                two = null;
              }
              if(!one){
                  one = d3.select(this).data()[0];
                  if(one == data[data.length-1]){
                    one = null;
                    two = null;
                    alert("Cannot connect to the last point");
                  }
                  props.setIsNext(false);
              }
              else if(!two){
                  two = d3.select(this).data()[0];
                  if(two == data[data.length-1]){
                    two = null;
                    one = null
                    alert("Cannot connect to the last point");
                  }
                  props.setIsNext(false);
              }
  
              if (one && two){
                  console.log(one,two);

                  let path1 = svg.append('path')
                  .datum([one,data[data.length-1]])
                  .attr('fill', 'none')
                  .attr('stroke', 'black')
                  .attr('stroke-width', 5)
                  .attr('d', line);

                  let path2 = svg.append('path')
                  .datum([data[data.length-1],two])
                  .attr('fill', 'none')
                  .attr('stroke', 'black')
                  .attr('stroke-width', 5)
                  .attr('d', line);

                  let path1HTML = path1.node().outerHTML;
                  let path2HTML = path2.node().outerHTML;

                  setLines([...lines, {
                    "path": path1HTML,
                    "start": one,
                    "end": data[data.length - 1]
                  }, {
                    "path": path2HTML,
                    "start": two,
                    "end": data[data.length - 1]
                  }]);

                  setCount(1);
                  props.setIsNext(true);
                  one = null;
                  two = null;
              }
            }
            else{
              alert("Continue to next step");
            }

        });
    }else if(toolMode == "Connect-Mode-1"){
      let one;

      svg.on('click', (e) => {
      })

      d3.selectAll("circle")
      .on("click", function() {
          d3.selectAll("circle")
            .attr("fill", "blue");

          if(!props.isNext){

            if(one){
              one = null;
            }

            if(!one){
                one = d3.select(this).data()[0];
                if(one == data[data.length-1] || one == linePoint[0] || one == linePoint[1]){
                  one = null;
                  alert("1.Cannot connect to the point that was just added \n 2.Cannot be a point that connected the bar that was just removed");
                }
                props.setIsNext(false);
            }

            if (one){
                let path1 = svg.append('path')
                .datum([one,data[data.length-1]])
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-width', 5)
                .attr('d', line);

                let path2 = svg.append('path')
                .datum([data[data.length-1],linePoint[0]])
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-width', 5)
                .attr('d', line);

                let path3 = svg.append('path')
                .datum([data[data.length-1],linePoint[1]])
                .attr('fill', 'none')
                .attr('stroke', 'black')
                .attr('stroke-width', 5)
                .attr('d', line);

                let path1HTML = path1.node().outerHTML;
                let path2HTML = path2.node().outerHTML;
                let path3HTML = path3.node().outerHTML;

                setLines([...lines, {
                  "path": path1HTML,
                  "start": one,
                  "end": data[data.length - 1]
                }, {
                  "path": path2HTML,
                  "start": linePoint[0],
                  "end": data[data.length - 1]
                },{
                  "path": path3HTML,
                  "start": linePoint[1],
                  "end": data[data.length - 1]
                }
              ]);

                setCount(1);
                props.setIsNext(true);
                one = null;
            }
          }
          else{
            alert("Continue to next step");
          }

      });
    }else if(toolMode == "Remove-Mode"){

        svg.on('click', (e) => {
            d3.selectAll("path")
            .on("click", function() {
              for (let i = 0; i < lines.length; i++) {
                console.log(lines[i].path == this.outerHTML, lines[i].path, this.outerHTML);
                if(lines[i].path == this.outerHTML){
                  setLinePoint([lines[i].start,lines[i].end]);
                  console.log("CIRCLES",circles);
                }
                else{
                  console.log("NOT FOUND!!!!!!!!!!!!!!!");
                }
              }

              if(this.id == "firstPath"){
                setInitialLine(false);
              }
              if(count == 0 && !props.isNext){
                d3.select(this)
                .attr("id","lineToRemove")
                d3.select("svg").select("#lineToRemove")
                .remove();
                setCount(1);
                props.setIsNext(true);
              }
              else{
                alert("Continue to next step");
              }
            })
        })
  }

  return () => {
    d3.select("svg").select("#firstPath")
      .remove();
  }
  }, [data,toolMode,count,props.isNext,lines]);

  useEffect(() =>{
    console.log("THE LINES",lines);
  },[lines])

  return (
    <div className = "cursor-pointer">
      <svg ref={svgRef} />
    </div>
  );

}

export default Table;
