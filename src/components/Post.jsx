import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    1,
    2,
  ])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateFormattedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  // Biblioteca nativa JS de manipulação de data
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(publishAt)

  function handleCreateNewComment() {
    event.preventDefault();

    // ... lê o valor da variavel e copia
    setComments([...comments, comments.length+1]);

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
          {publishedDateFormattedRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Fale algo legal"
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>


    </article>
  );
}