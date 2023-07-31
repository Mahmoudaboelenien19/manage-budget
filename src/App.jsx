import Balance from "./components/Balance.jsx";
import "./App.css";
import Expense from "./components/Expense.jsx";
import Transition from "./components/Transection.jsx";
import Input from "./components/Input.jsx";
import { GlobalProvider } from "./context/globalContext.jsx";
import Nav from "./components/Nav.jsx";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./components/Loading.jsx";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <GlobalProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <motion.div
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.2, 0.6, 1] }}
            transition={{ duration: 0.3 }}
          >
            <Balance />
            <Expense />
            <Transition />
            <Input />
          </motion.div>
        </>
      )}
    </GlobalProvider>
  );
}

export default App;
