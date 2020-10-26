import styles from './main.module.scss'

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="/">Meishi!</a>
      </h1>
    </main>
  )
}
