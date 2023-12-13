import "./App.css";
import { Header } from "../components/Header/Header";
import { ThemeSwitcher } from "../components/ThemeSwitcher/ThemeSwitcher";
import { CalculatorGUI } from "../components/CalculatorGUI/CalculatorGUI";


function App() {
  return (
    <div className="calculator dark-mode">
      <Header />
      <ThemeSwitcher />
      <CalculatorGUI />
      <footer></footer>
    </div>
  );
}

export default App;
