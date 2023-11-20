import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { useDispatch,  useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getContactsThunks } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {

  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    dispatch(getContactsThunks());
  }, [dispatch]);





  return (
    <div
      style={{
        width: '400px',
        margin: '1rem',
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '10px',
        textAlign: 'center',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ContactForm />
      {items.length === 0 ? <span>There are no contacts</span> : <Filter />}
      {isLoading === true && <span>Updating, please wait...</span>}
      <ContactList />
      {error !== null && <span>Oops, please try again</span>}
    </div>
  );
};
