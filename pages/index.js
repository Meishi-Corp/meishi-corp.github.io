import Main from '../components/Main'
import Footer from '../components/Footer'
import styles from '../components/main.module.scss'

export default function Home() {
  return (
    <div className={styles.container} >
      <Main />
      <Footer />
    </div>
  )
}
