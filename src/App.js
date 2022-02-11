import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="calculator">
        <div className="Heading">
          <h2 style={{ marginTop: "0px", marginBottom: "0px" }}>
            ROI Calculator
          </h2>
        </div>
        <div className="part-2">
          {/* <div className="part-2-left"> */}
          <p>
            <span>🎂</span>CAKE
          </p>
          {/* <div className="content"> */}
          <label className="switch" style={{ marginLeft: "10px" }}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          {/* </div> */}
          <p style={{ marginLeft: "10px" }}>USD</p>
          {/* </div> */}
        </div>
        <div className="part-3">
          <input type="text" className="part-3-text" placeholder="0.000 USD" />
          <p className="text-cake">~CAKE 0.000</p>
        </div>
        <div className="part-4">
          <button className="part-4-btn">$1000</button>
          <button className="part-4-btn">$100</button>
        </div>
        <div className="part-5">
          <h4>Timeframe</h4>
          <div className="button-overall">
            <button className="button-design">1 Day</button>
            <button className="button-design">7 Days</button>
            <button className="button-design">30 Days</button>
            <button className="button-design">1 Year</button>
            <button className="button-design">5 Years</button>
          </div>
        </div>
        <div className="part-6">
          <div className="part-6-switch">
            <h3>Enable Accelerated APY</h3>
            <label className="switch" style={{ marginLeft: "10px" }}>
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          <h4 style={{ marginTop: "0px" }}>select Tier</h4>
          <div className="button-overall">
            <button className="button-design">Tire 1</button>
            <button className="button-design">Tire 2</button>
            <button className="button-design">Tire 3</button>
            <button className="button-design">Tire 4</button>
            <button className="button-design">Tire 5</button>
          </div>
        </div>
        <div className="part-7">
          <h4 className="text-cake" style={{ marginBottom: "10px" }}>
            ROI at Current Rates
          </h4>
          <input type="text" className="part-3-text" placeholder="0.00 USD" />
          <div>
            <p className="text-cake">~0.000 CAKE + 0.000000 DON</p>
          </div>
        </div>
        <div className="part-8">
          <h5
            style={{
              textAlign: "center",
              marginBottom: "0px",
              paddingBottom: "0px",
            }}
          >
            Hide Details <span>^</span>
          </h5>
          <div
            className=""
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h5 style={{ marginBottom: "0px", paddingBottom: "0px" }}>APY</h5>
            <h5
              style={{
                color: "#F1C442",
                marginBottom: "0px",
                paddingBottom: "0px",
              }}
            >
              9.0%
            </h5>
          </div>
        </div>
        <ul
          style={{
            paddingLeft: " 16px",
            color: "darkgrey",
            fontWeight: "700",
            fontFamily: "sans-serif",
          }}
        >
          <li> Calculate based on current rates</li>
          <li>
            {" "}
            All figures are estimates provided for your convenience only, and by
            no means represent guaranteed returns.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
