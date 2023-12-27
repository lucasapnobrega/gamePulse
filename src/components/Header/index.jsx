import LinksIcons from '../LinksIcons'
import styles from './Header.module.css'

export default () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <h1>
          GamePulse
          <i className="fa-solid fa-gamepad"></i>
        </h1>
        <p>Register your favorite games!</p>
      </div>

      <div className={styles.links}>
        <LinksIcons href="https://github.com/lucasapnobrega" iconClassName="fa-brands fa-github" title="Acess GitHub" />

        <LinksIcons href="https://www.linkedin.com/in/lucas-alc%C3%A2ntara-b46245278/" iconClassName="fa-brands fa-linkedin" title="Acess Linkedin" />
      </div>
    </header>
)
}