import "./App.css";
import MainHeader from "./component/Layout/MainHeader";
import MainsideBar from "./component/Layout/MainsideBar";
import Report from "./component/Layout/Report";


function App() {
  return (
    <div className="App">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '15% 85%' }}>
        <div>
          <MainsideBar />
        </div>

        <div className="" style={{backgroundColor:'black',color:'white'}}>
          <MainHeader />
          <Report />
        </div>
      </div>
    </div>
  );
}

export default App;
