import { useContext } from "react";
import "./App.css";
import { CalcultorForm } from "./calculator-form/CalculatorForm";
import { BackgroundContext } from "./context/BackgroundContext";
import { Header } from "./header/Header";

function App() {
  const { theme } = useContext(BackgroundContext);
  return (
    <div
      style={{
        backgroundColor: theme ? "white" : "black",
        height: "100vh",
      }}
    >
      <Header />
      <CalcultorForm />
    </div>
  );
}

export default App;
