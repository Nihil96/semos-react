
import { Component } from 'react'
import './App.css'
import SimpleCounter from './examples/lecture_2/components/simpleCounter'
import UserCard from './examples/lecture_2/components/userCard'
import Greeting from './examples/lecture_2/components/greeting'
import FruitList from './examples/lecture_2/components/fruitList'


class App extends Component {
  constructor(){
    super()

    this.state = {
      showCounter: true
    }
  }

  toggleCounter = () => {
    this.setState({showCounter: !this.state.showCounter})
  }

  render(){
    console.log(this.state, "App State")
    return (
      <div>
        {/* ======= Example 1: Lifecycle methods ======= */}

        {/* <button onClick={this.toggleCounter}>{this.state.showCounter ? 'Hide Component' : 'Show Component'}</button>
        {this.state.showCounter ? <SimpleCounter /> : null} */}

         {/* ======= Example 2: Passing Props ======= */}
         {/* <UserCard 
          img="https://ip.index.hr/remote/bucket.index.hr/b/index/269a7f4b-7b4e-42dc-ab05-fcf876e4c716.png" 
          name="Brad Pit"
          address="Las Vegas"
         /> 
         <UserCard 
         img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Johnny_Depp_%28July_2009%29_2_cropped.jpg/250px-Johnny_Depp_%28July_2009%29_2_cropped.jpg" 
        name="Johnny"
        address="Las Vegas"
         />
         <UserCard img="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg"
          name="Scarlett"
          address="Las Vegas"
         /> */}

          {/* ======= Example 3: PropTypes ======= */}
          {/* <Greeting name={2321} age={29} /> */}

          {/* ======= Example 3: Iterating Over Lists ======= */}
          <FruitList />
      </div>
    )
  }
}

export default App
