import { useState } from "react";
import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Bar from "./component/Bar";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
