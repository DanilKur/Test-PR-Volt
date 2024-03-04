import React from 'react';

import GoalItem from '../GoalItem/GoalItem';
import './GoalList.css';

const GoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <GoalItem
          key={goal.id}
          id={goal.id}
          completed={goal.completed}
          onDelete={props.onDeleteItem}
          onToggleCompletion={props.onToggleCompletion}
        >
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;