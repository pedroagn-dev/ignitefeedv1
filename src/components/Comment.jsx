import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./avatar";

export function Comment(){
    return(
        <div className={styles.Comment}>
            <Avatar  className={styles.gabriel} src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2022/03/28095915/gabriel-monteiro_00119866_0.jpg" alt=""/>


                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>

                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Gabriel Monteiro</strong>
                                <time title="23 de julho às 16:16h" dateTime="2022-07-23">Cerca de 1h atrás</time>
                            </div>

                            <button title="Deletar comentário">
                                <Trash size={24} className={styles.lixeira}/>
                            </button>

                        </header>

                        <p> Muito bom Pedro, parabéns 👏</p>

                    </div>

                    <footer>
                        <button>
                            <ThumbsUp className={styles.like} color="currentColor" />
                            Curtir <span>39</span>
                        </button>
                    </footer>

                </div>
        </div>
    )
}