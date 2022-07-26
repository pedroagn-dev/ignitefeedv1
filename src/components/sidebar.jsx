import {NotePencil} from 'phosphor-react'
import styles from './sidebar.module.css'
import {Avatar} from "./avatar";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1587024669552-a0e531121cd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=8000" alt=""/>
            <div className={styles.profile}>
        <Avatar hasBorder={false} src="https://i.pinimg.com/736x/22/d9/aa/22d9aa7e0c8ba1ef520b0dda5bdfbff0.jpg" />

                <strong>Pedro Augusto</strong>
                
                <span>Front-End Developer</span>
                
            </div>

            <footer>
                <a href="#">
                    <NotePencil size={20}/>
                    Edite seu perfi
                </a>
            </footer>
            
        </aside>
    )
}