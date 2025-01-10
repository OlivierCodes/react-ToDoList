import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { useState } from "react";


// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export const TaskContainer = () => {
  const [tasksList, setTasksList] = useState([]);
  // Ajouter une tache 
  const addTask = (title) => {
    const newTask = {
      id:tasksList.length +1,
      title: title,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
  };

  // modifier une tache
  const editTask = (id, completedValue) => {
    setTasksList(
      tasksList.map((task) => 
        task.id === id ? {...task, completed: completedValue} : task
      ) 
    )
  };
  
  // Supprimer une tache
  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id))
  }

  // Definir les taches complets et les taches incomplets
  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return {
      completedTasks,
      incompletedTasks
    }
  }

  const { completedTasks, incompletedTasks} = getTaskCounts();
  console.log(completedTasks, incompletedTasks);

  return (
    <main>
      <Header/>
      <TaskInput addTask={addTask} />
      <TaskList 
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks}
         />
      <Footer />
    </main>
  );
};
