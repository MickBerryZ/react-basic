import PropTypes from 'prop-types';
import './Item.css'

const Item = (props) => {
    const { title, amount } = props
    const status = amount < 0 ? "Outcome" : "Income"
    const symbol = amount < 0 ? "-" : "+"
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <li className={status}>{title} <span> {symbol}{formatNumber(Math.abs(amount))} </span>
            {/* <DataContext.Consumer>
                {value => <p>{value}</p>}
            </DataContext.Consumer> */}
        </li>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item