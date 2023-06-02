import './App.css';

import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => {
      return item !== itemToRemove;
    });
    setItems(newItems);
  }

  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  function Item({ item, onRemoveItem }) {
    const [isCompleted, setIsCompleted] = useState(false);

    const toggleCompletion = () => {
      setIsCompleted(!isCompleted);
    };

    const itemStyle = {
      textDecoration: isCompleted ? "line-through" : "none",
    };

    return (
      <li style={itemStyle}>
        {item}
        <input className='check'
          type="checkbox"
          checked={isCompleted}
          onChange={toggleCompletion}
        />
      </li>
    );
  }

  return (
    <>
    <div className="listt">
      <h1>CheckList</h1>
      
      <div className="add-list">
      <div className='lines'>
        <h2>Enter items to add</h2>
        
        <form onSubmit={onSubmit}>
          <input className='add-content'
            type="text"
            name="item"
            placeholder="Add item"
            required
          />
          <button className='add-button'>Add</button>
        </form>
        <ul>
          
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
            
          ))}
     
        </ul>
        
        </div>
      </div>
      </div>
    </>
  );
}
