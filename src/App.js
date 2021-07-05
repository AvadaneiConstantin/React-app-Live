import { useState } from 'react'
import Header from "./components/Header"
import Employees from "./components/Employees"
import AddEmployee from "./components/AddEmployee"

const App = () => {
  const [showAddEmployee, setShowAddEmployee] = useState(false)
  // const[showDeleteEmployee, setShowDeleteEmployee] = useState(true)
  const [employees, setEmployees] = useState ([
    {
        id: 1,
        text: "Brad Gadson",
        ocupation: "Manager of Sky",
        day: "May 16, '65",
        star: true,
    },
    {
        id: 2,
        text: "Robert Nikel",
        ocupation: "Hard Worker",
        day: "June 5, '73",
        star: true,
    }, 
    {
        id: 3,
        text: "Andra Parelli",
        ocupation: "Design",
        day: "December, 2020",
        star: false,
    },
    {
      id: 4,
      text: "Steven Bauer",
      ocupation: "Customer officer",
      day: "March 22, '89",
      star: true,
  },
])
//toogle Star
const toggleStar = (id) => {
  setEmployees(employees.map((employee) => 
  employee.id === id 
  ? 
  {...employee, star: !employee.star} : employee))
}
// add employee
const addEmployee = (employee) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newEmployee = { id, ...employee }
  setEmployees([...employees, newEmployee])
}

//delete employee
const deleteEmployee = (id)  => {
  setEmployees(employees.filter((employee) => employee.id !== id))
}

  return (
    <div className="container">
      
      {/* navigation band */}
      <div className ='navBand'>
        <div className ='wrapperDivLogo'>
          <div className ='divLogo'></div>
        </div>
        <p className = 'brand-logoSky'>Sky Acceron</p>

        <ul className = 'rightNav'>
          <li>Contact</li>
          <li>Employees</li>
          <li>Home</li>
        </ul>
      </div>


     <Header onAdd = {() => 
     setShowAddEmployee(!showAddEmployee)}    
     showAdd={showAddEmployee}
     />
     {showAddEmployee && <AddEmployee onAdd={addEmployee}/>}

     {employees.length > 0 ? (
     <Employees employees={employees} 
     onDelete={deleteEmployee} 
     onToggle = {toggleStar} 
     />
     ) : (
       <p className='firedText'>You, my frend, fired them all !!</p>
       )}
       <p className='footerText'>The company and the names of the employees are purely fictitious.</p>
    </div>
  )
}

export default App
