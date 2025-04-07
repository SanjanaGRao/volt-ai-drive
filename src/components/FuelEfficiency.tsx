
import React from 'react';
import { Fuel, TrendingUp, Calendar } from 'lucide-react';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const FuelEfficiency = () => {
  // Mock data
  const currentMPG = 32.5;
  const averageMPG = 30.8;
  const fuelLevel = 68;
  const estimatedRange = 320;
  
  const fuelData = [
    { day: "Mon", mpg: 28.2 },
    { day: "Tue", mpg: 29.6 },
    { day: "Wed", mpg: 34.1 },
    { day: "Thu", mpg: 31.5 },
    { day: "Fri", mpg: 33.2 },
    { day: "Sat", mpg: 35.8 },
    { day: "Sun", mpg: 32.5 },
  ];
  
  return (
    <div className="volt-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Fuel Efficiency</h2>
        <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-volt-blue rounded-full text-xs font-medium">
          <TrendingUp size={14} />
          <span>+5.5% this week</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 p-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Fuel size={24} className="text-volt-blue" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Current MPG</div>
              <div className="font-semibold text-xl">{currentMPG}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <TrendingUp size={24} className="text-volt-blue" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Average MPG</div>
              <div className="font-semibold text-xl">{averageMPG}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-2">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Calendar size={24} className="text-volt-blue" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Estimated Range</div>
              <div className="font-semibold text-xl">{estimatedRange} miles</div>
            </div>
          </div>
        </div>
        
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={fuelData}
              margin={{
                top: 5,
                right: 5,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis 
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{fontSize: 12}}
                dy={10}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{fontSize: 12}}
                dx={-10}
                domain={[25, 40]}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-white p-2 border border-gray-200 shadow-md rounded-lg">
                        <p className="text-sm font-medium">
                          {payload[0].value} mpg
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <defs>
                <linearGradient id="colorMpg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0066FF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0066FF" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="mpg"
                stroke="#0066FF"
                strokeWidth={2}
                fill="url(#colorMpg)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FuelEfficiency;
