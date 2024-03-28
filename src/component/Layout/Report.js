import React, { useState } from "react";
//import axios from 'axios';
//import * as React from 'react';
import data from "./data.json";
import "./Report.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

const Report = () => {
  const [showTable, setShowTable] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [documentGenerated, setDocumentGenerated] = useState(false);
  //const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectionChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);

    // You can optionally send the selected option to the backend for validation here
  };

  const handleTimeFrameChange = (event) => {
    const selectedValue = event.target.value;
    // You can perform any logic based on the selected value here
    // For example, show the DateRangePicker when "default" is selected
    setShowDatePicker(selectedValue === "default");
  };

  const handleGenerateDocument = () => {
    setShowTable(true);
    setDocumentGenerated(true);
  };
  const handleDownloadCSV = () => {
    // Logic to download CSV
  };

  const handleDownloadPDF = () => {
    // Logic to download PDF
  };
  const [value, setValue] = React.useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);

  const [timeFrame, setTimeFrame] = useState("1");

  const handleDateRangeChange = (event) => {
    const selectedRange = event.target.value;
    // Logic to set value based on selected range
    // Example: setValue(newValue);
  };
  return (
    <div>
      <div>
        <div
          style={{
            height: "40px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            border: "solid white 1px",
            justifyContent: "space-around",
            backgroundColor: "black",
            color: "white",
          }}
        >
          {/*<select className="form-select shadow-none fw-semibold rounded-0 design" onChange={handleSelectionChange} value={selectedOption}>
            <option selected style={{ color: "white" }}>Report</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>*/}


          <select className=" design ">
            <option selected style={{ color: "white" }}>
              Report
            </option>
            <option value="1">
              Total miles Driven
            </option>
            <option value="2">Energy Consumption</option>
            <option value="3">Cost Analysis</option>
          </select>
          <select className=" design" onChange={handleDateRangeChange}>
            <option value="default">Frequency</option>
            <option value="last7days">Daily</option>
            <option value="last30days">Weekly</option>
            <option value="thisMonth">monthly</option>
          </select>
          

          <select
            className="form-select shadow-none fw-semibold rounded-0 design"
            onChange={handleTimeFrameChange}
          >
            <option value="default">Time Frame</option>
            {/* Add other options here */}

            {showDatePicker && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateRangePicker", "DateRangePicker"]}
                >
                  <DemoItem label="From" component="DateRangePicker">
                    <DateRangePicker
                      defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            )}
          </select>

          <div>
            {!documentGenerated && ( // Render "Generate Document" button if document is not generated
              <div
                className="designbutton"
                style={{
                  border: "1px solid #ddd",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  margin: "10px",
                  textAlign: "center",
                }}
                onClick={handleGenerateDocument}
              >
                Generate Report
              </div>
            )}
            {documentGenerated && ( // Render download buttons if document is generated
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div
                  className="designbutton"
                  style={{
                    border: "1px solid #ddd",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                  onClick={handleDownloadCSV}
                >
                  Download CSV
                </div>
                <div
                  className="designbutton"
                  style={{
                    border: "1px solid #ddd",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                  onClick={handleDownloadPDF}
                >
                  Download PDF
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="table-container">
        {showTable && (
          <div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>License Plate</th>
                  <th>Make</th>
                  <th>VIN</th>
                  <th>Model</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Miles Driven</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.licensePlate}</td>
                    <td>{item.make}</td>
                    <td>{item.VIN}</td>
                    <td>{item.model}</td>
                    <td>{item.type}</td>
                    <td>{item.date}</td>
                    <td>{item.milesDriven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
