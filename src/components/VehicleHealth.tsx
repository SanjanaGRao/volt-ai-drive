
import React from 'react';
import { 
  Thermometer, 
  Gauge, 
  AlertCircle, 
  CheckCircle,
  Battery 
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const VehicleHealth = () => {
  // Mock data
  const engineTemp = 92;
  const engineLoad = 45;
  const batteryLevel = 78;
  const warnings = [];
  const healthStatus = "Good";
  
  return (
    <div className="volt-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Vehicle Health</h2>
        <div className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
          <CheckCircle size={14} />
          <span>{healthStatus}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-2">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Thermometer size={24} className="text-volt-blue" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">Engine Temperature</div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">{engineTemp}°F</div>
              <Progress value={engineTemp} max={230} className="w-24 h-2" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-2">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Gauge size={24} className="text-volt-blue" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">Engine Load</div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">{engineLoad}%</div>
              <Progress value={engineLoad} max={100} className="w-24 h-2" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-2">
          <div className="bg-blue-50 p-2 rounded-lg">
            <Battery size={24} className="text-volt-blue" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">Battery Level</div>
            <div className="flex items-center justify-between">
              <div className="font-semibold">{batteryLevel}%</div>
              <Progress value={batteryLevel} max={100} className="w-24 h-2" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-2">
          <div className="bg-blue-50 p-2 rounded-lg">
            <AlertCircle size={24} className="text-volt-blue" />
          </div>
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">Alerts</div>
            <div>
              {warnings.length === 0 ? (
                <div className="text-sm text-green-600 font-medium">No warnings</div>
              ) : (
                <div className="text-sm text-volt-alert font-medium">
                  {warnings.length} warnings
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleHealth;
