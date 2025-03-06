import { FaPhoneAlt, FaShareAlt } from 'react-icons/fa';
import SocialMedia from '../components/SocialMedia/SocialMedia';

export const contacts = [
  {
    id: 1,
    icon: FaPhoneAlt,
    title: 'Phone',
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
    description: 'Social Profiles',
    child: <SocialMedia />,
  },
];
