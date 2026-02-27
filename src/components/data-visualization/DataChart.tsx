"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

interface DataPoint {
  category: string;
  value: number;
}

const sampleData: DataPoint[] = [
  { category: "Data Processing", value: 85 },
  { category: "ETL Pipelines", value: 92 },
  { category: "Data Warehousing", value: 78 },
  { category: "Big Data", value: 80 },
  { category: "SQL", value: 95 },
  { category: "Python", value: 88 },
  { category: "Data Modeling", value: 75 },
];

const BAR_COLOR = "#3182ce";

export default function DataChart() {
  return (
    <div className="w-full overflow-x-auto flex justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={sampleData}
          margin={{ top: 30, right: 30, bottom: 70, left: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
          <XAxis
            dataKey="category"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: number) => [`${value}%`, "Proficiency"]}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={800}>
            {sampleData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={BAR_COLOR} />
            ))}
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value: number) => `${value}%`}
              style={{ fontSize: 12, fontWeight: "bold", fill: "#2d3748" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
