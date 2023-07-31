import Balance from "./components/Balance.jsx";
import "./App.css";
import Expense from "./components/Expense.jsx";
import Transition from "./components/Transection.jsx";
import Input from "./components/Input.jsx";
import { GlobalProvider } from "./context/globalContext.jsx";
import Nav from "./components/Nav.jsx";
import { motion } from "framer-motion";
function App() {
  return (
    <GlobalProvider>
      <Nav />
      <motion.div
        className="container"
        whileInView={{ opacity: [0, 0.2, 0.4, 0.6, 1] }}
        transition={{ duration: 1 }}
      >
        <Balance />
        <Expense />
        <Transition />
        <Input />
      </motion.div>
    </GlobalProvider>
  );
}

export default App;
