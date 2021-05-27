import Employee from "./Employee"

const Employees = ({ employees, onDelete, onToggle }) => {

    return (
        <>
        {employees.map((employee) => ( 
        <Employee key={employee.id} employee = {employee} 
        onDelete={onDelete} onToggle={onToggle}/>))}           
        </>
    )
}

export default Employees