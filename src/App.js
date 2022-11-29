import './index.css';
import { useState } from "react";
import gardenData from "./Assets/rose-data.json";
import GardenItem from "./components/GardenItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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

  const reset = general => {
    setColor("All")
    setType("All")
    setSort("High to Low")
    setCart({})
    setTotal(0)
  };

  const selectFilterColor = eventKey => {
    setColor(eventKey);
  };

  const selectFilterType = eventKey => {
    setType(eventKey);
  };

  const selectSortType = eventKey => {
    setSort(eventKey);
  };

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
          <div>
            <div class="Container2">
              <h2>Sort</h2>
              <Nav id="sort" variant="pills" defaultActiveKey="High to Low" onSelect={selectSortType}>
                <Nav.Item>
                  <Nav.Link eventKey="High to Low"> High to Low </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Low to High">Low to High</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <h2>Type</h2>
            <Nav id="type" variant="pills" defaultActiveKey="All" onSelect={selectFilterType}>
              <Nav.Item>
                <Nav.Link eventKey="All"> All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Hybrid Tea">Hybrid Tea</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Floribunda">Floribunda</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Climber">Climber</Nav.Link>
              </Nav.Item>
            </Nav>
            <h2>Color</h2>
            <Nav id="color" variant="pills" defaultActiveKey="All" onSelect={selectFilterColor}>
              <Nav.Item>
                <Nav.Link eventKey="All"> All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Pink">Pink</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Yellow">Yellow</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Red">Red</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Multi">Multi</Nav.Link>
              </Nav.Item>
            </Nav>
            <h2>Cart</h2>
            {Object.keys(cart).map((key, index) => <div>{cart[key]}x {key}</div>)}
            <h1>Total: ${(total).toFixed(2)}</h1>
            <div class="Container3">
              <button onClick={reset}>Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default App;
