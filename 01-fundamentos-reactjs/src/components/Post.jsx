import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post( { author, publishedAt, content } ) {

    const [comments, setComments] = useState(['Post muito bacana!']);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'",{locale: ptBr});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    });

    const newCommentEmpty = newCommentText.length === 0;

    function handleCreateNewComment(){
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne);
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>

                {content.map(line=>{
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if(line.type == 'link'){
                        return <a href="#" key={line.content}>{line.content}</a>;
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment' 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                 <button type='submit' disabled={newCommentEmpty}>Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment=>{
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    )
}