"use client";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
export default function StatsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    setIsMounted(true);
    const savedHistory = JSON.parse(localStorage.getItem("timeline") || "[]");
    const counts = savedHistory.reduce((acc, item) => {
      const type = item.type; 
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
    const formattedData = [
      { name: 'Calls', value: counts['Call'] || 0 },
      { name: 'Texts', value: counts['Text'] || 0 },
      { name: 'Videos', value: counts['Video'] || 0 },
    ];
    setChartData(formattedData);
  }, []);
  const COLORS = ['#244D3F', '#10b981', '#a855f7'];
  if (!isMounted) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }
  const totalInteractions = chartData.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className="container mx-auto p-10 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Friendship Analytics</h1>
        <p className="text-gray-500">Visualizing your connection habits</p>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        {totalInteractions === 0 ? (
          <div className="h-64 flex flex-col items-center justify-center text-gray-400">
            <p className="text-lg">No data available yet.</p>
            <p className="text-sm">Log some interactions in the Timeline to see your stats!</p>
          </div>
        ) : (
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} 
                  innerRadius={80} 
                  outerRadius={120} 
                  paddingAngle={8} 
                  dataKey="value"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {chartData.map((item, index) => (
          <div key={item.name} className="bg-white p-6 rounded-2xl border border-gray-50 text-center shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: COLORS[index] }}>
              {item.name}
            </p>
            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}