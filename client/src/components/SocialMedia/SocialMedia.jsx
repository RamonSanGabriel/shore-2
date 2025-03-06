import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import { Link } from 'react-router-dom';
import css from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div>
      <h2 className={css.title}>Social Media</h2>
      <ul className={css.socialsList}>
        {socialLinks.map(({ id, href, icon: Icon }) => (
          <li className={css.socialsListItem} key={id}>
            <Link
              className={css.socialsLink}
              to={href}
              target="_blanket"
              rel="noreferrer noopener"
            >
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
