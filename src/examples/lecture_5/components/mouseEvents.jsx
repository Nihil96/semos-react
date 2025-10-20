function MouseEvents() {
  const handleMouseEnter = () => {
    console.log("Mouse entered the button!");
  };

  const handleMouseLeave = () => console.log("Mouse left the button!");

  return (
    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover Over Me
    </button>
  );
}

export default MouseEvents;
