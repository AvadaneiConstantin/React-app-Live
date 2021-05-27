import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title, onAdd,  showAdd }) => {
    return (
        
       <header className =  "header">
           
        <h1>{title}</h1>

        <Button color= {showAdd ? '#001a75': 'rgb(53, 145, 173)'}
        text={showAdd ? "Close form" : "Add employee"}
        // onAppear = {() => setShowDeleteEmployee(!showDeleteEmployee)} 
        onClick={() => {
            onAdd();
            // onAppear();
        }}/>

        </header> 
   )
}

Header.defaultProps = {
    title: "Employees",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header