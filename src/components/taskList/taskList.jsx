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
      <TaskItem 
        key={task.id} 
        task={task} 
        editTask={editTask}
        deleteTask={deleteTask}
      />
  );

  if (taskList && taskList.length > 0){
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasks > 0 && (
            <>Il te reste encore <span className="important">{incompletedTasks}</span> taches à accomplir !</>
          )}

          {incompletedTasks === 0 && (
            <>🤝 Génial, tu as accompli toutes taches !</>
          )}
        </h2>

        {tasksList && TaskList.length > 0 && (
          <ul className={styles.container}>
            {taskList}
          </ul>
        )}
        
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
      👋 Salut, Tu n'as rien à faire ! Profites de ton temps libre !
      </h2>
    </div>
    
  )
  
};
