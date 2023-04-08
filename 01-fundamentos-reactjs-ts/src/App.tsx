import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diegosarzi.png',
      name: 'Diego Sarzi',
      role: 'Techlead'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'diegosarzi.com.br'}
    ],
    publishedAt: new Date('2023-03-30 08:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rafasarzi.png',
      name: 'Rafa Sarzi',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera!'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mattis tortor. Vivamus mollis faucibus metus nec venenatis. Fusce ultricies vestibulum tellus id elementum.'},
      {type: 'link', content: 'diegosarzi.com.br'}
    ],
    publishedAt: new Date('2023-03-23 22:30:00')
  },
];

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>

    </div>
  )
}

export default App
