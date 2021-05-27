import { useState } from 'react'

const AddEmployee = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [ocupation,setOcupation] = useState('')
    const [day,setDay] = useState('')
    const [star,setStar] = useState(false)

    const onSubmit =(e) => {
        e.preventDefault()

        if(!text){
            alert('Please fill in the blanks to add an employee')
            return
        }
        
        onAdd({ text, ocupation, day, star })
        setText('')
        setOcupation('')
        setDay('')
        setStar(false)
    }

    return (
        <form className = 'add-form' onSubmit={onSubmit} >
            <div className = 'form-control'>
            <label>Employee's name</label>
            <input type = 'text' 
            placeholder = "Name & Lastname"
            value = {text} 
            onChange = {(e) => setText(e.target.value)} />           
            </div>

            <div className = 'form-control'>
            <label>Ocupation</label>
            <input type = 'text' 
            placeholder = 'Ocupation'
            value = {ocupation} 
            onChange = {(e) => setOcupation(e.target.value)}/>
            </div>

            <div className = 'form-control'>
            <label>Employment day</label>
            <input type = 'text' 
            placeholder = 'Day & time'
            value = {day} 
            onChange = {(e) => setDay(e.target.value)}/>
            </div>

            <div className = 'form-control form-control-check'>
            <label>Add star </label>
            <input 
            type = 'checkbox' className = 'checkboxStar' 
            checked={star} 
            value = {star} 
            onChange = {(e) => setStar(e.currentTarget.checked)}/>
            </div>

            <input type = 'submit' value = 'Add employee on the list' className = 'btn btn-block'/>
        </form>       
    )
}

export default AddEmployee
