import { Fragment } from "react"

function FruitList(){
    const fruits = ["Orange", "Mango", "Pear", "Dragon fruit", "Lemon"]

    // One way of doing the same thing
    // let showListOfFruits = fruits.map((fruit, index) => {
    //             return(
    //                 <Fragment key={index}>
    //                     <span>{fruit}</span>
    //                     <br />
    //                 </Fragment>
    //             )
    //         })


    return (
        <>
        {/* This is the same as <Fragment> */}
            <h3>List of my favourite fruits:</h3>
            {fruits.map((fruit, index) => {
                return(
                    <Fragment key={index}>
                        <span>{fruit}</span>
                        <br />
                    </Fragment>
                )
            })}

            {/* {showListOfFruits} */}
        </>
    )
}

export default FruitList