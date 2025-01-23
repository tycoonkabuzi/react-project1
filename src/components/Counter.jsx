import "../Counter.css";
const Counter = ({ counterValue, changedValue }) => {
  const changeValue = () => {
    changedValue(Math.floor(Math.random() * 100));
  };
  return (
    <div className="counter">
      <p>Counter:{counterValue}</p>
      <button onClick={changeValue}>Add</button>
    </div>
  );
};
export default Counter;
