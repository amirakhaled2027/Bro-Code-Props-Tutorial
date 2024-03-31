import PropTypes from 'prop-types'

//In order for this component to accept props. this function needs a props parameter
//props are gonna be a javascript object
function Students(props) {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>

        {/* true won't be displayed; so it will be better to use a ternary operator */}
        <p>Is she a student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

//PropType : a mechanism that ensures that the passed value is of the 
//           correct datatype
//           age: PropTypes.number
//we have to import the propType. 
//it's found within the node folder
//IMPORTANT: if the type is wrong, it's not gonna appear on the website(local host)
//instead, it's gonna appear on the console (NOT in the terminal)
//it won't stop the application from running, just issue warning

Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Students