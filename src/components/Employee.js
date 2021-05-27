// import { FaTimes } from "react-icons/fa"
import { useState } from 'react'

const Employee = ({ employee, onDelete, onToggle }) => {
    const [showDeleteEmployee] = useState(true);

    return (       
        <div className = {`employee ${employee.star ? 'star' : ''}`} 
         onDoubleClick ={() =>onToggle(employee.id)}>

            <h3> {employee.text}
           <div className = 'imageEmployee'></div>
            </h3>

            {showDeleteEmployee && <h5 
            className='deleteEmployee' onClick={() => onDelete(employee.id)}> Delete Employee</h5>}
            
            <h4>{employee.ocupation}</h4>
            <p>{employee.day}</p>
        </div>
    )
}

export default Employee
