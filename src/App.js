import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from "react";
import gardenData from "./Assets/rose-data.json";
import GardenItem from "./components/GardenItem";
import filterSystem from "./components/filterSystem.js";
import CheckboxLabels from './components/filterSystem.js';
import BasicExample from './components/sortSystem';
import 'bootstrap/dist/css/bootstrap.min.css';

gardenData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("All");

  const matchesFilterType = item => {
    if (type === "All") {
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="App">
      <h1>The Garden</h1>
      <div class="MainGrid">
        <div class="Container1">
          {gardenData.map((item, index) => (
            <GardenItem{...item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} setType={setTotal} />
          ))}
        </div>
        <div class="SideBar">
          <div>
            <div class="Container2">
              <h2>Sort</h2>
              {BasicExample()}
            </div>
            <h2>Filter</h2>

            <h2>Cart</h2>
            {Object.keys(cart).map((key, index) => <div>{cart[key]}x {key}</div>)}
            <h1>Total: ${(total).toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
