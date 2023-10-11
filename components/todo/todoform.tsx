import React, {useState} from 'react'
import styles from './todo.module.css'

interface TodoFormProps {
    onAddTask: (task: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({onAddTask}) => {
    const [task, setTask] = useState<string>('')

    const inputChange = (e:any) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        if(task.trim()){
            onAddTask(task)
            setTask('')
        }
    }

    return (
        <div className={styles.form}>
            <input 
                type="text" 
                title='todo'
                placeholder='todo'
                className={styles.field} 
                value={task}
                onChange={inputChange}
                />
            <span 
                className={`${styles.btn} ${styles.add}`} 
                onClick={addTask}
                >&#x2b;</span>
        </div>
    )
}

export default TodoForm