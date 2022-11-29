import React, { useState } from 'react';
import "../App.css";

export default function GardenItem(props) {


    function handleClickAdd() {
        props.setCart(addToCart(props.cart, props.name))
        props.setTotal(addToTotal(props.total, props.price))
    };

    function handleClickRemove() {
        props.setTotal(removeFromTotal(props.cart, props.total, props.price, props.name))
        props.setCart(removeFromCart(props.cart, props.name))

    };

    function addToCart(cart, name) {

        if (cart.hasOwnProperty(name)) {
            cart[name] += 1
        }
        else {
            cart[name] = 1
        }
        return cart
    };

    function removeFromCart(cart, name) {
        if (cart[name] > 1) {
            cart[name] -= 1
        }
        else if (cart[name] == 1) {
            delete cart[name]
        }
        return cart
    };

    function addToTotal(total, price) {
        return total += price
    };

    function removeFromTotal(cart, total, price, name) {
        if (cart.hasOwnProperty(name)) {
            total -= price
        }
        else {
            total = total
        }
        return total

    };

    return <div class="Item">
        <h1>{props.name}</h1>
        <img src={props.image}></img>
        <p>{props.description}</p>
        <p>{props.type}</p>
        <h2>${props.price}</h2>
        <button onClick={handleClickAdd}>Add
        </button>
        <button onClick={handleClickRemove}>Remove
        </button>
    </div>


}



