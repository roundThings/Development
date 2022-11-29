import React, { useState } from 'react';
import "../App.css";
import Nav from 'react-bootstrap/Nav';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Agra(props) {

    const reset = general => {
        props.setCart({})
        props.setTotal(0)
        props.setType("All")
        props.setColor("All")
    };

    const selectFilterColor = eventKey => {
        props.setColor(eventKey);
    };

    const selectFilterType = eventKey => {
        props.setType(eventKey);
    };

    const selectSortType = eventKey => {
        props.setSort(eventKey);
    };

    return <div>
        <div>

            <div class="Container2">
                <h2>Sort</h2>
                <Nav variant="pills" defaultActiveKey="High to Low" onSelect={selectSortType} activeKey={props.sort}>
                    <Nav.Item>
                        <Nav.Link eventKey="High to Low"> High to Low </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="Low to High"> Low to High</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div class="Container2">
                <h2>Type</h2>
                <Nav variant="pills" defaultActiveKey="All" onSelect={selectFilterType} activeKey={props.type}>
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
            </div>
            <div class="Container2">
                <h2>Color</h2>
                <Nav variant="pills" defaultActiveKey="All" onSelect={selectFilterColor} activeKey={props.color}>
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
            </div>
            <div class="Container2">
                <h2>Cart</h2>
                {Object.keys(props.cart).map((key, index) => <div>{props.cart[key]}x {key}</div>)}
                <   h1>Total: ${(props.total).toFixed(2)}</h1>
                <div class="Container3">
                    <button onClick={reset}>Reset
                    </button>
                </div>
            </div>
        </div>

    </div>

}