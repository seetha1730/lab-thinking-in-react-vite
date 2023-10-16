import "./App.css";

import {useState} from "react"
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App">
      <h1>React | Thinking in React</h1>

      <ProductsPage/>
    </div>
  );
}

export default App;
