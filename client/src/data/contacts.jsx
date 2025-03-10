import { FaPhoneAlt, FaShareAlt } from 'react-icons/fa';
import SocialMedia from '../components/SocialMedia/SocialMedia';

export const contactsHeader = {
  title: 'Contact us',
  subtitle: 'Feel free to reach out',
  content: 'We love to hear from you soon.',
};
export const contacts = [
  {
    id: 1,
    icon: FaPhoneAlt,
    message: 'Call us',
    title: 'Mobile',
    href: (
      <a
        // style={{
        //   textDecoration: 'none',
        //   color: '#000000',
        //   fontSize: '20px',
        // }}
        href="tel:+639561705622"
      >
        +63 956 170 5622
      </a>
    ),
  },
  {
    id: 2,
    icon: FaShareAlt,
    message: 'Send us a message',
    description: 'Social Profiles',
    child: <SocialMedia />,
  },
];
