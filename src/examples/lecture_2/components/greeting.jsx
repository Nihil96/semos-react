import PropTypes from "prop-types"

function Greeting({name, age}){
    return(
        <div>
            <h3>Hello {name}</h3>
            <p>Age: {age}</p>
        </div>
    )
}

// This will not work because we are using react v.19, it's deprecated in this version
Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Greeting