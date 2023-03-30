import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Sarzi"
            comments="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget mattis tortor. Vivamus mollis faucibus metus nec venenatis. Fusce ultricies vestibulum tellus id elementum."
          />

          <Post 
            author="João Ferreira"
            comments="Nullam porttitor sit amet purus et ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed purus aliquam, tristique purus et, malesuada dui. Nulla facilisi."
          />
        </main>
      </div>

    </div>
  )
}

export default App
