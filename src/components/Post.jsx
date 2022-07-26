import styles from './Post.module.css'
import {Comment} from "./Comment";
import {Avatar} from "./avatar";

export function Post() {
    return (
        <article className={styles.post}>
            <header>


                <div className={styles.author}>
                    <Avatar hasBorder src="https://i.pinimg.com/736x/22/d9/aa/22d9aa7e0c8ba1ef520b0dda5bdfbff0.jpg"/>
                    <div className={styles.authorInfo}><strong>Pedro Augusto</strong>
                        <span>Front-End Developer</span>
                    </div>
                </div>


                <time title="23 de julho às 16:16h" dateTime="2022-07-23">Publicado à 1h</time>
            </header>
            <div className={styles.content}>

                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite, Curso da Rocketseat.
                    O nome do projeto é IgniteFeed 🚀</p>

                <p> 👉 <a href='#'>pedroagn.design/ignitefeed</a></p>

                <p>👉 {'  '}
                    <a href="#">#projetonovo</a>{'  '}
                    <a href="#">#rocketseat</a>{'  '}


                </p>
                <div id="rocketseat"></div>
            </div>

            <form className={styles.comentForms}>

                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário!"></textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={"CommentList"}>
                <Comment/>
            </div>

        </article>
    )
}