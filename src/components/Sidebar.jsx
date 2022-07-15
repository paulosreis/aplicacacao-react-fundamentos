import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
                alt="Foto de capa do perfil"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://github.com/paulosreis.png"
                    alt="Foto de Perfil"
                />

                <strong>Paulo Guilherme</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}