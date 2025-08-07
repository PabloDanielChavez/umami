import styles from '../styles/sections/login.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const[cantidad, setCantidad] = useState(0);

  function handleClick() {
    setCantidad(cantidad + 1);
  }
  return (
    <section className={styles.login}>
      <div className={styles.login__box}>
        <h3 className={styles.login__h3}>Iniciar sesión</h3>
        <form className={styles.login__form} action="/api/login" method="POST">

          <div className={styles.login__boxInput}>
            <input  className={styles.login__input} type="email" id="email" placeholder='Correo' name="email" required />
            <span className={`${styles.login__inputIcono} material-symbols-outlined`}>person</span>
          </div>

          <div className={styles.login__boxInput}>
            <input className={styles.login__input} type="password" id="password" placeholder='Contraseña' name="password" required />
            <span className={`${styles.login__inputIcono} material-symbols-outlined`}>key</span>
          </div>

          <div className={styles.login__boxInputRecordame}>
            <label for="remember"><input className={styles.login__input} type="checkbox" id="remember" name="remember" />Recordarme</label>
            <a href="#">Olvide mi contraseña</a>
          </div>

          <div className={styles.login__boxInput1212}>
            <div className="g-recaptcha" data-sitekey="TU_CLAVE_PUBLICA_RECAPTCHA"></div>
          </div>

          <button className={styles.login__btn} type="submit">Ingresar</button>
        </form>
        <div className={styles.login__boxRegistro}>
          <p>
            ¿No tenés cuenta? <a href="/usuario/registro">Registrate acá</a>
            <HolaBoton cantidad={cantidad} onClick={handleClick} />
            <HolaBoton cantidad={cantidad} onClick={handleClick} />
          </p>
        </div>
      </div>
    </section>
  );
}

function HolaBoton({cantidad, onClick}) {
  return (
    <>
      <button onClick={onClick}>Haceme click, gordo. {cantidad}</button>
    </>
  )
}