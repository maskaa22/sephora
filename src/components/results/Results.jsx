import c from "./Result.module.css";

const Results = ({ answers }) => {
  return (
    <div className="container">
      <h2 className={c.title}>Results:</h2>
      <ul>
        {answers.map((item, i) => (
          <li key={i} className={c.text}>
            {i + 1} - {item.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
