import { Link } from 'react-router-dom';
import { contacts, contactsHeader } from '../../data/contacts';
import css from './Contacts.module.css';
// import SocialMedia from '../SocialMedia/SocialMedia';
// import { FaPhone } from 'react-icons/fa6';

const Contacts = () => {
  const { title, subtitle, content } = contactsHeader;
  return (
    // <>
    <div className={css.contactsWrapper}>
      <h1 className={css.contactsHeader}>{title}</h1>
      <hr />
      <ul className={css.contactsList}>
        {/* <FaPhone /> */}
        <div className={css.contactsContent}>
          <h4>{subtitle}</h4>
          <p>{content}</p>
        </div>
        {contacts.map(({ id, title, icon: Icon, href, child, message }) => (
          <li key={id}>
            <p>{message}:</p>
            {<Icon />} {child}
            {/* <h4>{title}</h4> */}
            <p className={css.tel}>{href}</p>
          </li>
        ))}
        {/* <SocialMedia /> */}
      </ul>
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
              placeholder="Send us a message..."
              required
            ></textarea>
          </label>
          <button className={css.formBtn} type="submit">
            Send
          </button>
        </div>
      </form>
    </div>

    // </>
  );
};

export default Contacts;
