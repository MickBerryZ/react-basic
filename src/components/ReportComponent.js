import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css'

const ReportComponent = () => {
    const { income, outcome } = useContext(DataContext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <div>
            <h1 >Total: ฿ {formatNumber(income - outcome)} </h1>
            <div className="report-container">
                <div>
                    <h4>Income:</h4>
                    <p className="report totalincome">฿ {formatNumber(income)}</p>
                </div>
                <div>
                    <h4>Outcome:</h4>
                    <p className="report totaloutcome">฿ {formatNumber(outcome)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent;