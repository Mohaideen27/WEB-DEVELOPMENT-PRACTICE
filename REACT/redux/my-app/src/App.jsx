
import "./App.css";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./redux/counter/counterSlice.js";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        Currently count is {count}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default App;
