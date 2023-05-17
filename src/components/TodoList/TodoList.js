import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ items, removeItem }) => {
    return (
        <div>
            {items.map((item, index) => (
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    removeItem={removeItem}
                />
            ))}
        </div>
    );
};

export default TodoList;
