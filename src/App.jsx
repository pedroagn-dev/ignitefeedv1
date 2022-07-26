import { Header } from './components/header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './style.css'
import {Sidebar} from './components/sidebar'
export function App() {


  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post author="Pedro Augusto"
       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis fugit temporibus aliquid, odio voluptates nesciunt autem, enim ullam consequuntur neque repellendus, necessitatibus cupiditate perferendis error non id vero ab?" 
       />
      <Post Post author="Gabriel Monteiro"
       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facilis fugit temporibus aliquid, odio voluptates nesciunt autem, enim ullam consequuntur neque repellendus, necessitatibus cupiditate perferendis error non id vero ab?" />
        </main>
      </div>
    </div>
   
  )
}

export default App
