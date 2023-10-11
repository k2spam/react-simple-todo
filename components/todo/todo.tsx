"use client"
import React, {useState} from 'react'
import TodoList from './todolist'
import TodoForm from './todoform'

import styles from './todo.module.css'

const Todo: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([
        'first', 'second', 'third'
    ])
    const addTask = (task: string) => setTasks([...tasks, task])
    const deleteTask = (key: number) =>  setTasks(tasks.filter((_, k) => k !== key))

    return (
        <div className={styles.todo}>
            <h2>simple todo list</h2>
            <TodoForm onAddTask={addTask}/>
            <TodoList tasks={tasks} onDeleteTask={deleteTask}/>
        </div>
    )
}

export default Todo