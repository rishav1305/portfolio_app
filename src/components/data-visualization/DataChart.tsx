"use client";

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  category: string;
  value: number;
}

export default function DataChart() {
  const chartRef = useRef<SVGSVGElement>(null);
  
  const sampleData: DataPoint[] = [
    { category: 'Data Processing', value: 85 },
    { category: 'ETL Pipelines', value: 92 },
    { category: 'Data Warehousing', value: 78 },
    { category: 'Big Data', value: 80 },
    { category: 'SQL', value: 95 },
    { category: 'Python', value: 88 },
    { category: 'Data Modeling', value: 75 },
  ];

  useEffect(() => {
    if (!chartRef.current) return;
    
    // Clear any previous chart
    d3.select(chartRef.current).selectAll('*').remove();
    
    const width = 600;
    const height = 400;
    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Create the SVG container
    const svg = d3.select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // X scale
    const x = d3.scaleBand()
      .domain(sampleData.map(d => d.category))
      .range([0, chartWidth])
      .padding(0.3);
    
    // Y scale
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([chartHeight, 0]);
    
    // X axis
    svg.append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end')
      .style('font-size', '12px');
    
    // Y axis
    svg.append('g')
      .call(d3.axisLeft(y))
      .style('font-size', '12px');
    
    // Create color scale
    const color = d3.scaleLinear<string>()
      .domain([0, 100])
      .range(['#4299e1', '#3182ce']);
    
    // Add background grid lines
    svg.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(y)
        .tickSize(-chartWidth)
        .tickFormat(() => '')
      )
      .style('stroke', '#e2e8f0')
      .style('stroke-opacity', '0.5')
      .style('shape-rendering', 'crispEdges');
    
    // Add bars with animation
    svg.selectAll('.bar')
      .data(sampleData)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.category)!)
      .attr('width', x.bandwidth())
      .attr('y', chartHeight)
      .attr('height', 0)
      .attr('fill', d => color(d.value))
      .attr('rx', 4) // Rounded corners
      .transition()
      .duration(800)
      .delay((d, i) => i * 100)
      .attr('y', d => y(d.value))
      .attr('height', d => chartHeight - y(d.value));
    
    // Add labels above bars
    svg.selectAll('.label')
      .data(sampleData)
      .join('text')
      .attr('class', 'label')
      .attr('x', d => x(d.category)! + x.bandwidth() / 2)
      .attr('y', d => y(d.value) - 10)
      .attr('text-anchor', 'middle')
      .text(d => `${d.value}%`)
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .style('fill', '#2d3748')
      .style('opacity', 0)
      .transition()
      .duration(800)
      .delay((d, i) => 300 + i * 100)
      .style('opacity', 1);
    
    // Add title
    svg.append('text')
      .attr('x', chartWidth / 2)
      .attr('y', -10)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Data Engineering Skills');
    
  }, []);
  
  return (
    <div className="w-full overflow-x-auto flex justify-center">
      <svg ref={chartRef} className="max-w-full h-auto"></svg>
    </div>
  );
}