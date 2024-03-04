import React from 'react';

import './GoalItem.css';

const GoalItem = props => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  const toggleCompletionHandler = () => {
    props.onToggleCompletion(props.id);
  };

  return (
    <li className={`goal-item ${props.completed ? 'completed' : ''}`} onClick={toggleCompletionHandler}>
      <span>{props.completed ? 'Completed ' : ' '}</span>
      {props.children}
      <button className="delete-btn" onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default GoalItem;