
import React from 'react';
import VehicleHealth from './VehicleHealth';
import FuelEfficiency from './FuelEfficiency';
import MaintenanceSchedule from './MaintenanceSchedule';
import { Car, BarChart3 } from 'lucide-react';

const Dashboard = () => {
  // Mock data
  const vehicleInfo = {
    model: "Tesla Model 3",
    year: 2022,
    mileage: 15420
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-volt-blue/10 p-3 rounded-xl">
            <Car size={28} className="text-volt-blue" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{vehicleInfo.model}</h1>
            <p className="text-gray-500">{vehicleInfo.year} • {vehicleInfo.mileage.toLocaleString()} miles</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-100 shadow-sm">
          <BarChart3 size={18} className="text-volt-blue" />
          <span className="font-medium">Today's Drive: 28.4 miles</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VehicleHealth />
        <FuelEfficiency />
      </div>
      
      <div className="mt-6">
        <MaintenanceSchedule />
      </div>
    </div>
  );
};

export default Dashboard;
