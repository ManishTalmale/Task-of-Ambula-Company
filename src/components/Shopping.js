import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Shopping = () => {

    const [cartItems, setCartItems] = useState([]);

    // Adding Item Function
    const addItem = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Remove item Function
    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    // For Total Item 
    const totalItems = cartItems.length;
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <h1>Shopping</h1>
            <div className='d-flex'>
                {cartItems.map((item, index) => (
                    <div className='list' key={index}>
                        <img style={{ marginRight: "5em" }} src={item.image} alt={item.name} />
                        <div style={{ marginRight: "5em" }}>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                        </div>
                        <Button style={{ marginRight: "5em" }} variant="danger" onClick={() => removeItem(index)}>Remove</Button >
                    </div>
                ))}
            </div>

            <h4>Total Items: {totalItems}</h4>
            <h4>Subtotal: ${subtotal}</h4>

            <h2 className='mt-5'>Available Items</h2>
            <div className='row '>
                <div className='col-lg-4'>
                    <img style={{ width: "17em", height: "20em" }} src={require("../Assets/first.png")} alt="Item 1" />
                    <div>
                        <h3>Item 1</h3>
                        <p>Price: $10</p>
                    </div>
                    <Button variant="success" onClick={() => addItem({ name: 'Item 1', price: 10, image: 'item1.jpg' })}>
                        Add to Cart
                    </Button>
                </div>
                <div className='col-lg-4 '>
                    <img style={{ height: "20em" }} src={require("../Assets/second.jpeg")} alt="Item 2" />
                    <div>
                        <h3>Item 2</h3>
                        <p>Price: $15</p>
                    </div>
                    <Button variant="success" onClick={() => addItem({ name: 'Item 2', price: 15, image: 'item2.jpg' })}>
                        Add to Cart
                    </Button>
                </div>
                <div className='col-lg-4'>
                    <img style={{ width: "17em", height: "20em" }} src={require("../Assets/third.png")} alt="Item 3" />
                    <div>
                        <h3>Item 3</h3>
                        <p>Price: $20</p>
                    </div>
                    <Button variant="success" onClick={() => addItem({ name: 'Item 3', price: 20, image: 'item3.jpg' })}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Shopping
