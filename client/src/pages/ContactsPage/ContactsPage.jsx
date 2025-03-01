import { Helmet, HelmetProvider } from 'react-helmet-async';
import Contacts from '../../components/Contacts/Contacts';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

const ContactsPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Contacts />
    </HelmetProvider>
  );
};

export default ContactsPage;
