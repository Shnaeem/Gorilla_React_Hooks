import './App.css';
import { useState } from "react";
import Receipt from './components/Reciepts';
import data from './components/Records';


function App() {
  const [receipts, setReceipts] = useState(data);

  return (
    <div className="App">
      {receipts.map((dish, index) => {
        return <Receipt {...dish} key={index}/>
      })}
    </div>
  );
}

export default App;
