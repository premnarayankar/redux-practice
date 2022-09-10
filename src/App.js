import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addBy, decrement, increment } from "./store/store";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addBy(5))}>Add by 10</button>
    </div>
  );
}

export default App;
