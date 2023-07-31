import Balance from "./components/Balance.jsx";
import "./App.css";
import Expense from "./components/Expense.jsx";
import Transition from "./components/Transition.jsx";
import Input from "./components/Input.jsx";
import { GlobalProvider } from "./context/globalContext.jsx";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Balance />
        <Expense />
        <Transition />
        <Input />
      </div>
    </GlobalProvider>
  );
}

export default App;
