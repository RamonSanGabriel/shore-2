import { Link } from 'react-router-dom';
import { contacts } from '../../data/contacts';
import css from './Contacts.module.css';
// import SocialMedia from '../SocialMedia/SocialMedia';
// import { FaPhone } from 'react-icons/fa6';

const Contacts = () => {
  return (
    <>
      <div className={css.contactsWrapper}>
        <h1 className={css.contactsHeader}>Contacts us</h1>
        <hr />
        <ul className={css.contactsList}>
          {/* <FaPhone /> */}
          {contacts.map(({ id, title, icon: Icon, href, child, message }) => (
            <li key={id}>
              <p>{message}</p>
              {<Icon />} {child}
              {/* <h4>{title}</h4> */}
              <p className={css.tel}>{href}</p>
            </li>
          ))}
          {/* <SocialMedia /> */}
        </ul>
      </div>
      {/* <div> */}
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
    </>
  );
};

export default Contacts;
