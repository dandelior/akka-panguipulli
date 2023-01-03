import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/parts/Contact.module.sass';

const Contact = () => {
  const [state, handleSubmit] = useForm('xbjejrad');

  return (
    <div className={styles.contactSection} id="contact">
      <div className={`centeredContent ${styles.contactSectionInner}`}>
        <div className={styles.contactSectionHeader}>
          <h2>Contáctanos</h2>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Mensaje"
            required
          ></textarea>
          {state.submitting && (
            <div className={styles.formMessage}>
              <p>Enviando...</p>
            </div>
          )}
          {state.succeeded && (
            <div className={styles.formMessage}>
              <p>
                Gracias, tu mensaje ha sido enviado. Nos pondrémos en contacto
                contigo a la brevedad.
              </p>
            </div>
          )}
          {state.errors.length !== 0 && (
            <div className={`${styles.formMessage} ${styles.isErrorMessage}`}>
              <p>
                Ha ocurrido un error al enviar el mensaje, por favor intenta más
                tarde.
              </p>
            </div>
          )}
          <button type="submit" disabled={state.submitting || state.succeeded}>
            Enviar Mensaje
          </button>
        </form>
        <div className={styles.personalContact}>
          <div className={styles.item}>
            <p className={styles.strong}>Salazar Propiedades</p>
            <p>
              Paola Salazar
              <br />
              <a href="maito:paolasalazarcorretaje@gmail.com">
                paolasalazarcorretaje@gmail.com
              </a>
              <br />
              <a href="tel:+56950186096">+56 9 5018 6096</a>
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.strong}>Property Partners</p>
            <p>
              Camila Silva Bruce
              <br />
              <a href="mailto:camila.silva@ppartnersgroup.com">
                camila.silva@ppartnersgroup.com
              </a>
              <br />
              <a href="tel:+56964415545">+56 9 6441 5545</a>
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.strong}>Hugo Perez</p>
            <p>
              Hugo Perez
              <br />
              <a href="mailto:hugoperez@surinspira.cl">
                hugoperez@surinspira.cl
              </a>
              <br />
              <a href="tel:+56996391103">+56 9 9639 1103</a>
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.strong}>Ernst Thurn</p>
            <p>
              Ernst Thurn
              <br />
              <a href="mailto:lacasanicho@gmail.com">lacasanicho@gmail.com</a>
              <br />
              <a href="tel:+56977903685">+56 9 7790 3685</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
