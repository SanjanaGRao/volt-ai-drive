
import React from 'react';
import { Calendar, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';

const MaintenanceSchedule = () => {
  // Mock data
  const maintenanceItems = [
    {
      id: 1,
      title: "Oil Change",
      dueDate: "April 15",
      status: "due-soon",
      daysLeft: 8,
      mileage: "5,000 miles"
    },
    {
      id: 2,
      title: "Tire Rotation",
      dueDate: "April 30",
      status: "upcoming",
      daysLeft: 23,
      mileage: "7,500 miles"
    },
    {
      id: 3,
      title: "Air Filter",
      dueDate: "May 20",
      status: "upcoming",
      daysLeft: 43,
      mileage: "15,000 miles"
    }
  ];
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'due-soon':
        return <AlertTriangle size={16} className="text-amber-500" />;
      case 'upcoming':
        return <Clock size={16} className="text-volt-blue" />;
      case 'completed':
        return <CheckCircle2 size={16} className="text-green-500" />;
      default:
        return <Clock size={16} className="text-gray-400" />;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch(status) {
      case 'due-soon':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'upcoming':
        return 'bg-blue-50 text-volt-blue border-blue-100';
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };
  
  return (
    <div className="volt-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Maintenance Schedule</h2>
        <button className="volt-button text-xs py-1 flex items-center gap-1">
          <Calendar size={14} />
          <span>Schedule Service</span>
        </button>
      </div>
      
      <div className="divide-y divide-gray-100">
        {maintenanceItems.map((item) => (
          <div key={item.id} className="py-3 flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${getStatusClass(item.status)}`}>
              {getStatusIcon(item.status)}
            </div>
            
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-gray-500">Due on {item.dueDate} • {item.mileage}</div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center justify-end gap-1">
                <span className="font-medium text-sm">
                  {item.daysLeft} {item.daysLeft === 1 ? 'day' : 'days'}
                </span>
              </div>
              <div className="text-xs text-gray-500">remaining</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceSchedule;
