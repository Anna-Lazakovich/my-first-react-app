//import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Задача", "Часов в день"],
  ["Работа", 9],
  ["Сон", 7],
  ["Общение", 3],
  ["Образование", 3.5],
  ["Еда", 2],
];

export const options = {
  title: "Мой типичный день",
};

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
