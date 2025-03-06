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
        action="https://getform.io/f/akkypzma"
        method="POST"
      >
        <div className={css.formWrapper}>
          <label className={css.formField}>
            <span className={css.formLabel}>Name*</span>
            <input
              className={css.formInput}
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </label>
        </div>
        <div className={css.formWrapper}>
          <label className={css.formField}>
            <span className={css.formLabel}>Email*</span>
            <input
              className={css.formInput}
              type="email"
              name="email"
              placeholder="john_doe@email.com"
              required
            />
          </label>
        </div>
        <div className={css.formWrapper}>
          <label className={css.formField}>
            <span className={css.formLabel}>Message</span>
            <textarea
              className={css.textArea}
              rows={10}
              cols={6}
              type="text"
              name="message"
              placeholder="We love to hear from you..."
              required
            ></textarea>
          </label>
          <button className={css.formBtn} type="submit">
            Send
          </button>
        </div>
      </form>
      {/* </div> */}
    </>
  );
};

export default Contacts;
