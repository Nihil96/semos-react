import Counter from "./counter"

function ParentCounter(){

    return(
        <div>
            <h2>Parent Counter</h2>
            <Counter />
            <Counter />
        </div>
    )
}

export default ParentCounter