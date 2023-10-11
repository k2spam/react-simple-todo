import Image from 'next/image'
import styles from './page.module.css'

import Todo from '../components/todo/todo'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.todo}>
           <Todo/>
        </div>
      </div>
    </main>
  )
}
