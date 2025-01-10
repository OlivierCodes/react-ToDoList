// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import { useState } from "react";
import styles from "./taskInput.module.css";
export const TaskInput = ({ addTask }) => {

  const [taskTitle, setTaskTitle] = useState("");
  
  const handleInputChange = (e) =>{
    setTaskTitle(e.target.value);
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskTitle.trim()){
      addTask(taskTitle);
      setTaskTitle("");
    }else{
      console.log("taskTitle is empty");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>🎯 Ajoute ta prochaine tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquer un titre de tache explicite."
          onChange={handleInputChange}
          value={taskTitle}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
