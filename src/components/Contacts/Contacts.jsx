// import { useEffect } from 'react';
// import { getContacts } from 'redux/selectors';
// import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};
