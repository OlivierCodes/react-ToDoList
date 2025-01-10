// Ce composant est utilisé pour afficher la liste des tâches.
import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";
export const TaskList = ({
  tasksList,
  incompletedTasks,
  editTask,
  deleteTask,
}) => {

  const taskList = tasksList.map((task) => 
      <TaskItem key={task.id} />
  );

  return (
    <div className="box">
      <h2 className={styles.title}>
          Il te reste encore {incompletedTasks} taches à accomplir !
      </h2>
      {tasksList && TaskList.length > 0 && (
        <ul className={styles.container}>
          {taskList}
        </ul>
      )}
      
    </div>
  );
};
