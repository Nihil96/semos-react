
const ChildComponent = ({changeUserInfo}) => {

    return (
        <>
            <h2>Child Component</h2>
            <button onClick={() => changeUserInfo({name: "Petko", age: 25, surname: "Petkovski"})}>Button</button>
        </>
    )
}

export default ChildComponent