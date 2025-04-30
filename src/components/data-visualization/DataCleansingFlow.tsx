'use client';

import React, { useEffect, useRef } from 'react';

interface DataCleansingFlowProps {
  className?: string;
}

const DataCleansingFlow: React.FC<DataCleansingFlowProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ensure canvas is sized correctly
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      canvas.width = parent.clientWidth;
      canvas.height = 400; // Fixed height
      
      // Redraw when resized
      drawDataCleansingFlow(ctx, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize(); // Initial size

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const drawDataCleansingFlow = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set background
    ctx.fillStyle = '#f8fafc'; // Light gray background
    ctx.fillRect(0, 0, width, height);

    // Define colors
    const colors = {
      rawData: '#ef4444',      // Red
      cleaning: '#3b82f6',     // Blue
      analysis: '#8b5cf6',     // Purple
      processed: '#10b981',    // Green
      arrows: '#64748b',       // Slate
      text: '#1e293b',         // Dark slate
      outline: '#cbd5e1',      // Light slate
    };

    // Calculate dimensions
    const padding = 40;
    const boxWidth = (width - padding * 2) / 4;
    const boxHeight = height * 0.4;
    const boxY = (height - boxHeight) / 2;
    const boxSpacing = 20;
    const arrowLength = 30;

    // Draw flow stages
    const stages = [
      { 
        x: padding, 
        title: "Raw Data Sources", 
        color: colors.rawData,
        icon: drawDatabaseIcon,
        details: ["Azure Blob Storage", "Azure SQL DWH", "Multiple Formats", "Quality Issues"]
      },
      { 
        x: padding + boxWidth + boxSpacing, 
        title: "Data Cleansing", 
        color: colors.cleaning,
        icon: drawCleansingIcon,
        details: ["Missing Values", "Outliers Detection", "Normalization", "Standardization"]
      },
      { 
        x: padding + (boxWidth + boxSpacing) * 2, 
        title: "Data Processing", 
        color: colors.analysis,
        icon: drawProcessingIcon,
        details: ["Feature Engineering", "Transformation", "Validation", "Quality Checks"]
      },
      { 
        x: padding + (boxWidth + boxSpacing) * 3, 
        title: "Processed Data", 
        color: colors.processed,
        icon: drawOutputIcon,
        details: ["DBFS Storage", "DataRobot Ready", "Clean Datasets", "ML Optimized"]
      }
    ];

    // Draw data flow with noise particles
    drawDataFlowWithParticles(ctx, stages, boxY, boxHeight, boxWidth, colors);

    // Draw each stage
    stages.forEach((stage, i) => {
      // Draw stage box
      drawStageBox(ctx, stage.x, boxY, boxWidth, boxHeight, stage.color, stage.title, stage.details, colors);
      
      // Draw icon
      stage.icon(ctx, stage.x + boxWidth/2, boxY + boxHeight/4, 30, stage.color);

      // Draw arrow to next stage (except for the last one)
      if (i < stages.length - 1) {
        const startX = stage.x + boxWidth;
        const nextX = stages[i + 1].x;
        const centerY = boxY + boxHeight / 2;
        
        drawArrow(ctx, startX, centerY, nextX, centerY, colors.arrows);
      }
    });

    // Draw title
    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = colors.text;
    ctx.textAlign = 'center';
    ctx.fillText('Reckitt Benckiser Data Cleansing Process - Azure Databricks', width / 2, 25);

    // Draw stats at the bottom
    drawBottomStats(ctx, width, height, boxY + boxHeight + 30);
  };

  const drawStageBox = (
    ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    color: string,
    title: string,
    details: string[],
    colors: Record<string, string>
  ) => {
    // Draw main box with shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    
    // Box background
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 10);
    ctx.fill();
    
    // Border
    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();

    // Title bar
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(x, y, width, 40, [10, 10, 0, 0]);
    ctx.fill();

    // Title text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(title, x + width / 2, y + 25);

    // Details text
    ctx.fillStyle = colors.text;
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    details.forEach((detail, i) => {
      ctx.fillText(`• ${detail}`, x + 15, y + 80 + i * 20);
    });
  };

  const drawArrow = (
    ctx: CanvasRenderingContext2D,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    color: string
  ) => {
    const headLength = 10;
    const headAngle = Math.PI / 6; // 30 degrees
    
    // Calculate arrow length and adjust end points
    const totalLength = toX - fromX;
    const arrowLength = totalLength - 20; // Shorter than the full distance
    
    // Adjusted starting and ending points
    const startX = fromX + 10;
    const endX = startX + arrowLength;

    // Draw arrow line
    ctx.beginPath();
    ctx.moveTo(startX, fromY);
    ctx.lineTo(endX, toY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw arrow head
    ctx.beginPath();
    ctx.moveTo(endX, toY);
    ctx.lineTo(endX - headLength * Math.cos(headAngle), toY - headLength * Math.sin(headAngle));
    ctx.lineTo(endX - headLength * Math.cos(headAngle), toY + headLength * Math.sin(headAngle));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  // Function to draw data flow with animated particles effect
  const drawDataFlowWithParticles = (
    ctx: CanvasRenderingContext2D,
    stages: Array<{ x: number, title: string, color: string }>,
    boxY: number,
    boxHeight: number,
    boxWidth: number,
    colors: Record<string, string>
  ) => {
    // Simulate data points flowing through the pipeline
    const centerY = boxY + boxHeight / 2;
    const normalY = centerY - 5;
    const outlierY = centerY + 5;
    
    // Raw data (more scattered)
    drawDataDots(ctx, stages[0].x + boxWidth * 0.9, normalY - 15, normalY + 15, 7, colors.rawData);
    
    // Partially cleaned data (less scattered)
    drawDataDots(ctx, stages[1].x + boxWidth * 0.9, normalY - 8, normalY + 8, 7, colors.cleaning);
    
    // Processed data (more aligned)
    drawDataDots(ctx, stages[2].x + boxWidth * 0.9, normalY - 4, normalY + 4, 7, colors.analysis);
    
    // Final clean data (perfectly aligned)
    drawDataDots(ctx, stages[3].x + boxWidth * 0.9, normalY, normalY, 7, colors.processed);
  };

  const drawDataDots = (
    ctx: CanvasRenderingContext2D,
    x: number,
    minY: number,
    maxY: number,
    count: number,
    color: string
  ) => {
    for (let i = 0; i < count; i++) {
      const dotX = x + (Math.random() * 10 - 5);
      const dotY = minY + Math.random() * (maxY - minY);
      
      ctx.beginPath();
      ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }
  };

  // Icon drawing functions
  const drawDatabaseIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    const width = size;
    const height = size * 1.2;
    
    // Draw cylinder for database
    ctx.beginPath();
    ctx.ellipse(x, y - height/2 + size*0.2, width/2, size*0.2, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    
    ctx.beginPath();
    ctx.ellipse(x, y + height/2 - size*0.2, width/2, size*0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Side lines
    ctx.beginPath();
    ctx.moveTo(x - width/2, y - height/2 + size*0.2);
    ctx.lineTo(x - width/2, y + height/2 - size*0.2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x + width/2, y - height/2 + size*0.2);
    ctx.lineTo(x + width/2, y + height/2 - size*0.2);
    ctx.stroke();
  };

  const drawCleansingIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    // Draw broom icon
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    // Handle
    ctx.beginPath();
    ctx.moveTo(x + size/3, y - size/2);
    ctx.lineTo(x - size/3, y + size/3);
    ctx.stroke();
    
    // Bristles
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(x - size/3, y + size/3);
      ctx.lineTo(x - size/2 + i*size/10, y + size/2);
      ctx.stroke();
    }
  };

  const drawProcessingIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    // Draw gear icon
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    
    // Outer circle
    ctx.beginPath();
    ctx.arc(x, y, size/2, 0, Math.PI * 2);
    ctx.stroke();
    
    // Inner circle
    ctx.beginPath();
    ctx.arc(x, y, size/4, 0, Math.PI * 2);
    ctx.fill();
    
    // Teeth
    for (let i = 0; i < 8; i++) {
      const angle = i * Math.PI / 4;
      ctx.beginPath();
      ctx.moveTo(x + Math.cos(angle) * size/2, y + Math.sin(angle) * size/2);
      ctx.lineTo(x + Math.cos(angle) * (size/2 + size/6), y + Math.sin(angle) * (size/2 + size/6));
      ctx.stroke();
    }
  };

  const drawOutputIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    // Draw chart icon
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    
    // Frame
    ctx.strokeRect(x - size/2, y - size/2, size, size);
    
    // Bar chart columns
    const barWidth = size/6;
    const gap = size/14;
    let startX = x - size/2 + gap;
    
    // Draw different height bars
    const heights = [size*0.3, size*0.5, size*0.7, size*0.4];
    
    heights.forEach(height => {
      ctx.fillRect(startX, y + size/2 - height, barWidth, height);
      startX += barWidth + gap;
    });
  };

  const drawBottomStats = (ctx: CanvasRenderingContext2D, width: number, height: number, y: number) => {
    // Draw stats boxes at the bottom
    const stats = [
      { value: "75%", label: "Data Processing Time Reduction" },
      { value: "40%", label: "Data Quality Improvement" },
      { value: "35%", label: "Model Accuracy Increase" },
      { value: "90%", label: "Tasks Automated" }
    ];
    
    const boxWidth = width / 4 - 20;
    
    stats.forEach((stat, index) => {
      const x = index * (boxWidth + 20) + 10;
      
      // Box
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.beginPath();
      ctx.roundRect(x, y, boxWidth, 60, 8);
      ctx.fill();
      ctx.shadowColor = 'transparent';
      
      // Border
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Value
      ctx.font = 'bold 24px Arial';
      ctx.fillStyle = '#10b981';
      ctx.textAlign = 'center';
      ctx.fillText(stat.value, x + boxWidth/2, y + 25);
      
      // Label
      ctx.font = '12px Arial';
      ctx.fillStyle = '#64748b';
      ctx.fillText(stat.label, x + boxWidth/2, y + 45);
    });
  };

  return (
    <div className={`w-full ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full"
        style={{ height: '400px' }}
      />
    </div>
  );
};

export default DataCleansingFlow;