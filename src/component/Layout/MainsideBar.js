

import { useState } from "react";

import "./sidebar.css";

import { HiHome, HiCalendar,HiChartBar,HiCog,  HiTruck, HiOutlineUsers,HiOutlineCurrencyDollar } from "react-icons/hi";

function MainsideBar() {
    const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };
    return (
      <div aria-label="Sidebar with content separator example" className="sidebar">
            <ul className="sidebar-items">
                <li className="sidebar-header">
                   <h2>  Eletrify</h2>
                </li>
                <li  className={`sidebar-item ${activeItem === 'Overview' ? 'clicked' : ''}`} onClick={() => handleItemClick('Overview')}>
                    <a href="#">
                        <HiHome className="sidebar-icon"/>
                        Overview
                    </a>
                </li>
                <li  className={`sidebar-item ${activeItem === ' Vehicles' ? 'clicked' : ''}`} onClick={() => handleItemClick('Vehicles')}>
                    <a href="#">
                        <HiTruck className="sidebar-icon"/>
                        Vehicles
                    </a>
                </li>
                <li  className={`sidebar-item ${activeItem === 'Charges' ? 'clicked' : ''}`} onClick={() => handleItemClick('Charges')}>
                    <a href="#">
                        <HiOutlineCurrencyDollar className="sidebar-icon"/>
                        Charges
                    </a>
                </li>
                <li  className={`sidebar-item ${activeItem === 'Driver' ? 'clicked' : ''}`} onClick={() => handleItemClick(' Driver')}>
                    <a href="#">
                        <HiOutlineUsers className="sidebar-icon"/>
                        Driver
                    </a>
                </li>
                <li  className={`sidebar-item ${activeItem === 'Schedules' ? 'clicked' : ''}`} onClick={() => handleItemClick('Schedules')}>
                    <a href="#">
                        <HiCalendar className="sidebar-icon"/>
                        Schedules
                    </a>
                </li>
                <li  className={`sidebar-item ${activeItem === 'Report' ? 'clicked' : ''}`} onClick={() => handleItemClick('Report')}>
                    <a href="#">
                        <HiChartBar className="sidebar-icon"/>
                        Report
                    </a>
                </li>
                <li  className={`sidebar-item ${activeItem === ' Admin Panel' ? 'clicked' : ''}`} onClick={() => handleItemClick(' Admin Panel')}>
                    <a href="#">
                        <HiCog className="sidebar-icon"/>
                        Admin Panel
                    </a>
                </li>
            </ul>
        </div>
    );
  }
export default MainsideBar
