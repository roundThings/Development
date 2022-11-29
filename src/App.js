import './index.css';
import { useState } from "react";
import gardenData from "./Assets/rose-data.json";
import GardenItem from "./components/GardenItem";
import Agra from "./components/agra.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Nav from 'react-bootstrap/Nav';

gardenData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("All");
  const [color, setColor] = useState("All");
  const [sort, setSort] = useState("High to Low")

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if (type === "All") {
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }

  const matchesFilterColor = item => {
    // all items should be shown when no filter is selected
    if (color === "All") {
      return true
    } else if (color === item.color) {
      return true
    } else {
      return false
    }
  }


  const sortData = gardenData => {
    if (sort === "High to Low") {
      return gardenData.sort((a, b) => b.price - a.price);
    }
    else if (sort === "Low to High") {
      return gardenData.sort((a, b) => a.price - b.price);
    };
  }

  const firstFilteredData = gardenData.filter(matchesFilterType)
  const filteredData = firstFilteredData.filter(matchesFilterColor)
  const sortedData = sortData(gardenData)

  return (
    <div className="App">
      <h1>The Garden</h1> { }
      <div class="MainGrid">
        <div class="Container1">
          {filteredData.map((item, index) => (
            <GardenItem{...item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
          ))}
        </div>
        <div class="SideBar">
          <Agra cart={cart} setCart={setCart} total={total} setTotal={setTotal} setColor={setColor} setType={setType} setSort={setSort} />
        </div>
      </div>
    </div>

  );
};
export default App;
