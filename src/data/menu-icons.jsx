import { MdHome, MdMiscellaneousServices } from 'react-icons/md';
import { ImAccessibility } from 'react-icons/im';
import { TfiGallery } from 'react-icons/tfi';
import { RiContactsBook3Fill } from 'react-icons/ri';

export const menuIcons = [
  {
    id: 1,
    icon: MdHome,
    label: 'Home',
    path: '/',
  },
  {
    id: 2,
    icon: ImAccessibility,
    label: 'About',
    path: 'about',
  },
  {
    id: 3,
    icon: MdMiscellaneousServices,
    label: 'Services',
    path: 'services',
  },
  {
    id: 4,
    icon: TfiGallery,
    label: 'Gallery',
    path: 'gallery',
  },
  {
    id: 5,
    icon: RiContactsBook3Fill,
    label: 'Contacts',
    path: 'contacts',
  },
];
