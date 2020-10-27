import styles from './Picture.module.scss'

export default function Picture () {
  return (
    <>
      <center>
        <img src="/i_ching_Meishi.png" alt="I-Ching Meishi" className={styles.picture} />
        <p>Meishi (名刺) comes from Japanese and can be translated as Business card.</p>
      </center>
    </>
  )
}
