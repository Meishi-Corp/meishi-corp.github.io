import styles from './main.module.scss'

export default function Main (props) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main} >
          <h1 className={styles.title}>
            Welcome to <a href="/">Meishi!</a>
          </h1>  
          {props.description}
          {props.image}
          {props.footer}
        </main>
      </div>
    </>
  )
}
