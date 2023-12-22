import { useState, useEffect } from 'react';
import './FormComponent.css';
import { v4 as uuidv4 } from 'uuid';


const FormComponent = (props) => {
    console.log("Render FormComponent")
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)



    const inputTitle = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)

    }

    const inputAmount = (event) => {
        console.log(event.target.value)
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault()
        console.log("Recoded Successfully")
        const itemData = {
            id: uuidv4(),
            title: title,
            amount: Number(amount),
        }
        console.log(itemData);
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        // if (checkData) {
        //     setFormValid(true)
        // }
        setFormValid(checkData)
        console.log("Call UseEffect")
    }, [title, amount])


    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Title</label>
                    <input type="text" placeholder="Please enter a title" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>amount</label>
                    <input type="number" placeholder="+income / -outcome" onChange={inputAmount} value={amount} />
                </div>
                <div>
                    <button type="submit" className='btn' disabled={!formValid}>Add Data</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent