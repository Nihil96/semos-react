
const Greeting = ({name, greetAlert}) => {

    return (
        <>
            <h1>Hello {name}</h1>
            <button onClick={() => greetAlert(name)}>Greet!</button>
        </>
    )
}

export default Greeting