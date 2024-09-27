import React from "react"

function FruitList() {
  const fruits = ["Apple", "Orange", "Pear", "Lemon", "Mango"]

  // one way of doing the same thing
  //   let showListOfFruits = fruits.map((fruit, index) => {
  //     return (
  //       <React.Fragment key={index}>
  //         <span>{fruit}</span>
  //         <br />
  //       </React.Fragment>
  //     )
  //   })

  return (
    <div>
      {fruits.map((fruit, index) => {
        return (
          <React.Fragment key={index}>
            <span>{fruit}</span>
            <br />
          </React.Fragment>
        )
      })}
      {/* {showListOfFruits} */}
    </div>
  )
}

export default FruitList
