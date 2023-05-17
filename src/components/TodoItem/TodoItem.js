import React from "react";

const TodoItem = ({ item, index, removeItem }) => {
    return (
        <div>
            <p>{item}</p>
            <button onClick={() => removeItem(index)}>Delete</button>
        </div>
    );
};

export default TodoItem;
