import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/diegosarzi.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                                <strong>Diego Sarzi</strong>
                                <time title='29 de março às 08:20h' dateTime='2022-03-29 08:20:30'>Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito bem, Devon!
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}