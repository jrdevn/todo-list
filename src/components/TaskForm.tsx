import React ,{useState, ChangeEvent, FormEvent, useEffect} from 'react'

import styles from './TaskForm.module.css'
import {ITask} from '../interface/ITask'


interface Props  {
  btnText: string
}



const TaskForm = ({btnText}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  const addTaskHandler = () => {

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.name === 'title') {
        setTitle(e.target.value)
      } else {
        setDifficulty(parseInt(e.target.value))
      }

      console.log(title)
      console.log(difficulty)
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title"> Title: </label>
        <input type="text" name="title" placeholder='Title of task' onChange={handleChange} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficult"> Dificuldade: </label>
        <input type="text" name="title" placeholder='Difficult of task' onChange={handleChange}/>
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm