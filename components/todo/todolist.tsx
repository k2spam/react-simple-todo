import React from 'react'
import Image from 'next/image'

import styles from './todo.module.css'

interface TodoListProps {
    tasks: string[],
    onDeleteTask: (taskId: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({tasks, onDeleteTask}) => {
    const deleteTask = (key: number) => {
        onDeleteTask(key)
    }

    return (
        <ul className={styles.list}>
            {tasks.map((task, index) => (
                <li key={index} className={styles.listItem}>
                    <span>{task}</span>
                    <span 
                        className={`${styles.btn} ${styles.del}`}
                        onClick={deleteTask.bind(this, index)}
                    >
                        <Image 
                            src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAF5JREFUOI1jYMAOmID4PxpmxKEWK5AD4v1I/ANALEtI018stuLCf7EZ8J8EF2JVS7ELiHUFXjVUMwDmxHQgToOy/5BiAIzOAeJsHHKjBhAwgOJYIFtNEgPhZJyIrAEAvt1P9DTpfcEAAAAASUVORK5CYII="} 
                            width={16} 
                            height={16}
                            alt='del' />
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default TodoList