import './App.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

import React, { useState } from "react";
import { Link } from '@mui/material';

export default function App() {
  const [items, setItems] = useState([]);

  function removeItem(itemToRemove) {
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

  function Item({ item, removeItem }) {
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
                <Item removeItem={removeItem} key={item + index} item={item} />

              ))}

            </ul>
            <div className='bookmark'>
              <div className='copyright'>
              @suni21
              </div>
              <div>
                <a className='i-1' href='https://www.linkedin.com/in/suniti-16852b1b7/' target='_blank'>
                <AiFillLinkedin></AiFillLinkedin>
                </a>
                <a className='i-2' href='https://github.com/suni21' target='_blank'>
                <AiFillGithub></AiFillGithub>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </>
  ); m
}
