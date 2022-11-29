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
  const selectFilterType = eventKey => {
    setType(eventKey);
  };

  const filteredData = gardenData.filter(matchesFilterType)


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
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <h2>Filter</h2>
            <Nav variant="pills" defaultActiveKey="All" onSelect={selectFilterType}>
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
