import styles from '../styles/sections/registro.module.scss';
import Link from 'next/link';



export default function Registro() {
  return (
    <section className={styles.registro}>
      <div className={styles.registro__box}>
        <h3 className={styles.registro__h3}>Registrarse</h3>
        <form className={styles.registro__form} action="/api/registro" method="POST">

          <div className={styles.registro__boxInput}>
            <input  className={styles.registro__input} type="email" id="email" placeholder='Correo' name="email" required />
            <span className={`${styles.registro__inputIcono} material-symbols-outlined`}>person</span>
          </div>

          <div className={styles.registro__boxInput}>
            <input className={styles.registro__input} type="password" id="password" placeholder='Contraseña' name="password" required />
            <span className={`${styles.registro__inputIcono} material-symbols-outlined`}>key</span>
          </div>

          <div className={styles.registro__boxInputRecordame}>
            <label for="remember"><input className={styles.registro__input} type="checkbox" id="remember" name="remember" />Recordarme</label>
          </div>

          <div className={styles.registro__boxInput1212}>
            <div className="g-recaptcha" data-sitekey="TU_CLAVE_PUBLICA_RECAPTCHA"></div>
          </div>

          <button className={styles.registro__btn} type="submit">Registrar</button>
        </form>
        <div className={styles.registro__boxRegistro}>
          <p>
            ¿Ya tenés cuenta? <a href="/usuario/ingresar">Ingresa acá</a>
          </p>
        </div>
      </div>
    </section>
  );
}
