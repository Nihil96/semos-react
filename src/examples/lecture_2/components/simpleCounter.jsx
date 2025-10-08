import { Component } from "react"

class SimpleCounter extends Component {
    constructor(){
        super()

        this.state = {
            counter: 0
        }
    }

    componentDidMount(){
        console.log("Component has mounted")
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        console.log("Component is unmounted")
    }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 2})   
    }

    render(){
        console.log("render method")
        return (
            <div>
                <h1 style={{color: "white"}}>Simple Counter - Class Component</h1>
                <button onClick={this.handleIncrement}>Increment by two</button>
                <h2>{this.state.counter}</h2>
            </div>
        )
    }
}

export default SimpleCounter