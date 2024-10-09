import Counter from "./counter"

function ParentCounter() {
  return (
    <div>
      <h2>Parent Counter Component</h2>
      <span>Not using the count state</span>
      <Counter />
    </div>
  )
}

export default ParentCounter
