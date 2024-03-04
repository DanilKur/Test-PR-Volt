import React, { useState } from 'react';

import GoalList from './components/Goals/GoalList/GoalList';
import Input from './components/Goals/Input/Input';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1', completed: false },
    { text: 'Finish the course!', id: 'g2', completed: false }
  ]);
  const [filter, setFilter] = useState('all');

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString(), completed: false });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const toggleCompletionHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.map(goal => {
        if (goal.id === goalId) {
          return { ...goal, completed: !goal.completed };
        }
        return goal;
      });
      return updatedGoals;
    });
  };

  const filterGoalsHandler = type => {
    setFilter(type);
  };

  const filteredGoals = courseGoals.filter(goal => {
    if (filter === 'completed') {
      return goal.completed;
    } else if (filter === 'current') {
      return !goal.completed;
    }
    return true;
  });

  const completedGoalsCount = courseGoals.filter(goal => goal.completed).length;
  const uncompletedGoalsCount = courseGoals.filter(goal => !goal.completed).length;

  let content = (
    <p className='app-content'>No goals found. Maybe add one?</p>
  );

  if (filteredGoals.length > 0) {
    content = (
      <GoalList
        items={filteredGoals}
        onDeleteItem={deleteItemHandler}
        onToggleCompletion={toggleCompletionHandler}
      />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <Input onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <div className="filter-buttons">
          <button className="all-btn" onClick={() => filterGoalsHandler('all')}>All</button>
          <button className="completed-btn" onClick={() => filterGoalsHandler('completed')}>Completed</button>
          <button className="current-btn" onClick={() => filterGoalsHandler('current')}>Current</button>
        </div>
        <div className="goal-counters">
          <p>Completed goals: {completedGoalsCount}</p>
          <p>Uncompleted goals: {uncompletedGoalsCount}</p>
        </div>
        {content}
      </section>
    </div>
  );
};

export default App;
