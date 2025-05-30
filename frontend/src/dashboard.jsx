import React, { useState } from 'react';
import './App.css';
import { useNavigate } from "react-router-dom";
import { 
  FileText, 
  BarChart3, 
  ClipboardList, 
  PersonStandingIcon,
  Bell,
  User,
  ChevronDown,
  LogOut,
  Settings
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notificationCount] = useState(3); // Mock notification count
  const userName = "Alex Morgan"; // Mock user name
  const companyLogo = "CompanyLogo"; // Replace with your logo component or text

  const apps = [
    // ... your existing apps array ...
    {
      title: "Issue Tracker",
      icon: <ClipboardList className="card-icon" />,
      description: "Manage your issues and tasks",
      stats: "23 new Issues",
      path: "*",
    },
    {
      title: "HRMS Tools",
      icon: <PersonStandingIcon className="card-icon" />,
      description: "Tools for HR and employee management",
      stats: "3 events today",
      path: "*",
    },
    {
      title: "Documents",
      icon: <FileText className="card-icon" />,
      description: "Access and edit your documents",
      stats: "5 recent files",
      path: "*",
    },
    {
      title: "Analytics",
      icon: <BarChart3 className="card-icon" />,
      description: "View insights and reports",
      stats: "Updated 2h ago",
      path: "*",
    },
  ];

  return (
    <div className="dashboard-wrapper">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="brand-section">
          <div className="company-logo">{companyLogo}</div>
          <div className="welcome-message">Welcome back, {userName}!</div>
        </div>
        
        <div className="user-controls">
          <div className="notification-icon">
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}</span>
            )}
          </div>
          
          <div 
            className="profile-dropdown" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="avatar">
              <User size={20} />
            </div>
            <span className="username">{userName}</span>
            <ChevronDown size={16} className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <User size={16} />
                  <span>My Profile</span>
                </div>
                <div className="dropdown-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item">
                  <LogOut size={16} />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="dashboard-container">
        <div className="grid-container">
          {apps.map((app, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(app.path)}
            >
              <div className="card-header">
                <div className="card-icon-container">{app.icon}</div>
                <span className="card-stats">{app.stats}</span>
              </div>
              <h3 className="card-title">{app.title}</h3>
              <p className="card-description">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;