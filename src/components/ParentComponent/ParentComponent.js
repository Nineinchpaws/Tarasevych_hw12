import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";

const ParentComponent = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const handleChange = (event) => {
        setNewItem(event.target.value);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" value={newItem} onChange={handleChange} />
            <button onClick={addItem}>Add Item</button>
            <TodoList items={items} removeItem={removeItem} />
        </div>
    );
};

export default ParentComponent;
