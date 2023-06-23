import './App.css';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function onRemoveItem(itemToRemove) {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  }

  function onUpdateItem(index, newItem) {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
  }

  // function onSubmit(event) {
  //   event.preventDefault();
  //   setItems([...items, inputValue]);
  //   setInputValue("");
  // }
  function onSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.item;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
    setInputValue(""); // Reset the input value
  }

  function handleSave(index, newItem) {
    onUpdateItem(index, newItem);
  }

  function Item({ item, onRemoveItem, onUpdateItem, index }) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editValue, setEditValue] = useState(item);

    const toggleCompletion = () => {
      setIsCompleted(!isCompleted);
    };

    const handleEdit = () => {
      setEditMode(true);
    };

    const handleCancel = () => {
      setEditMode(false);
      setEditValue(item);
    };

    const itemStyle = {
      textDecoration: isCompleted ? "line-through" : "none",
    };

    const handleInputChange = (e) => {
      setEditValue(e.target.value);
    };

    const handleEditSave = () => {
      handleSave(index, editValue);
      setEditMode(false);
    };

    return (
      <li className="item">
        {editMode ? (
          <>
            <input
              type="text"
              value={editValue}
              onChange={handleInputChange}
            />
            <button onClick={handleEditSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <span style={itemStyle}>{item}</span>
            <button onClick={handleEdit}>Edit</button>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={toggleCompletion}
            />
            <button className="delete" onClick={() => onRemoveItem(item)}>
              Cancel
            </button>
          </>
        )}
      </li>
    );
  }

  return (
    <>
      <div className="listt">
        <h1>To-Do List</h1>
        <div className="add-list">
          <h2>Add items</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="item"
              placeholder="Add a new item"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          <ul>
            {items.map((item, index) => (
              <Item
                key={index}
                index={index}
                item={item}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
              />
            ))}
          </ul>
        </div>

        <div className="bookmark">
          <div className="copyright">@suni21</div>
          <div>
            <a
              className="i-1"
              href="https://www.linkedin.com/in/suniti-16852b1b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="i-2"
              href="https://github.com/suni21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
