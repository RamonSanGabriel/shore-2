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
      </div>
      {/* <div className={css.formWrapper}> */}
      <form
        className={css.form}
        action="https://getform.io/f/ayvpgdpb"
        method="POST"
      >
        <div className={css.formWrapper}>
          <label className={css.formField}>
            <span className={css.formLabel}>Name*</span>
            <input className={css.formInput} placeholder="Enter full name" />
          </label>
        </div>
        <div className={css.formWrapper}>
          <label className={css.formField}>
            <span className={css.formLabel}>Email*</span>
            <input className={css.formInput} placeholder="example@email.com" />
          </label>
        </div>
        <div className={css.formWrapper}>
          <label className={css.formField}>
            <span className={css.formLabel}>Message</span>
            <textarea
              className={css.textArea}
              rows={10}
              cols={6}
              placeholder="we love to hear from you..."
            ></textarea>
          </label>
          <button className={css.formBtn}>Send</button>
        </div>
      </form>
      {/* </div> */}
    </>
  );
};

export default Contacts;
