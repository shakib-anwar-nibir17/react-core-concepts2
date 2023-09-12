import "./App.css";
import Counter from "./Counter";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const addToFive = (num) => alert(num + 5);
  return (
    <>
      <h3>React Core Concepts Part 2</h3>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={() => {
          alert("click me 2 clicked");
        }}
      >
        Click Me 2
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
