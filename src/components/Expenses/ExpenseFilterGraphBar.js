import "./ExpenseFilterGraphBar.css";

function ExpenseFilterGraphBar(props) {
  let barHeight = (props.dataSpentMoney / props.maxPrice) * 150;
  if (barHeight > 0 && barHeight < 10) barHeight = 5;

  barHeight = Math.round(barHeight);

  return (
    <>
      <div className="graph-month-combo">
        <div className="graph" title={`Rs. ${props.dataSpentMoney}`}>
          <div
            className="graph-color"
            style={{ height: `${barHeight}px`, maxHeight: "150px" }}
          />
        </div>
        <div className="month">{props.dataMonth}</div>
      </div>
    </>
  );
}

export default ExpenseFilterGraphBar;
