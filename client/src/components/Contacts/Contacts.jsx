import { Link } from 'react-router-dom';
import { contacts } from '../../data/contacts';
import css from './Contacts.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';

const Contacts = () => {
  return (
    <>
      <h1>Contacts Page</h1>
      <div className={css.contactsWrapper}>
        <ul className={css.contactsList}>
          {contacts.map(({ id, title, icon: Icon, href }) => (
            <li key={id}>
              <h2>{title}</h2>
              <p className={css.tel}>{href}</p>
            </li>
          ))}
        </ul>
        <SocialMedia />

        <form action="https://getform.io/f/ayvpgdpb" method="POST">
          <div className={css.formWrapper}>
            <label className={css.formField}>
              <input className={css.formInput} />
              <span className={css.formLabel}>Name*</span>
            </label>
          </div>
          <div className={css.formWrapper}>
            <label className={css.formField}>
              <input className={css.formInput} />
              <span className={css.formLabel}>Email*</span>
            </label>
          </div>
          <label>
            <textarea></textarea>
            <span>Message</span>
          </label>
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
