import { useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          <Post 
            author="João"
            contenet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          />
          <Post 
            author="João"
            contenet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
          />
        </main>
      </div>
    </div>
  );
}