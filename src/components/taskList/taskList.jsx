// Ce composant est utilisé pour afficher la liste des tâches.
import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";
export const TaskList = () => {
  return (
    <div className="box">
      <h2 className={styles.title}>
          Il te reste encore x taches à accomplir !
      </h2>
      <ul className={styles.container}>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </div>
  );
};
