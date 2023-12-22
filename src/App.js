import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
// import { useEffect, useState, useReducer } from "react";
import { useEffect, useState } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: '1.5rem' }
  // const initData = [
  //   { id: 1, title: "Salary", amount: 200000 },
  //   { id: 2, title: "Healthcare", amount: -5000 },
  //   { id: 3, title: "WorkTravel", amount: -2000 },

  // ]
  const initData = []
  const [items, setItems] = useState(initData)
  // const [items, setItems] = useState([])

  const [reportIncome, setReportIncome] = useState(0)
  const [reportOutcome, setReportOutcome] = useState(0)

  const onAddNewItem = (newItem) => {
    // console.log("Data send from Form Component = ", newItem)
    setItems((previousItem) => {
      return [newItem, ...previousItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    console.log(amounts)

    const income = amounts
      .filter(element => element > 0)
      .reduce((total, element) => total += element, 0)
    console.log("Income = ", income)

    const outcome = (amounts
      .filter(element => element < 0)
      .reduce((total, element) => total += element, 0)) * -1
    console.log("Outcome = ", outcome)

    setReportIncome(income)
    setReportOutcome(outcome)
  }, [items, reportIncome, reportOutcome])


  // //reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       // return state + 1
  //       // return state + action.payload
  //       return setShowReport(true)
  //     case "HIDE":
  //       // return state - 1
  //       // return state - action.payload
  //       return setShowReport(false)

  //   }
  // }

  // const [result, dispatch] = useReducer(reducer, showReport)

  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        outcome: reportOutcome
      }
    } >
      <div className="containter">
        <h1 style={design}>Accounting Program</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Accounting Data</Link>
              </li>
              <li>
                <Link to="/insert">Save Data</Link>
              </li>
            </ul>
            {/* <Switch> */}
            {/* <Route path="/" exact>
              <ReportComponent />
            </Route>

            <Route path="/insert">
              <FormComponent onAddItem={onAddNewItem} />
              <Transaction items={items} />
            </Route> */}

            <Routes>
              <Route path="/" element={<ReportComponent />} />
              <Route path="/insert" element={<><FormComponent onAddItem={onAddNewItem} /><Transaction items={items} /></>} />
            </Routes>
            {/* </Switch> */}
          </div>
        </Router>
        {/* {showReport && <ReportComponent />} */}
        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>show</button>
        <button onClick={() => dispatch({ type: "SHOW" })}>show</button>
        <button onClick={() => dispatch({ type: "DELETE", payload: 5 })}>hide</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>hide</button> */}
      </div>
    </DataContext.Provider >
  )
}

export default App;
