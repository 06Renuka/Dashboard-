import React, { useState, useEffect } from "react";
import axios from 'axios';


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
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  const [tableData, setTableData] = useState([])


  useEffect(() => {
    fetchReportOptions();
    fetchtable();
  }, []);

  const fetchReportOptions = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/report");
      console.log(response)
      setOptions(response.data);
    } catch (error) {
      console.error('Error fetching report options:', error);
    }
  };

  const fetchtable = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/vehicledata");
      console.log(response)
      if (Array.isArray(response.data)) {
        setTableData(response.data);
        
      } else {
        console.error('Data received from the API is not in the expected format:', response.data);
      }

     // setTableData(response);
//
     // setShowTable(true);

    } catch (error) {
      console.error('Error fetching report options:', error);
    }
  };



  const handleSelectionChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);

    
  };

  const handleTimeFrameChange = (event) => {
    const selectedValue = event.target.value;
    
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



          <select className="design" onChange={handleSelectionChange}>
            <option selected style={{ color: "white" }}>
              Report
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
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
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.licensePlate}</td>
                    <td>{item.make}</td>
                    <td>{item.vin}</td>
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
